import * as React from 'react';
import Link from 'next/link';

import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import { AllItems_items } from './__generated__/types';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

interface Props {
  item: AllItems_items;
}

export default class Item extends React.Component<Props> {
  render() {
    const { item } = this.props;

    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link href={{ pathname: '/item', query: { id: item.id } }}>
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <div className="buttonList">
          <Link href={{ pathname: 'update', query: { id: item.id } }}>
            <a>Edit</a>
          </Link>
          <button>Add to Cart</button>
          <button>Delete</button>
        </div>
      </ItemStyles>
    );
  }
}
