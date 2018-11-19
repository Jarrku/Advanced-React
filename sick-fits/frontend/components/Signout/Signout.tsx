import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { SignOutMutation as SignoutMutationResponse } from './__generated__/SignoutMutation';
import { CURRENT_USER_QUERY } from '../User/User';

const SIGNOUT_MUTATION = gql`
  mutation SignOutMutation {
    signout {
      message
    }
  }
`;

class SignOutMutation extends Mutation<SignoutMutationResponse> {}

export default class Signout extends Component {
  render() {
    return (
      <SignOutMutation
        mutation={SIGNOUT_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {signout => <button onClick={() => signout()}>Sign out</button>}
      </SignOutMutation>
    );
  }
}
