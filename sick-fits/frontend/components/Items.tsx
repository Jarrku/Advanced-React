import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from './styled-components';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-colums: 1fr 1fr;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Items extends React.Component {
  render() {
    return (
      <Center>
        <p>Items!</p>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <ItemsList>
                {data.items.map(item => (
                  <p>{item.title}</p>
                ))}
              </ItemsList>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default Items;
