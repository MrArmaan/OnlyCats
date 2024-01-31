import "../styles/Navbar.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <img src="/onlycats_logo.png" alt="OnlyCats Logo" className="logo" />
      <div className="links-container">
        <ul className="navbar-links">
          <li>
            <a href="/pages/Home">Home</a>
          </li>
          <li>
            <a href="/pages/Catalog">Catalog</a>
          </li>
          <li>
            <a href="/pages/Guidelines">Guidelines</a>
          </li>
        </ul>
      </div>
      <a href="/pages/Checkout" className="checkout-btn">
        Checkout
      </a>
    </nav>
  );
};

export default Nav;
