import * as React from 'react';
import styled from './styled-components';
import Item from './Item';

import { ALL_ITEMS_QUERY, AllItemsQuery } from './AllItems.query';
import Pagination from './Pagination';

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 1fr 1fr;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Items extends React.Component {
  render() {
    return (
      <Center>
        <Pagination />
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
        <Pagination />
      </Center>
    );
  }
}

export default Items;
