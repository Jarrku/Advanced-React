import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import {
  CreateItem as CreateItemResult,
  CreateItemVariables
} from './__generated__/types';

export const CREATE_ITEM_MUTATION = gql`
  mutation CreateItem($data: ItemCreateInput!) {
    createItem(data: $data) {
      id
    }
  }
`;

export class CreateItemMutation extends Mutation<
  CreateItemResult,
  CreateItemVariables
> {}
