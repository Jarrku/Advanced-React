/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ResetMutation
// ====================================================

export interface ResetMutation_resetPassword {
  __typename: "User";
  id: string;
  email: string;
  name: string;
}

export interface ResetMutation {
  resetPassword: ResetMutation_resetPassword;
}

export interface ResetMutationVariables {
  resetToken: string;
  password: string;
  confirmPassword: string;
}
