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

  itemsConnection: ItemConnection;

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
/** A connection to a list of items. */
export interface ItemConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (ItemEdge | null)[];

  aggregate: AggregateItem;
}
/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating forwards, are there more items? */
  hasNextPage: boolean;
  /** When paginating backwards, are there more items? */
  hasPreviousPage: boolean;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: string | null;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: string | null;
}
/** An edge in a connection. */
export interface ItemEdge {
  /** The item at the end of the edge. */
  node: Item;
  /** A cursor for use in pagination. */
  cursor: string;
}

export interface AggregateItem {
  count: number;
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

export interface ItemWhereInput {
  /** Logical AND on all given filters. */
  AND?: ItemWhereInput[] | null;
  /** Logical OR on all given filters. */
  OR?: ItemWhereInput[] | null;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: ItemWhereInput[] | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  title?: string | null;
  /** All values that are not equal to given value. */
  title_not?: string | null;
  /** All values that are contained in given list. */
  title_in?: string[] | null;
  /** All values that are not contained in given list. */
  title_not_in?: string[] | null;
  /** All values less than the given value. */
  title_lt?: string | null;
  /** All values less than or equal the given value. */
  title_lte?: string | null;
  /** All values greater than the given value. */
  title_gt?: string | null;
  /** All values greater than or equal the given value. */
  title_gte?: string | null;
  /** All values containing the given string. */
  title_contains?: string | null;
  /** All values not containing the given string. */
  title_not_contains?: string | null;
  /** All values starting with the given string. */
  title_starts_with?: string | null;
  /** All values not starting with the given string. */
  title_not_starts_with?: string | null;
  /** All values ending with the given string. */
  title_ends_with?: string | null;
  /** All values not ending with the given string. */
  title_not_ends_with?: string | null;

  description?: string | null;
  /** All values that are not equal to given value. */
  description_not?: string | null;
  /** All values that are contained in given list. */
  description_in?: string[] | null;
  /** All values that are not contained in given list. */
  description_not_in?: string[] | null;
  /** All values less than the given value. */
  description_lt?: string | null;
  /** All values less than or equal the given value. */
  description_lte?: string | null;
  /** All values greater than the given value. */
  description_gt?: string | null;
  /** All values greater than or equal the given value. */
  description_gte?: string | null;
  /** All values containing the given string. */
  description_contains?: string | null;
  /** All values not containing the given string. */
  description_not_contains?: string | null;
  /** All values starting with the given string. */
  description_starts_with?: string | null;
  /** All values not starting with the given string. */
  description_not_starts_with?: string | null;
  /** All values ending with the given string. */
  description_ends_with?: string | null;
  /** All values not ending with the given string. */
  description_not_ends_with?: string | null;

  image?: string | null;
  /** All values that are not equal to given value. */
  image_not?: string | null;
  /** All values that are contained in given list. */
  image_in?: string[] | null;
  /** All values that are not contained in given list. */
  image_not_in?: string[] | null;
  /** All values less than the given value. */
  image_lt?: string | null;
  /** All values less than or equal the given value. */
  image_lte?: string | null;
  /** All values greater than the given value. */
  image_gt?: string | null;
  /** All values greater than or equal the given value. */
  image_gte?: string | null;
  /** All values containing the given string. */
  image_contains?: string | null;
  /** All values not containing the given string. */
  image_not_contains?: string | null;
  /** All values starting with the given string. */
  image_starts_with?: string | null;
  /** All values not starting with the given string. */
  image_not_starts_with?: string | null;
  /** All values ending with the given string. */
  image_ends_with?: string | null;
  /** All values not ending with the given string. */
  image_not_ends_with?: string | null;

