import { Query, QueryResult } from 'react-apollo';
import * as React from 'react';
import gql from 'graphql-tag';
import { CurrentUser } from './__generated__/CurrentUser';

export const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    me {
      id
      email
      name
      permissions
    }
  }
`;

class CurrentUserQuery extends Query<CurrentUser> {}

interface Props {
  children: (props: QueryResult<CurrentUser>) => React.ReactNode;
}
const User: React.SFC<Props> = props => (
  <CurrentUserQuery {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </CurrentUserQuery>
);

export default User;
