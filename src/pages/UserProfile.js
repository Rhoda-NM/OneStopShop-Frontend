import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Profile/sidebar';
import './sellerdb.css';
import axios from 'axios';
import { useAuth } from '../../src/AuthProvider'; 


const UserProfile = () => {
    const { user, logout, loading } = useAuth();  // Use the hook to access the context
    const [userData, setUserData] = useState(user || {});

    useEffect(() => {
        if (user) {
            setUserData(user);
        }
    }, [user]);

    const updateUser = (updatedData) => {
        const token = localStorage.getItem('token');
        axios.put(`/user/update_user/${user.id}`, updatedData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            setUserData(response.data.user);
        })
        .catch(error => {
            console.error('Error updating user data', error);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedData = Object.fromEntries(formData.entries());
        updateUser(updatedData);
    };

    if (loading) {
        return <div>Loading...</div>; // Optionally, show a loading indicator
    }

    return (
        <div className='App'>
            <div className='AppGlass'>
                <Sidebar />
                <div>
                    <h1>Account Page</h1>
                    {userData && (
                        <form onSubmit={handleSubmit}>
                            <label>
                                Username*
                                <input name="username" defaultValue={userData.username} required />
                            </label>
                            <label>
                                First Name*
                                <input name="first_name" defaultValue={userData.first_name || ''} required />
                            </label>
                            <label>
                                Last Name*
                                <input name="last_name" defaultValue={userData.last_name || ''} required />
                            </label>
                            <label>
                                Email*
                                <input type="email" name="email" defaultValue={userData.email} required />
                            </label>
                            <label>
                                Phone Number*
                                <input type="tel" name="phone" defaultValue={userData.phone || ''} required />
                            </label>
                            <label>
                                Address*
                                <input name="address" defaultValue={userData.address || ''} required />
                            </label>
                            <label>
                                Country*
                                <input name="country" defaultValue={userData.country || ''} required />
                            </label>
                            <label>
                                City*
                                <input name="city" defaultValue={userData.city || ''} required />
                            </label>
                            <label>
                                Zip Code*
                                <input name="zip_code" defaultValue={userData.zip_code || ''} required />
                            </label>
                            <label>
                                State*
                                <input name="state" defaultValue={userData.state || ''} required />
                            </label>
                            <button type="submit">Update Profile</button>
                        </form>
                    )}
                    <button onClick={logout}>Logout</button>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
