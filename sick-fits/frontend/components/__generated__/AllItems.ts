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

export interface AllItemsVariables {
  skip?: number | null;
  first?: number | null;
}
