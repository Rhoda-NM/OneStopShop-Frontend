import React from 'react';
import './src/components/navbar.css'; 

const Navbar = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <img src="./src/components/footer-logo.png" alt="logo" />
        
        <div className="nav_menu" id="nav-menu">
          <ul className="nav_list" id="nav-list">
            <li className="nav_item">
              <a href="#" className="nav_link">
                <i className="bi bi-house"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                <i className="bi bi-person-circle"></i>
                <span>Contact</span>
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                <i className="bi bi-card-text"></i>
                <span>About</span>
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                <i className="bi bi-person-fill-add"></i>
                <span>Sign Up</span>
              </a>
            </li>
          </ul>
          
          <div className="nav__close" id="nav-close">
            <i className="ri-close-large-line"></i>
          </div>
        </div>
        
        <div className="Search_area" id="Search-area">
          <form id="search-form" action="post">
            <input type="text" id="search-input" name="search" placeholder="Search..." />
          </form>

          <div className="shop_icons">
            <a className="shop_icons_link" href="#"><i className="ri-shopping-cart-line navbar_icons"></i></a>
            <a className="shop_icons_link" href="#"><i className="ri-heart-line navbar_icons"></i></a>
          </div>
        </div>
        
        <div className="toggle_btn" id="toggle-btn">
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
