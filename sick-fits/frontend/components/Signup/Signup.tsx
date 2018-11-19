import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Form from '../styles/Form';
import Error from '../ErrorMessage';
import {
  SignupMutation as SignupMutationResponse,
  SignupMutationVariables
} from './__generated__/SignupMutation';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class SignupMutation extends Mutation<
  SignupMutationResponse,
  SignupMutationVariables
> {}

class Signup extends Component {
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
      <SignupMutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(signup, { error, loading }) => {
          return (
            <Form
              method="post"
              onSubmit={async event => {
                event.preventDefault();
                await signup();
                this.setState(this.initialState);
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign Up for an account</h2>
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
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
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
                <button type="submit">Sign up</button>
              </fieldset>
            </Form>
          );
        }}
      </SignupMutation>
    );
  }
}

export default Signup;
