/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SigninMutation
// ====================================================

export interface SigninMutation_signin {
  __typename: "User";
  id: string;
  email: string;
  name: string;
}

export interface SigninMutation {
  signin: SigninMutation_signin;
}

export interface SigninMutationVariables {
  email: string;
  password: string;
}
