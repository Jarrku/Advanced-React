import Nav from './Nav';

const Header: React.SFC = () => (
  <div>
    <div className="bar">
      <a href="">Sick Fits</a>
    </div>
    <Nav />
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
