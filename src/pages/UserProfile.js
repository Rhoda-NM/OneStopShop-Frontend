import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Profile/sidebar'
import './sellerdb.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const UserProfile = () => {
  return (
    <>
    <Header />
    <div className='App'>
        <div className='AppGlass'>
            <Sidebar />
            <main >
              <Outlet />
            </main>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default UserProfile