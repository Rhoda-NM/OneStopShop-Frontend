import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import { useAuth } from '../../src/AuthProvider';  // Import useAuth hook
import './UserProfile.css'; // Ensure this path is correct

const UserProfile = () => {
    const { user, logout, loading } = useAuth();
    const [userData, setUserData] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (user) {
            console.log('Fetching user data for:', user.id); // Debug: Check user ID
            axios.get(`/user/profile/${user.id}`)
                .then(response => {
                    console.log('Fetched user data:', response.data); // Debug: Check fetched data
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
            console.log('Updated user data:', response.data); // Debug: Check updated data
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
        console.log('Submitting updated data:', updatedData); // Debug: Check submitted data
        updateUser(updatedData);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log('Rendering user data:', userData); // Debug: Check rendered user data

    return (
      <div>
        <Header />
        <div className='user-profile'>
            <div className='user-profile-content'>
                <h1>Account Page</h1>
                {isEditing ? (
                    <form onSubmit={handleSubmit}>
                        <label>
                            Username*
                            <input className="user-profile-input" name="username" defaultValue={userData.username || ''} required />
                        </label>
                        <label>
                            First Name*
                            <input className="user-profile-input" name="first_name" defaultValue={userData.first_name || ''} required />
                        </label>
                        <label>
                            Last Name*
                            <input className="user-profile-input" name="last_name" defaultValue={userData.last_name || ''} required />
                        </label>
                        <label>
                            Email*
                            <input className="user-profile-input" type="email" name="email" defaultValue={userData.email || ''} required />
                        </label>
                        <label>
                            Phone Number*
                            <input className="user-profile-input" type="tel" name="phone_number" defaultValue={userData.phone_number || ''} required />
                        </label>
                        <label>
                            Address Line 1*
                            <input className="user-profile-input" name="address_line_1" defaultValue={userData.address_line_1 || ''} required />
                        </label>
                        <label>
                            Address Line 2
                            <input className="user-profile-input" name="address_line_2" defaultValue={userData.address_line_2 || ''} />
                        </label>
                        <label>
                            City*
                            <input className="user-profile-input" name="city" defaultValue={userData.city || ''} required />
                        </label>
                        <label>
                            State*
                            <input className="user-profile-input" name="state" defaultValue={userData.state || ''} required />
                        </label>
                        <label>
                            Postal Code*
                            <input className="user-profile-input" name="postal_code" defaultValue={userData.postal_code || ''} required />
                        </label>
                        <label>
                            Country*
                            <input className="user-profile-input" name="country" defaultValue={userData.country || ''} required />
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
                        <p>Address Line 1: {userData.address_line_1 || 'N/A'}</p>
                        <p>Address Line 2: {userData.address_line_2 || 'N/A'}</p>
                        <p>City: {userData.city || 'N/A'}</p>
                        <p>State: {userData.state || 'N/A'}</p>
                        <p>Postal Code: {userData.postal_code || 'N/A'}</p>
                        <p>Country: {userData.country || 'N/A'}</p>
                        <button onClick={() => setIsEditing(true)} className="edit-button">Edit Profile</button>
                    </div>
                )}
            </div>
        </div>
        <Footer />
      </div>
    );
};

export default UserProfile;
