/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RequestResetMutation
// ====================================================

export interface RequestResetMutation_requestReset {
  __typename: "SuccessMessage";
  message: string | null;
}

export interface RequestResetMutation {
  requestReset: RequestResetMutation_requestReset | null;
}

export interface RequestResetMutationVariables {
  email: string;
}
