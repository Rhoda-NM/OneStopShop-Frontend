import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        fetch('/user/me', {
            headers: { 'Authorization': `Bearer ${token}` },
        })
        .then(res => {
            if (!res.ok) { // Check if the server response is not OK (e.g., 401, 403)
                throw new Error('Token validation failed or token expired');
            }
            return res.json();
        })
        .then(data => {
            setUser(data);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            // Clear the token from localStorage if it is expired or invalid
            localStorage.removeItem('token');
            // Optionally redirect to login page or show error
            //navigate('/user/login');
            setLoading(false);
        });
    } else {
        setLoading(false);
    }
}, []);

  const login = async (email, password) => {
    const response = await fetch('/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      //console.log(data);
      //console.log(data.access_token);
      localStorage.setItem('token', data.access_token);
      setUser(data.user);
      
    } else {
      console.error('Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);