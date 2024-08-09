import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthProvider'
//import About from './components/about/About';
//import WishlistComponent from './components/wishlist/Wishlist';
//import Home from './components/Home/Home';
//import ContactForm from './components/contact/ContactForm';
//import ProductDetails from './components/products/ProductDetails';
//import Billings from './components/billing/Billings';
import SignUpPage from './components/user/SignUpPage';
import Billings from './components/billing/Billings';
const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <SignUpPage />
      </div>
    </AuthProvider>
    
    
  );
};


// return (
//   <div className="App">
//     <About />
//   </div>
// );
// };

export default App;
