import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthProvider'
import About from './components/about/About';
import Wishlist from './components/wishlist/WishlistPage';
import Home from './components/Home/Home';
import ContactForm from './components/contact/ContactForm';
//import ProductDetails from './components/products/ProductDetails';
//import Billings from './components/billing/Billings';
import SignUpPage from './components/user/SignUpPage';
import LoginPage from './components/user/LogInPage';
//import CartPage from './components/CartPage/CartPage';
import Products from './components/products/product';
import ProductDetails from './pages/ProductDetails';
import AddProduct from './components/products/AddProduct';
import SellerDb from './pages/SellerDb';
import UserProfile from './pages/UserProfile';
import MyOrders from './components/Profile/orders';
import ProfilePage from './components/Dashboard/MyProducts/Profile/ProfilePage';
import Cart from './components/cart/Cart';

const App = () => {
  return (
    <AuthProvider>
       <div>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='user/login' element={<LoginPage />}/>
            <Route exact path='user/signup' element={<SignUpPage />}/>
            <Route exact path='/products' element={<Products />}/>
            <Route exact path='/products/:id' element={<ProductDetails />}/>
            <Route exact path='/about' element={<About />}/>
            <Route exact path='/contact' element={<ContactForm />}/>
            <Route exact path="dashboard/*" element={<UserProfile />} >
              <Route exact path='wishlist' element={<Wishlist />} />
              <Route exact path='profile' element={<ProfilePage />} />
              <Route exact path='orders'element={<MyOrders />} />
              <Route exact path= 'cart' element={<Cart />} />
            </Route>
            
        </Routes>
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