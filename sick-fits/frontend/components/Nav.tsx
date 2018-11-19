import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User/User';
import Signout from './Signout/Signout';

const Nav: React.SFC = () => (
  <User>
    {({ data }) => (
      <NavStyles>
        <Link href="/items">
          <a>Shop</a>
        </Link>
        {data && data.me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/me">
              <a>Account</a>
            </Link>
            <Signout />
          </>
        )}
        {(!data || !data.me) && (
          <Link href="/signup">
            <a>Sign In!</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
