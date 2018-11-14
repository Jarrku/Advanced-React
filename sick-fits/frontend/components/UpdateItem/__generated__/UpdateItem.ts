/* tslint:disable */
// This file was automatically generated and should not be edited.

import { ItemUpdatesInput } from "./../../__generated__/globalTypes";

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
