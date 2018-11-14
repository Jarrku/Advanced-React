import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { AllItems, AllItemsVariables } from './__generated__/AllItems';
import { perPage } from '../config';

// Note: Apollo cant generate interpolated code: replace with regular value to run generate command when this query changes
export const ALL_ITEMS_QUERY = gql`
  query AllItems($skip: Int = 0, $first: Int = ${perPage}) {
    items(skip: $skip, first: $first, orderBy: createdAt_DESC) {
      id
      title
      price
      description
      image
    }
  }
`;

export class AllItemsQuery extends Query<AllItems, AllItemsVariables> {}
