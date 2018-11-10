import { MutationResolvers } from "./resolvers-types";
import { Ctx } from "../createServer";

const Mutations: MutationResolvers.Resolvers<Ctx> = {
  createItem(parent, args, ctx, info) {
    return ctx.client.createItem({
      title: args.data.title || "Default Title",
      description: args.data.description || "default description",
      image: args.data.image || undefined,
      largeImage: args.data.largeImage || undefined,
      price: args.data.price || 0,
      createAt: new Date()
    });
  }
};

export default Mutations;
