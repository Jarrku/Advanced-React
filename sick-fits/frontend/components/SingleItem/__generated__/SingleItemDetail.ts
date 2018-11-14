/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SingleItemDetail
// ====================================================

export interface SingleItemDetail_item {
  __typename: "Item";
  id: string;
  title: string;
  price: number;
  description: string;
  largeImage: string | null;
}

export interface SingleItemDetail {
  item: SingleItemDetail_item | null;
}

export interface SingleItemDetailVariables {
  id: string;
}
