import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthProvider'; // Assuming AuthProvider is correctly implemented
import About from './components/about/About';
import WishlistPage from './components/wishlist1/WishlistPage'; // Corrected import
import Home from './components/Home/Home';
import ContactForm from './components/contact/ContactForm';
<<<<<<< HEAD
=======
import ProductDetails from './components/products/ProductDetails';
//import Billings from './components/billing/Billings';
>>>>>>> origin/main
import SignUpPage from './components/user/SignUpPage';
import LoginPage from './components/user/LogInPage';
import Products from './components/products/product';
//import ProductDetails from './pages/ProductDetails';
import AddProduct from './components/products/AddProduct';
import SellerDb from './pages/SellerDb';
import UserProfile from './pages/UserProfile';
import MyOrders from './components/Profile/orders';
import ProfilePage from './components/Dashboard/MyProducts/Profile/ProfilePage';

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/user/signup" element={<SignUpPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/sellerdash" element={<SellerDb />} />
          <Route path="/wishlist" element={<WishlistPage />} /> {/* Ensure this route is defined */}

          
          {/* Routes for dashboard and user profile */}
          <Route path="/dashboard" element={<UserProfile />}>
            <Route path="wishlist" element={<WishlistPage />} /> {/* Corrected route */}
            <Route path="profile" element={<ProfilePage />} />
            <Route path="orders" element={<MyOrders />} />
          </Route>
          
          {/* Redirect or catch-all routes */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </div>
    </AuthProvider>
  );
};

<<<<<<< HEAD
=======

// return (
//   <div className="App">
//     <About />
//   </div>
// );
// };

>>>>>>> origin/main
export default App;
