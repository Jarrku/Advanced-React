import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { UpdateItem, UpdateItemVariables } from './__generated__/types';

export const UPDATE_ITEM_MUTATION = gql`
  mutation UpdateItem($data: ItemUpdatesInput!) {
    updateItem(data: $data) {
      id
      title
      description
      price
    }
  }
`;

export class UpdateItemMutation extends Mutation<
  UpdateItem,
  UpdateItemVariables
> {}
