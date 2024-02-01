import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/onlycats_logo.png" alt="OnlyCats Logo" className="logo" />
      <div className="links-container">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/Guidelines">Guidelines</Link>
          </li>
        </ul>
      </div>
      <Link to="/Checkout" className="checkout-btn">
        Checkout
      </Link>
    </nav>
  );
};

export default Navbar;
