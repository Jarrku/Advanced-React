/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignupMutation
// ====================================================

export interface SignupMutation_signup {
  __typename: "User";
  id: string;
  email: string;
  name: string;
}

export interface SignupMutation {
  signup: SignupMutation_signup;
}

export interface SignupMutationVariables {
  email: string;
  name: string;
  password: string;
}
