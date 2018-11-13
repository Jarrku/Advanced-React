import { MutationResolvers } from "./resolvers-types";
import { Ctx } from "../createServer";

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
  }
};

export default Mutations;
