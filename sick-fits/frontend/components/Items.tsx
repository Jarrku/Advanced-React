import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from './styled-components';
import { AllItems } from './__generated__/types';
import Item from './Item';

const ALL_ITEMS_QUERY = gql`
  query AllItems {
    items {
      id
      title
      price
      description
      image
    }
  }
`;

class AllItemsQuery extends Query<AllItems> {}

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
        <AllItemsQuery query={ALL_ITEMS_QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;

            return (
              data && (
                <ItemsList>
                  {data.items.map(item => (
                    <Item item={item} key={item.id} />
                  ))}
                </ItemsList>
              )
            );
          }}
        </AllItemsQuery>
      </Center>
    );
  }
}

export default Items;
