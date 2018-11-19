import { MutationResolvers } from "./resolvers-types";
import { Ctx } from "../createServer";
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

const Mutations: MutationResolvers.Resolvers<Ctx> = {
  createItem(parent, args, ctx) {
    return ctx.client.createItem({
      title: args.data.title || "Default Title",
      description: args.data.description || "default description",
      image: args.data.image || undefined,
      largeImage: args.data.largeImage || undefined,
      price: args.data.price || 0,
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
        permissions: { set: ['USER'] }
    });

    const token = sign({ userId: user.id }, process.env.APP_SECRET!);

    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });

    return user;
  },
  async signin(parent, { email, password }, ctx, info) {
    // Check if there is a user.
    const user = await ctx.client.user({ email });
    if(!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // Check if password matches
    const valid = await compare(password, user.password);
    if(!valid) {
      throw new Error('Invalid password!');
    }
    // Generate Token
    const token = sign({ userId: user.id }, process.env.APP_SECRET!);
    // Set cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    // Return the user
    return user;
  },
  async signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return {
      message: 'Goodbye!'
    };
  }
};

export default Mutations;
