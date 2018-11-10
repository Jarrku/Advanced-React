import db from '../db';

type Ctx = typeof db;

type QueryType<Return = undefined, Arguments = {}, Parent = undefined> = (parent: Parent, args: Arguments, ctx: Ctx, info: any) => Return;

interface Dog {
  name: string;
}

const dogs: QueryType<Dog[]> = (parent, args, ctx, info) => {
  return [{ name: 'Snickers' }, { name: 'Sunny' }];
 }

const Query = {
  dogs,
};

export default Query;
