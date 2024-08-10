import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import './sellerdb.css'
//import { Modal, Button } from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from 'react-bootstrap';
//import MainDash from './components/MainDash/MainDash';
//import RightSide from './components/RigtSide/RightSide';
import Sidebar from '../components/Dashboard/sidebar';
import AddProduct from '../components/Dashboard/AddProduct/addProduct';
import MyProducts from '../components/Dashboard/MyProducts/products';
import ProfilePage from '../components/Dashboard/MyProducts/Profile/ProfilePage';

function SellerDb() {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const {logout } = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
          await logout();
          navigate('/login');
        } catch (err) {
          console.error('Logout error', err);
        }
      };

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <main>
            {/* Logout Confirmation Modal */}
            <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to logout?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
                    Cancel
                </Button>
                <Button variant="warning" onClick={handleLogout}>
                    Logout
                </Button>
                </Modal.Footer>
            </Modal>
            <ProfilePage />
            <MyProducts />
        </main>
        
        
      </div>
    </div>
  );
}


export default SellerDb