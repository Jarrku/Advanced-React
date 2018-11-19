import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Form from '../styles/Form';
import Error from '../ErrorMessage';
import {
  ResetMutation as ResetMutationResponse,
  ResetMutationVariables
} from './__generated__/ResetMutation';
import { CURRENT_USER_QUERY } from '../User/User';

const RESET_MUTATION = gql`
  mutation ResetMutation(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      name
    }
  }
`;

class ResetMutation extends Mutation<
  ResetMutationResponse,
  ResetMutationVariables
> {}

interface Props {
  resetToken: string;
}

class Reset extends Component<Props> {
  initialState = {
    password: '',
    confirmPassword: ''
  };

  state = this.initialState;

  saveToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <ResetMutation
        mutation={RESET_MUTATION}
        variables={{ resetToken: this.props.resetToken, ...this.state }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(reset, { error, loading, called }) => {
          return (
            <Form
              method="post"
              onSubmit={async event => {
                event.preventDefault();
                await reset();
                this.setState(this.initialState);
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Reset your Password</h2>
                <Error error={error} />
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
                <label htmlFor="confirmPassword">
                  Confirm Password
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={this.state.confirmPassword}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Reset Your Password</button>
              </fieldset>
            </Form>
          );
        }}
      </ResetMutation>
    );
  }
}

export default Reset;
