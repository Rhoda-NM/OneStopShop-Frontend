import React,{useState} from "react";
import { Link } from "react-router-dom";
import './header.css';
import Image from '../assets/onestoplogo-_1_.svg'
import Search from '../Search/Search.js';

function Header (){
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    
    return(
        <header className="header" id="header">
        <nav className="nav container">
            <Link to="/" className="nav__logo">                    
                <img  src={Image}alt="OneLogo" />
            </Link>
            <div className={`nav_menu ${isMenuOpen ?'show-menu':'' }`} id="nav-menu">
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
                    <li className="nav_item">
                        <Link to="/user/signup" className="nav_link">
                            <i className="bi bi-person-fill-add"></i>
                            <span>Sign Up</span>
                        </Link>
                    </li>
                </ul>
                <div className="nav__close" id="nav-close" onClick={handleToggle}>
                    <i  className="ri-close-large-line"></i>    
                </div>
            </div>
            <div className={`Search_area ${isMenuOpen ?'show-form':'' }`} id="Search-area">
                    <Search />
                <div className="shop_icons">
                    <Link to="/cart_page" className="shop_icons_link"><i className="ri-shopping-cart-line navbar_icons"></i></Link>
                    <Link to="/wishlist" className="shop_icons_link"><i className="ri-heart-line navbar_icons"></i></Link>
                </div>
            </div>

            <div className={`toggle_btn ${isMenuOpen ?'active':'' }`} id="toggle-btn" onClick={handleToggle}>
                <i className="ri-menu-line"></i>
            </div>
        </nav>
    </header>
)
}

export default Header;