import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { DeleteItem, DeleteItemVariables } from './__generated__/DeleteItem';

export const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

export class DeleteItemMutation extends Mutation<
  DeleteItem,
  DeleteItemVariables
> {}
