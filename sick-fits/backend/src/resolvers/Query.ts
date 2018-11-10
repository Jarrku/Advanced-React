import { QueryResolvers } from './resolvers-types';
import { Ctx } from '../createServer';

const Query: QueryResolvers.Resolvers<Ctx> = {
  items(parent, args, ctx, info) {
    return ctx.client.items();
  }
};

export default Query;
