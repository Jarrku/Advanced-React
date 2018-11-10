/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = any, Context = any, Args = never> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = never
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

// ====================================================
// START: Typescript template
// ====================================================

// ====================================================
// Scalars
// ====================================================

/** DateTime stamp */
export type DateTime = any;

export type Nil = any;

// ====================================================
// Interfaces
// ====================================================

/** An object with an ID */
export interface Node {
  /** The id of the object. */
  id: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  items: Item[];
}

export interface Item extends Node {
  id: string;

  title: string;

  description: string;

  image?: string | null;

  largeImage?: string | null;

  price: number;

  createAt: DateTime;

  updatedAt: DateTime;
}

export interface Mutation {
  createItem: Item;
}

export interface User extends Node {
  id: string;

  name: string;

  email: string;
}

// ====================================================
// InputTypes
// ====================================================

export interface ItemCreateInput {
  title: string;

  description: string;

  image?: string | null;

  largeImage?: string | null;

  price: number;

  createAt: DateTime;
}

// ====================================================
// Arguments
// ====================================================

export interface CreateItemMutationArgs {
  data: ItemCreateInput;
}

// ====================================================
// END: Typescript template
// ====================================================

// ====================================================
// Resolvers
// ====================================================

export namespace QueryResolvers {
  export interface Resolvers<Context = any, TypeParent = never> {
    items?: ItemsResolver<Item[], TypeParent, Context>;
  }

  export type ItemsResolver<
    R = Item[],
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace ItemResolvers {
  export interface Resolvers<Context = any, TypeParent = Item> {
    id?: IdResolver<string, TypeParent, Context>;

    title?: TitleResolver<string, TypeParent, Context>;

    description?: DescriptionResolver<string, TypeParent, Context>;

    image?: ImageResolver<string | null, TypeParent, Context>;

    largeImage?: LargeImageResolver<string | null, TypeParent, Context>;

    price?: PriceResolver<number, TypeParent, Context>;

    createAt?: CreateAtResolver<DateTime, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Item, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TitleResolver<
    R = string,
    Parent = Item,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string,
    Parent = Item,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ImageResolver<
    R = string | null,
    Parent = Item,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LargeImageResolver<
    R = string | null,
    Parent = Item,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PriceResolver<
    R = number,
    Parent = Item,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreateAtResolver<
    R = DateTime,
    Parent = Item,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = Item,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any, TypeParent = never> {
    createItem?: CreateItemResolver<Item, TypeParent, Context>;
  }

  export type CreateItemResolver<
    R = Item,
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context, CreateItemArgs>;
  export interface CreateItemArgs {
    data: ItemCreateInput;
  }
}

export namespace UserResolvers {
  export interface Resolvers<Context = any, TypeParent = User> {
    id?: IdResolver<string, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    email?: EmailResolver<string, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = User, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<R = string, Parent = User, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type EmailResolver<
    R = string,
    Parent = User,
    Context = any
  > = Resolver<R, Parent, Context>;
}
