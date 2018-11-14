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
