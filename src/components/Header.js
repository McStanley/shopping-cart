import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <div className="Header-title">
        <NavLink to="/">Jewelry Heaven</NavLink>
      </div>
      <nav className="Header-nav">
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}

export default Header;