  largeImage?: string | null;
  /** All values that are not equal to given value. */
  largeImage_not?: string | null;
  /** All values that are contained in given list. */
  largeImage_in?: string[] | null;
  /** All values that are not contained in given list. */
  largeImage_not_in?: string[] | null;
  /** All values less than the given value. */
  largeImage_lt?: string | null;
  /** All values less than or equal the given value. */
  largeImage_lte?: string | null;
  /** All values greater than the given value. */
  largeImage_gt?: string | null;
  /** All values greater than or equal the given value. */
  largeImage_gte?: string | null;
  /** All values containing the given string. */
  largeImage_contains?: string | null;
  /** All values not containing the given string. */
  largeImage_not_contains?: string | null;
  /** All values starting with the given string. */
  largeImage_starts_with?: string | null;
  /** All values not starting with the given string. */
  largeImage_not_starts_with?: string | null;
  /** All values ending with the given string. */
  largeImage_ends_with?: string | null;
  /** All values not ending with the given string. */
  largeImage_not_ends_with?: string | null;

  price?: number | null;
  /** All values that are not equal to given value. */
  price_not?: number | null;
  /** All values that are contained in given list. */
  price_in?: number[] | null;
  /** All values that are not contained in given list. */
  price_not_in?: number[] | null;
  /** All values less than the given value. */
  price_lt?: number | null;
  /** All values less than or equal the given value. */
  price_lte?: number | null;
  /** All values greater than the given value. */
  price_gt?: number | null;
  /** All values greater than or equal the given value. */
  price_gte?: number | null;
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
export interface ItemsConnectionQueryArgs {
  where?: ItemWhereInput | null;
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

    itemsConnection?: ItemsConnectionResolver<
      ItemConnection,
      TypeParent,
      Context
    >;

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

  export type ItemsConnectionResolver<
    R = ItemConnection,
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context, ItemsConnectionArgs>;
  export interface ItemsConnectionArgs {
    where?: ItemWhereInput | null;
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
/** A connection to a list of items. */
export namespace ItemConnectionResolvers {
  export interface Resolvers<Context = any, TypeParent = ItemConnection> {
    /** Information to aid in pagination. */
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>;
    /** A list of edges. */
    edges?: EdgesResolver<(ItemEdge | null)[], TypeParent, Context>;

    aggregate?: AggregateResolver<AggregateItem, TypeParent, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = ItemConnection,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (ItemEdge | null)[],
    Parent = ItemConnection,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AggregateResolver<
    R = AggregateItem,
    Parent = ItemConnection,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Information about pagination in a connection. */
export namespace PageInfoResolvers {
  export interface Resolvers<Context = any, TypeParent = PageInfo> {
    /** When paginating forwards, are there more items? */
    hasNextPage?: HasNextPageResolver<boolean, TypeParent, Context>;
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: HasPreviousPageResolver<boolean, TypeParent, Context>;
    /** When paginating backwards, the cursor to continue. */
    startCursor?: StartCursorResolver<string | null, TypeParent, Context>;
    /** When paginating forwards, the cursor to continue. */
    endCursor?: EndCursorResolver<string | null, TypeParent, Context>;
  }

  export type HasNextPageResolver<
    R = boolean,
    Parent = PageInfo,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasPreviousPageResolver<
    R = boolean,
    Parent = PageInfo,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StartCursorResolver<
    R = string | null,
    Parent = PageInfo,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EndCursorResolver<
    R = string | null,
    Parent = PageInfo,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace ItemEdgeResolvers {
  export interface Resolvers<Context = any, TypeParent = ItemEdge> {
    /** The item at the end of the edge. */
    node?: NodeResolver<Item, TypeParent, Context>;
    /** A cursor for use in pagination. */
    cursor?: CursorResolver<string, TypeParent, Context>;
  }

  export type NodeResolver<
    R = Item,
    Parent = ItemEdge,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CursorResolver<
    R = string,
    Parent = ItemEdge,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace AggregateItemResolvers {
  export interface Resolvers<Context = any, TypeParent = AggregateItem> {
    count?: CountResolver<number, TypeParent, Context>;
  }

  export type CountResolver<
    R = number,
    Parent = AggregateItem,
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
