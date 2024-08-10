<<<<<<< HEAD
// import logo from './logo.svg';
import './App.css';
=======
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthProvider'
//import About from './components/about/About';
import Wishlist from './components/wishlist/Wishlist';
//import Home from './components/Home/Home';
>>>>>>> origin/main
//import ContactForm from './components/contact/ContactForm';
import Home from './components/Home/Home.js';
import SignUpPage from './components/user/SignUpPage';
import LoginPage from './components/user/LogInPage';
<<<<<<< HEAD
import CartPage from './components/cart/CartPage';

function App() {
  return (
    <div className="App">
      <SignUpPage />
    </div>
=======
const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Wishlist />
      </div>
    </AuthProvider>
    
>>>>>>> origin/main
  );
}

export default App;