import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/sidebar'
import './sellerdb.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


function SellerDb() {
    
  return (
    <>
    <Header />
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <main>
           <Outlet />
        </main>
        
      </div>
    </div>
    <Footer />
    </>
  );
}


export default SellerDb