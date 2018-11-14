import React, { Component } from 'react';

import {
  DeleteItemMutation,
  DELETE_ITEM_MUTATION
} from './DeleteItem.mutation';

import {
  DeleteItem as DeleteItemResult,
  AllItems
} from './__generated__/types';
import { MutationUpdaterFn } from 'apollo-boost';
import { ALL_ITEMS_QUERY } from './AllItems.query';

interface Props {
  id: string;
}

export default class DeleteItem extends Component<Props> {
  update: MutationUpdaterFn<DeleteItemResult> = (cache, payload) => {
    // manually update client so its matches the server
    // Read cache for the item you want.
    const data = cache.readQuery<AllItems>({ query: ALL_ITEMS_QUERY });

    if (data) {
      data.items = data.items.filter(
        item => item.id !== payload.data!.deleteItem.id
      );
    }

    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
  };

  render() {
    return (
      <DeleteItemMutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteItem, { error, loading }) => {
          if (error) return <p />;
          return (
            <button
              onClick={() => {
                if (confirm('Are you sure you want to delete this item?')) {
                  deleteItem();
                }
              }}
            >
              {this.props.children}
            </button>
          );
        }}
      </DeleteItemMutation>
    );
  }
}
