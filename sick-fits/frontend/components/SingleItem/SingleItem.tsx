import React, { Component } from 'react';
import {
  SingleItemDetailQuery,
  SINGLE_ITEM_DETAIL_QUERY
} from './SingleItemDetail.query';

interface Props {
  id: string;
}

export default class SingleItem extends Component<Props> {
  render() {
    return (
      <SingleItemDetailQuery
        query={SINGLE_ITEM_DETAIL_QUERY}
        variables={{ id: this.props.id }}
      >
        {({}) => <p>Single Item Component</p>}
      </SingleItemDetailQuery>
    );
  }
}
