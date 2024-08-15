import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import { useAuth } from '../../src/AuthProvider';  // Import useAuth hook
import Sidebar from './SideBar'; // Import Sidebar (Ensure correct path)
import './AccountManagement.css'; // Ensure this path is correct

const AccountManagement = () => {
    const { user, loading } = useAuth();
    const [userData, setUserData] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (user) {
            axios.get(`/user/profile/${user.id}`)
                .then(response => {
                    setUserData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user profile data', error);
                });
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
            setUserData(response.data);
            setIsEditing(false); // Exit edit mode
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
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <Sidebar />
            <div className='main-content'>
                <div className='account-management'>
                    <div className='account-management-content'>
                        <h1>Account Management</h1>
                        {isEditing ? (
                            <form onSubmit={handleSubmit} className="account-management-form">
                                <label>
                                    Username*
                                    <input className="account-management-input" name="username" defaultValue={userData.username || ''} required />
                                </label>
                                <label>
                                    First Name*
                                    <input className="account-management-input" name="first_name" defaultValue={userData.first_name || ''} required />
                                </label>
                                <label>
                                    Last Name*
                                    <input className="account-management-input" name="last_name" defaultValue={userData.last_name || ''} required />
                                </label>
                                <label>
                                    Email*
                                    <input className="account-management-input" type="email" name="email" defaultValue={userData.email || ''} required />
                                </label>
                                <label>
                                    Phone Number*
                                    <input className="account-management-input" type="tel" name="phone_number" defaultValue={userData.phone_number || ''} required />
                                </label>
                                <button type="submit" className="update-button">Update Profile</button>
                            </form>
                        ) : (
                            <div>
                                <p>Username: {userData.username || 'N/A'}</p>
                                <p>First Name: {userData.first_name || 'N/A'}</p>
                                <p>Last Name: {userData.last_name || 'N/A'}</p>
                                <p>Email: {userData.email || 'N/A'}</p>
                                <p>Phone Number: {userData.phone_number || 'N/A'}</p>
                                <button onClick={() => setIsEditing(true)} className="edit-button">Edit Profile</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AccountManagement;
