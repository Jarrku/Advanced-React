import { Operation, Item } from '../shared-interfaces';

const items: Operation<Item[]> = (parent, args, ctx, info) => {
  return ctx.client.items();
 }

const Query = {
  items,
};

export default Query;
