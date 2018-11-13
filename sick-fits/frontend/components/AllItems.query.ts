import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { AllItems } from './__generated__/types';

export const ALL_ITEMS_QUERY = gql`
  query AllItems {
    items {
      id
      title
      price
      description
      image
    }
  }
`;

export class AllItemsQuery extends Query<AllItems> {}
