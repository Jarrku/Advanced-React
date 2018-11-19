import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User/User';

const Nav: React.SFC = () => (
  <NavStyles>
    <User>
      {({ data }) => {
        if (!data || !data.me) return null;

        return <p>{data.me.name}</p>;
      }}
    </User>
    <Link href="/items">
      <a>Shop</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/signup">
      <a>Signup!</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/me">
      <a>Account</a>
    </Link>
  </NavStyles>
);

export default Nav;
