import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import {
  SingleItemDetail,
  SingleItemDetailVariables
} from './__generated__/SingleItemDetail';

export const SINGLE_ITEM_DETAIL_QUERY = gql`
  query SingleItemDetail($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      description
    }
  }
`;

export class SingleItemDetailQuery extends Query<
  SingleItemDetail,
  SingleItemDetailVariables
> {}
