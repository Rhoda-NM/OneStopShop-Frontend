import React,{useState} from "react";
import './header.css';
import Image from '../assets/onestoplogo-_1_.svg'

function Header (){
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    console.log('toggle')
    setIsMenuOpen(!isMenuOpen);
  };
    
    return(
        <header className="header" id="header">
        <nav className="nav container">
            <a href="#" className="nav__logo">                    
                <img  src={Image}alt="OneLogo" />
            </a>
            <div className={`nav_menu ${isMenuOpen ?'show-menu':'' }`} id="nav-menu">
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
                <div className="nav__close" id="nav-close" onClick={handleToggle}>
                    <i  className="ri-close-large-line"></i>    
                </div>
            </div>
            <div className={`Search_area ${isMenuOpen ?'show-form':'' }`} id="Search-area">
                <form id="search-form" action="post">
                    <input type="text" id="search-input" name="search" placeholder="Search..."/>
                </form>

                <div className="shop_icons">
                    <a className="shop_icons_link"><i className="ri-shopping-cart-line navbar_icons"></i></a>
                    <a className="shop_icons_link"><i className="ri-heart-line navbar_icons"></i></a>
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