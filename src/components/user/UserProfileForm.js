import React, { useState, useEffect } from 'react';

const UserProfileForm = ({ initialUserData, onSave, onGoToCart }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (initialUserData) {
      setUser({
        ...user,
        name: initialUserData.name,
        email: initialUserData.email,
        address: initialUserData.address,
      });
    }
  }, [initialUserData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    if (user.newPassword !== user.confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }

    onSave(user);
  };

  return (
    <div className="user-profile-form">
      <h2>Edit Profile</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Current Password:</label>
          <input
            type="password"
            name="currentPassword"
            value={user.currentPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            name="newPassword"
            value={user.newPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm New Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
      <button onClick={onGoToCart}>Go to Cart</button>
    </div>
  );
};

export default UserProfileForm;
