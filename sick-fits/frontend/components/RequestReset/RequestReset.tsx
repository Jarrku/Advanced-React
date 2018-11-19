import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Form from '../styles/Form';
import Error from '../ErrorMessage';
import {
  RequestResetMutation as RequestResetMutationResponse,
  RequestResetMutationVariables
} from './__generated__/RequestResetMutation';

const REQUEST_RESET_MUTATION = gql`
  mutation RequestResetMutation($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

class RequestResetMutation extends Mutation<
  RequestResetMutationResponse,
  RequestResetMutationVariables
> {}

class RequestReset extends Component {
  initialState = {
    email: ''
  };

  state = this.initialState;

  saveToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <RequestResetMutation
        mutation={REQUEST_RESET_MUTATION}
        variables={this.state}
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
                <h2>Request a Password Reset</h2>
                <Error error={error} />
                {!error && !loading && called && (
                  <p>Success! Check your email for a reset link</p>
                )}
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
                <button type="submit">Request Reset</button>
              </fieldset>
            </Form>
          );
        }}
      </RequestResetMutation>
    );
  }
}

export default RequestReset;
