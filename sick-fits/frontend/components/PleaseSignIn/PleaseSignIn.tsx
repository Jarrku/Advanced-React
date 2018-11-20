import { CURRENT_USER_QUERY, CurrentUserQuery } from '../User/User';
import Signin from '../Signin/Signin';

const PleaseSignIn: React.FC = props => (
  <CurrentUserQuery query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;

      if (!data || !data.me) {
        return (
          <div>
            <p>Please Sign In before Continuing</p>
            <Signin />
          </div>
        );
      }

      return props.children;
    }}
  </CurrentUserQuery>
);

export default PleaseSignIn;
