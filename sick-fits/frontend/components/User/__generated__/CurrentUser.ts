/* tslint:disable */
// This file was automatically generated and should not be edited.

import { Permission } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: CurrentUser
// ====================================================

export interface CurrentUser_me {
  __typename: "User";
  id: string;
  email: string;
  name: string;
  permissions: Permission[];
}

export interface CurrentUser {
  me: CurrentUser_me | null;
}
