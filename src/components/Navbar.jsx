import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/onlycats_logo.png" alt="OnlyCats Logo" className="logo" />
      <div className="links-container">
        <ul className="navbar-links">
          <li>
            <Link to="/pages/Home">Home</Link>
          </li>
          <li>
            <Link to="/pages/Catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/pages/Guidelines">Guidelines</Link>
          </li>
        </ul>
      </div>
      <Link to="/pages/Checkout" className="checkout-btn">
        Checkout
      </Link>
    </nav>
  );
};

export default Navbar;
