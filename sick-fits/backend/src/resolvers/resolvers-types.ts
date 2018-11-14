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

  item?: Item | null;

  group: MoovlyUser[];

  seats: Seat[];
}

export interface Item extends Node {
  id: string;

  title: string;

  description: string;

  image?: string | null;

  largeImage?: string | null;

  price: number;
}

export interface MoovlyUser {
  id?: string | null;

  user_id?: string | null;

  group_id?: string | null;

  info?: Info | null;

  created_at?: string | null;

  created_by?: string | null;

  seatInfo?: Seat | null;
}

export interface Info {
  email?: string | null;

  pending_email?: string | null;

  first_name?: string | null;

  name?: string | null;
}

export interface Seat {
  id?: string | null;

  user_id?: string | null;

  group_id?: string | null;

  license_plan_code?: string | null;

  assigned_by?: string | null;

  created_at?: string | null;
}

export interface Mutation {
  createItem: Item;

  updateItem: Item;

  deleteItem?: Item | null;
}

export interface User extends Node {
  id: string;

  name: string;

  email: string;
}

// ====================================================
// InputTypes
// ====================================================

export interface ItemWhereUniqueInput {
  id?: string | null;
}

export interface ItemCreateInput {
  title: string;

  description: string;

  image?: string | null;

  largeImage?: string | null;

  price: number;
}

export interface ItemUpdatesInput {
  id: string;

  title?: string | null;

  description?: string | null;

  price?: number | null;
}

// ====================================================
// Arguments
// ====================================================

export interface ItemQueryArgs {
  where: ItemWhereUniqueInput;
}
export interface CreateItemMutationArgs {
  data: ItemCreateInput;
}
export interface UpdateItemMutationArgs {
  data: ItemUpdatesInput;
}
export interface DeleteItemMutationArgs {
  id: string;
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

    item?: ItemResolver<Item | null, TypeParent, Context>;

    group?: GroupResolver<MoovlyUser[], TypeParent, Context>;

    seats?: SeatsResolver<Seat[], TypeParent, Context>;
  }

  export type ItemsResolver<
    R = Item[],
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ItemResolver<
    R = Item | null,
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context, ItemArgs>;
  export interface ItemArgs {
    where: ItemWhereUniqueInput;
  }

  export type GroupResolver<
    R = MoovlyUser[],
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SeatsResolver<
    R = Seat[],
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
}

export namespace MoovlyUserResolvers {
  export interface Resolvers<Context = any, TypeParent = MoovlyUser> {
    id?: IdResolver<string | null, TypeParent, Context>;

    user_id?: UserIdResolver<string | null, TypeParent, Context>;

    group_id?: GroupIdResolver<string | null, TypeParent, Context>;

    info?: InfoResolver<Info | null, TypeParent, Context>;

    created_at?: CreatedAtResolver<string | null, TypeParent, Context>;

    created_by?: CreatedByResolver<string | null, TypeParent, Context>;

    seatInfo?: SeatInfoResolver<Seat | null, TypeParent, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = MoovlyUser,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UserIdResolver<
    R = string | null,
    Parent = MoovlyUser,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type GroupIdResolver<
    R = string | null,
    Parent = MoovlyUser,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type InfoResolver<
    R = Info | null,
    Parent = MoovlyUser,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = string | null,
    Parent = MoovlyUser,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedByResolver<
    R = string | null,
    Parent = MoovlyUser,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SeatInfoResolver<
    R = Seat | null,
    Parent = MoovlyUser,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace InfoResolvers {
  export interface Resolvers<Context = any, TypeParent = Info> {
    email?: EmailResolver<string | null, TypeParent, Context>;

    pending_email?: PendingEmailResolver<string | null, TypeParent, Context>;

    first_name?: FirstNameResolver<string | null, TypeParent, Context>;

    name?: NameResolver<string | null, TypeParent, Context>;
  }

  export type EmailResolver<
    R = string | null,
    Parent = Info,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PendingEmailResolver<
    R = string | null,
    Parent = Info,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FirstNameResolver<
    R = string | null,
    Parent = Info,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = Info,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace SeatResolvers {
  export interface Resolvers<Context = any, TypeParent = Seat> {
    id?: IdResolver<string | null, TypeParent, Context>;

    user_id?: UserIdResolver<string | null, TypeParent, Context>;

    group_id?: GroupIdResolver<string | null, TypeParent, Context>;

    license_plan_code?: LicensePlanCodeResolver<
      string | null,
      TypeParent,
      Context
    >;

    assigned_by?: AssignedByResolver<string | null, TypeParent, Context>;

    created_at?: CreatedAtResolver<string | null, TypeParent, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = Seat,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UserIdResolver<
    R = string | null,
    Parent = Seat,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type GroupIdResolver<
    R = string | null,
    Parent = Seat,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LicensePlanCodeResolver<
    R = string | null,
    Parent = Seat,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AssignedByResolver<
    R = string | null,
    Parent = Seat,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = string | null,
    Parent = Seat,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any, TypeParent = never> {
    createItem?: CreateItemResolver<Item, TypeParent, Context>;

    updateItem?: UpdateItemResolver<Item, TypeParent, Context>;

    deleteItem?: DeleteItemResolver<Item | null, TypeParent, Context>;
  }

  export type CreateItemResolver<
    R = Item,
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context, CreateItemArgs>;
  export interface CreateItemArgs {
    data: ItemCreateInput;
  }

  export type UpdateItemResolver<
    R = Item,
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context, UpdateItemArgs>;
  export interface UpdateItemArgs {
    data: ItemUpdatesInput;
  }

  export type DeleteItemResolver<
    R = Item | null,
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context, DeleteItemArgs>;
  export interface DeleteItemArgs {
    id: string;
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
