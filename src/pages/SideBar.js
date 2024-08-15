import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h2>Manage My Account</h2>
            <ul>
                <li><Link to='/account-management'>Account Management</Link></li>
                <li><Link to='/dashboard'>Billing Details</Link></li>
                <li><Link to='/cart'>Shopping Cart</Link></li>
                <li><Link to='/wishlist'>My Wishlist</Link></li>

                {/* <li><Link to='/product-discovery'>Product Discovery</Link></li> */}
                {/* <li><Link to='/order-management'>Order Management</Link></li> */}
            </ul>
        </div>
    );
};

export default Sidebar;
