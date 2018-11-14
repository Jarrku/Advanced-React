/* tslint:disable */
// This file was automatically generated and should not be edited.

import { ItemCreateInput } from "./../../__generated__/globalTypes";

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
