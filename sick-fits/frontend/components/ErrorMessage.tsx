import styled from './styled-components';
import * as React from 'react';
import { ApolloError } from 'apollo-boost';

const ErrorStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;\
  }
`;

interface IProps {
  error?: ApolloError;
}

const DisplayError = ({ error }: IProps) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    // @ts-ignore
    error.networkError.result &&
    // @ts-ignore
    error.networkError.result.errors.length
  ) {
    // @ts-ignore
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {error.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  );
};

export default DisplayError;
