import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfileForm from './UserProfileForm';

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the API
    fetch('/api/user/profile')
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  const handleSave = (user) => {
    // Save user data to the API
    const { name, email, address, currentPassword, newPassword } = user;

    fetch('/api/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, address, currentPassword, newPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Profile updated successfully!');
        } else {
          alert('Error updating profile:', data.message);
        }
      })
      .catch((error) => console.error('Error updating profile:', error));
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="user-profile-page">
      {userData ? (
        <UserProfileForm
          initialUserData={userData}
          onSave={handleSave}
          onGoToCart={goToCart}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfilePage;
