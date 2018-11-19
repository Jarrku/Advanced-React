import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Form from '../styles/Form';
import Error from '../ErrorMessage';
import {
  SigninMutation as SigninMutationResponse,
  SigninMutationVariables
} from './__generated__/SigninMutation';
import { CURRENT_USER_QUERY } from '../User/User';

const SIGNIN_MUTATION = gql`
  mutation SigninMutation($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class SigninMutation extends Mutation<
  SigninMutationResponse,
  SigninMutationVariables
> {}

class Signin extends Component {
  initialState = {
    name: '',
    password: '',
    email: ''
  };

  state = this.initialState;

  saveToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <SigninMutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { error, loading }) => {
          return (
            <Form
              method="post"
              onSubmit={async event => {
                event.preventDefault();
                await signin();
                this.setState(this.initialState);
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign into your account</h2>
                <Error error={error} />
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Sign in</button>
              </fieldset>
            </Form>
          );
        }}
      </SigninMutation>
    );
  }
}

export default Signin;
