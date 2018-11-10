import { Ctx } from './createServer';

export type Operation<Return = undefined, Arguments = {}, Parent = undefined> = (parent: Parent, args: Arguments, ctx: Ctx, info: any) => Return | Promise<Return>;

export interface Item {
  id: string;
  title: string;
  description: string;
  image?: string;
  largeImage?: string;
  price: number;
  createAt: string;
  updatedAt: string;
}

export interface ItemCreateInput {
  title: string;
  description: string;
  image: string;
  largeImage: string;
  price: number;
}