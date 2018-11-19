import { MutationResolvers } from "./resolvers-types";
import { Ctx } from "../createServer";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { randomBytes } from "crypto";
import { promisify } from "util";
import { CookieOptions } from "express-serve-static-core";

const ONE_HOUR = 1000 * 60 * 60;
const ONE_YEAR = ONE_HOUR * 24 * 365;

const COOKIE_SETTINGS: CookieOptions = {
  httpOnly: true,
  maxAge: ONE_YEAR,
}

const Mutations: MutationResolvers.Resolvers<Ctx> = {
  createItem(parent, args, ctx) {
    return ctx.client.createItem({
      title: args.data.title || "Default Title",
      description: args.data.description || "default description",
      image: args.data.image || undefined,
      largeImage: args.data.largeImage || undefined,
      price: args.data.price || 0
    });
  },
  updateItem(parent, args, ctx) {
    const { id, ...updates } = args.data;
    // @ts-ignore null | undefined issue.
    return ctx.client.updateItem({ data: updates, where: { id } });
  },
  async deleteItem(parent, args, ctx) {
    const where = { id: args.id };

    // const item = await ctx.client.item(where);
    // TODO : check permission

    return ctx.client.deleteItem(where);
  },
  async signup(parent, args, ctx) {
    const email = args.email.toLowerCase();

    const password = await hash(args.password, 10);

    const user = await ctx.client.createUser({
      ...args,
      email,
      password,
      permissions: { set: ["USER"] }
    });

    // Generate Token
    const token = generateToken(user.id);
    // Set cookie with the token
    ctx.response.cookie("token", token, COOKIE_SETTINGS);

    return user;
  },
  async signin(parent, { email, password }, ctx, info) {
    // Check if there is a user.
    const user = await ctx.client.user({ email });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // Check if password matches
    const valid = await compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid password!");
    }
    // Generate Token
    const token = generateToken(user.id);
    // Set cookie with the token
    ctx.response.cookie("token", token, COOKIE_SETTINGS);

    // Return the user
    return user;
  },
  async signout(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return {
      message: "Goodbye!"
    };
  },
  async requestReset(parent, { email }, ctx, info) {
    // Check if user exist
    const user = await ctx.client.user({ email });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }

    const resetToken = (await promisify(randomBytes)(20)).toString("hex");
    const resetTokenExpiry = Date.now() + ONE_HOUR;

    // Set Reset token & expiry
    await ctx.client.updateUser({ data: { resetToken, resetTokenExpiry }, where: { email } });
    // Email reset token
    return {
      message: "Success"
    };
  },
  async resetPassword(parent, args, ctx, info) {
    // Check if password match
    if (args.password !== args.confirmPassword) {
      throw new Error("Passwords don't match");
    }
    // Check if its legit token && check expired
    const [user] = await ctx.client.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - ONE_HOUR
      }
    });

    if (!user) {
      throw new Error("This token is either invalid or expired!");
    }
    // Hash new password
    const password = await hash(args.password, 10);
    // Save the new password and remove resetToken fields
    const updatedUser = await ctx.client.updateUser({
      where: {
        id: user.id
      },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    });

    // Generate Token
    const token = generateToken(user.id);
    // Set cookie with the token
    ctx.response.cookie("token", token, COOKIE_SETTINGS);

    // return new user
    return updatedUser;
  }
};

function generateToken(userId: string) {
  return sign({ userId }, process.env.APP_SECRET!);
}

export default Mutations;
