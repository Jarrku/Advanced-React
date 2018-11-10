import { Operation, Item, ItemCreateInput } from '../shared-interfaces';

const createItem: Operation<Item, ItemCreateInput> = (parent, args, ctx, info) => {
 return ctx.client.createItem({
    title: args.title || 'Default Title',
    description: args.description || 'default description',
    image: args.image,
    largeImage: args.largeImage,
    price: args.price || 0,
    createAt: new Date(),
  });
};

const Mutations = {
  createItem
};

export default Mutations;
