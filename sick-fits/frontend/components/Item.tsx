import * as React from 'react';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import { ALL_ITEMS_QUERY_items } from './__generated__/types';

interface Props {
  item: ALL_ITEMS_QUERY_items;
}

export default class Item extends React.Component<Props> {
  render() {
    const { item } = this.props;

    return (
      <ItemStyles>
        <Title>{item.title}</Title>
      </ItemStyles>
    );
  }
}
