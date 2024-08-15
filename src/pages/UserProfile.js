import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import { useAuth } from '../../src/AuthProvider';  // Import useAuth hook
import Sidebar from './SideBar'; // Import Sidebar (Ensure correct path)
import './UserProfile.css'; // Ensure this path is correct

const UserProfile = () => {
    const { user, loading } = useAuth();
    const [billingData, setBillingData] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (user) {
            axios.get(`/api/billing_detail/${user.id}`)
                .then(response => {
                    setBillingData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching billing data', error);
                });
        }
    }, [user]);

    const updateBilling = (updatedData) => {
        const token = localStorage.getItem('token');
        axios.put(`/api/billing/${user.id}`, updatedData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            setBillingData(response.data);
            setIsEditing(false); // Exit edit mode
        })
        .catch(error => {
            console.error('Error updating billing data', error);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedData = Object.fromEntries(formData.entries());
        updateBilling(updatedData);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <Sidebar />
            <div className='main-content'>
                <div className='user-profile'>
                    <div className='user-profile-content'>
                        <h1>Billing Details</h1>
                        {isEditing ? (
                            <form onSubmit={handleSubmit} className="user-profile-form">
                                <label>
                                    Address Line 1*
                                    <input className="user-profile-input" name="address_line_1" defaultValue={billingData.address_line_1 || ''} required />
                                </label>
                                <label>
                                    Address Line 2
                                    <input className="user-profile-input" name="address_line_2" defaultValue={billingData.address_line_2 || ''} />
                                </label>
                                <label>
                                    City*
                                    <input className="user-profile-input" name="city" defaultValue={billingData.city || ''} required />
                                </label>
                                <label>
                                    State*
                                    <input className="user-profile-input" name="state" defaultValue={billingData.state || ''} required />
                                </label>
                                <label>
                                    Postal Code*
                                    <input className="user-profile-input" name="postal_code" defaultValue={billingData.postal_code || ''} required />
                                </label>
                                <label>
                                    Country*
                                    <input className="user-profile-input" name="country" defaultValue={billingData.country || ''} required />
                                </label>
                                <button type="submit" className="update-button">Update Billing Details</button>
                            </form>
                        ) : (
                            <div>
                                <p>Address Line 1: {billingData.address_line_1 || 'N/A'}</p>
                                <p>Address Line 2: {billingData.address_line_2 || 'N/A'}</p>
                                <p>City: {billingData.city || 'N/A'}</p>
                                <p>State: {billingData.state || 'N/A'}</p>
                                <p>Postal Code: {billingData.postal_code || 'N/A'}</p>
                                <p>Country: {billingData.country || 'N/A'}</p>
                                <button onClick={() => setIsEditing(true)} className="edit-button">Edit Billing Details</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserProfile;
