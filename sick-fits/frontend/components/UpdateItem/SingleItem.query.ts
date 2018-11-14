import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { SingleItem, SingleItemVariables } from './__generated__/SingleItem';

export const SINGLE_ITEM_QUERY = gql`
  query SingleItem($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      description
    }
  }
`;

export class SingleItemQuery extends Query<SingleItem, SingleItemVariables> {}
