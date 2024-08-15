import React, { useState } from "react";
import { Link } from "react-router-dom";
import './header.css'; // Use updated CSS file
import Image from '../assets/onestoplogo-_1_.svg';
import Search from '../Search/Search.js';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate logged-in status
  const [isMiniMenuOpen, setIsMiniMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMiniMenuToggle = () => {
    setIsMiniMenuOpen(!isMiniMenuOpen);
  };

  const handleLogout = () => {
    // Logic for logout (e.g., clearing auth tokens)
    setIsLoggedIn(false);
    setIsMiniMenuOpen(false); // Hide mini menu on logout
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img src={Image} alt="OneLogo" />
        </Link>
        <div className={`nav_menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav_list" id="nav-list">
            <li className="nav_item">
              <Link to="/" className="nav_link">
                <i className="bi bi-house"></i>
                <span>Home</span>
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/contact" className="nav_link">
                <i className="bi bi-person-circle"></i>
                <span>Contact</span>
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/about" className="nav_link">
                <i className="bi bi-card-text"></i>
                <span>About</span>
              </Link>
            </li>
            {!isLoggedIn && (
              <li className="nav_item">
                <Link to="/user/signup" className="nav_link">
                  <i className="bi bi-person-fill-add"></i>
                  <span>Sign Up/Login</span>
                </Link>
              </li>
            )}
          </ul>
          <div className="nav__close" id="nav-close" onClick={handleToggle}>
            <i className="ri-close-large-line"></i>
          </div>
        </div>
        <div className={`Search_area ${isMenuOpen ? 'show-form' : ''}`} id="Search-area">
          <div id="search-form">
            <Search />
          </div>
          {isLoggedIn && (
            <div className="mini_menu">
              <button className="mini_menu_button" onClick={handleMiniMenuToggle}>
                <i className="ri-user-line"></i> 
              </button>
              <div className={`mini_menu_content ${isMiniMenuOpen ? 'show' : ''}`}>
                <Link to="/cart" className="mini_menu_link">
                  <i className="ri-shopping-cart-line"></i> Cart
                </Link>
                <Link to="/wishlist" className="mini_menu_link">
                  <i className="ri-heart-line"></i> Wishlist
                </Link>
                <Link to="/account" className="mini_menu_link">
                  <i className="ri-user-line"></i> Account
                </Link>
                <button className="mini_menu_link" onClick={handleLogout}>
                  <i className="ri-logout-box-line"></i> Log Out
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={`toggle_btn ${isMenuOpen ? 'active' : ''}`} id="toggle-btn" onClick={handleToggle}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
