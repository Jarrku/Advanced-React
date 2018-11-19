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

/** The `Long` scalar type represents non-fractional signed whole numeric values.Long can represent values between -(2^63) and 2^63 - 1. */
export type Long = any;

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

export interface Mutation {
  createItem: Item;

  updateItem: Item;

  deleteItem?: Item | null;

  signup: User;
}

export interface User extends Node {
  id: string;

  name: string;

  email: string;

  password: string;

  resetToken?: string | null;

  resetTokenExpiry?: number | null;

  permissions: Permission[];
}

export interface ItemPreviousValues {
  id: string;

  title: string;

  description: string;

  image?: string | null;

  largeImage?: string | null;

  price: number;
}
/** An edge in a connection. */
export interface UserEdge {
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: string;
}

export interface AggregateUser {
  count: number;
}

export interface UserPreviousValues {
  id: string;

  name: string;

  email: string;

  password: string;

  resetToken?: string | null;

  resetTokenExpiry?: number | null;

  permissions: Permission[];
}

// ====================================================
// InputTypes
// ====================================================

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

export interface ItemsQueryArgs {
  where?: ItemWhereInput | null;

  orderBy?: ItemOrderByInput | null;

  skip?: number | null;

  first?: number | null;
}
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
export interface SignupMutationArgs {
  email: string;

  password: string;

  name: string;
}

// ====================================================
// Enums
// ====================================================

export enum ItemOrderByInput {
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  title_ASC = "title_ASC",
  title_DESC = "title_DESC",
  description_ASC = "description_ASC",
  description_DESC = "description_DESC",
  image_ASC = "image_ASC",
  image_DESC = "image_DESC",
  largeImage_ASC = "largeImage_ASC",
  largeImage_DESC = "largeImage_DESC",
  price_ASC = "price_ASC",
  price_DESC = "price_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC"
}

export enum Permission {
  ADMIN = "ADMIN",
  USER = "USER",
  ITEMCREATE = "ITEMCREATE",
  ITEMUPDATE = "ITEMUPDATE",
  ITEMDELETE = "ITEMDELETE",
  PERMISSIONUPDATE = "PERMISSIONUPDATE"
}

export enum MutationType {
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  DELETED = "DELETED"
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
  }

  export type ItemsResolver<
    R = Item[],
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context, ItemsArgs>;
  export interface ItemsArgs {
    where?: ItemWhereInput | null;

    orderBy?: ItemOrderByInput | null;

    skip?: number | null;

    first?: number | null;
  }

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

export namespace MutationResolvers {
  export interface Resolvers<Context = any, TypeParent = never> {
    createItem?: CreateItemResolver<Item, TypeParent, Context>;

    updateItem?: UpdateItemResolver<Item, TypeParent, Context>;

    deleteItem?: DeleteItemResolver<Item | null, TypeParent, Context>;

    signup?: SignupResolver<User, TypeParent, Context>;
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

  export type SignupResolver<
    R = User,
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context, SignupArgs>;
  export interface SignupArgs {
    email: string;

    password: string;

    name: string;
  }
}

export namespace UserResolvers {
  export interface Resolvers<Context = any, TypeParent = User> {
    id?: IdResolver<string, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    email?: EmailResolver<string, TypeParent, Context>;

    password?: PasswordResolver<string, TypeParent, Context>;

    resetToken?: ResetTokenResolver<string | null, TypeParent, Context>;

    resetTokenExpiry?: ResetTokenExpiryResolver<
      number | null,
      TypeParent,
      Context
    >;

    permissions?: PermissionsResolver<Permission[], TypeParent, Context>;
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
  export type PasswordResolver<
    R = string,
    Parent = User,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResetTokenResolver<
    R = string | null,
    Parent = User,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResetTokenExpiryResolver<
    R = number | null,
    Parent = User,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PermissionsResolver<
    R = Permission[],
    Parent = User,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace ItemPreviousValuesResolvers {
  export interface Resolvers<Context = any, TypeParent = ItemPreviousValues> {
    id?: IdResolver<string, TypeParent, Context>;

    title?: TitleResolver<string, TypeParent, Context>;

    description?: DescriptionResolver<string, TypeParent, Context>;

    image?: ImageResolver<string | null, TypeParent, Context>;

    largeImage?: LargeImageResolver<string | null, TypeParent, Context>;

    price?: PriceResolver<number, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = ItemPreviousValues,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string,
    Parent = ItemPreviousValues,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string,
    Parent = ItemPreviousValues,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ImageResolver<
    R = string | null,
    Parent = ItemPreviousValues,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LargeImageResolver<
    R = string | null,
    Parent = ItemPreviousValues,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PriceResolver<
    R = number,
    Parent = ItemPreviousValues,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** An edge in a connection. */
export namespace UserEdgeResolvers {
  export interface Resolvers<Context = any, TypeParent = UserEdge> {
    /** The item at the end of the edge. */
    node?: NodeResolver<User, TypeParent, Context>;
    /** A cursor for use in pagination. */
    cursor?: CursorResolver<string, TypeParent, Context>;
  }

  export type NodeResolver<
    R = User,
    Parent = UserEdge,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CursorResolver<
    R = string,
    Parent = UserEdge,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace AggregateUserResolvers {
  export interface Resolvers<Context = any, TypeParent = AggregateUser> {
    count?: CountResolver<number, TypeParent, Context>;
  }

  export type CountResolver<
    R = number,
    Parent = AggregateUser,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace UserPreviousValuesResolvers {
  export interface Resolvers<Context = any, TypeParent = UserPreviousValues> {
    id?: IdResolver<string, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    email?: EmailResolver<string, TypeParent, Context>;

    password?: PasswordResolver<string, TypeParent, Context>;

    resetToken?: ResetTokenResolver<string | null, TypeParent, Context>;

    resetTokenExpiry?: ResetTokenExpiryResolver<
      number | null,
      TypeParent,
      Context
    >;

    permissions?: PermissionsResolver<Permission[], TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = UserPreviousValues,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string,
    Parent = UserPreviousValues,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string,
    Parent = UserPreviousValues,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PasswordResolver<
    R = string,
    Parent = UserPreviousValues,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResetTokenResolver<
    R = string | null,
    Parent = UserPreviousValues,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ResetTokenExpiryResolver<
    R = number | null,
    Parent = UserPreviousValues,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PermissionsResolver<
    R = Permission[],
    Parent = UserPreviousValues,
    Context = any
  > = Resolver<R, Parent, Context>;
}
