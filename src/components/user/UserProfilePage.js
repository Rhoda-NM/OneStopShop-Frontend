import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    // Fetch user data from the API
    fetch('/api/user/profile')
      .then((response) => response.json())
      .then((data) => setUser({
        ...user,
        name: data.name,
        email: data.email,
        address: data.address,
      }))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    // Save user data to the API
    const { name, email, address, currentPassword, newPassword, confirmPassword } = user;

    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }

    const payload = {
      name,
      email,
      address,
      currentPassword,
      newPassword,
    };

    fetch('/api/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
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
      <h2>Edit Profile</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={user.address} onChange={handleChange} />
        </div>
        <div>
          <label>Current Password:</label>
          <input type="password" name="currentPassword" value={user.currentPassword} onChange={handleChange} />
        </div>
        <div>
          <label>New Password:</label>
          <input type="password" name="newPassword" value={user.newPassword} onChange={handleChange} />
        </div>
        <div>
          <label>Confirm New Password:</label>
          <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSave}>Save</button>
      </form>
      <button onClick={goToCart}>Go to Cart</button>
    </div>
  );
};

export default UserProfilePage;
