import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Profile/sidebar'
import './sellerdb.css'

const UserProfile = () => {
  return (
    <div className='App'>
        <div className='AppGlass'>
            <Sidebar />
            <main >
              <Outlet />
            </main>
        </div>
    </div>
  )
}

export default UserProfile