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

//==============================================================
// END Enums and Input Objects
//==============================================================
