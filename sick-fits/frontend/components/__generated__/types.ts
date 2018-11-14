/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllItems
// ====================================================

export interface AllItems_items {
  __typename: "Item";
  id: string;
  title: string;
  price: number;
  description: string;
  image: string | null;
}

export interface AllItems {
  items: AllItems_items[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateItem
// ====================================================

export interface CreateItem_createItem {
  __typename: "Item";
  id: string;
}

export interface CreateItem {
  createItem: CreateItem_createItem;
}

export interface CreateItemVariables {
  data: ItemCreateInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteItem
// ====================================================

export interface DeleteItem_deleteItem {
  __typename: "Item";
  id: string;
  title: string;
}

export interface DeleteItem {
  deleteItem: DeleteItem_deleteItem | null;
}

export interface DeleteItemVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SingleItem
// ====================================================

export interface SingleItem_item {
  __typename: "Item";
  id: string;
  title: string;
  price: number;
  description: string;
}

export interface SingleItem {
  item: SingleItem_item | null;
}

export interface SingleItemVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateItem
// ====================================================

export interface UpdateItem_updateItem {
  __typename: "Item";
  id: string;
  title: string;
  description: string;
  price: number;
}

export interface UpdateItem {
  updateItem: UpdateItem_updateItem;
}

export interface UpdateItemVariables {
  data: ItemUpdatesInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

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

//==============================================================
// END Enums and Input Objects
//==============================================================
