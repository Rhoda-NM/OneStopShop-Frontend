import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthProvider';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "./sidebar.css";
//import Logo from "../imgs/logo.png";
import { UilSignout } from "@iconscout/react-unicons";
import { UserSideBar } from '../Dashboard/data';
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";


const Sidebar = () => {
  const [selected, setSelected] = useState(-1);
  const { logout, user, loading } = useAuth();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  const handleItemClick = (index, path) => {
    setSelected(index);
    navigate(`/dashboard/${path}`);
  };
  
  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '0'
    }
  }
  //console.log(window.innerWidth)
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout error', err);
    }
  };

  return (
    <>
    {!expanded ? 
       <div className="bars" >
        <UilBars />
      </div>

      :
      <div className='sidebar'>
      {/* logo */}
        <div className="logo">
            <span>
                <span>O</span>ne St<span>o</span>p Sh<span>o</span>ps
            </span>
        </div>
        <div className="menu">
          {UserSideBar.map((item, index) => {
          return (
          <div
              className={selected === index ? "menuItem active " : "menuItem"}
              key={index}
              onClick={() => handleItemClick(index, `${item.heading.toLowerCase().replace(/ /g, '-')}`)}
          >
              <item.icon />
              <span>{item.heading}</span>
          </div>
          );
          })}
      {/* signoutIcon */}
          <div className="menuItem">
              <UilSignout onClick={() => setShowLogoutModal(true)} />
          </div>
        </div>
      </div>
    }
    {showLogoutModal && (
        <ModalBackground>
            <ModalWrapper>
                <ModalHeader>
                    <ModalTitle>Confirm Logout</ModalTitle>
                </ModalHeader>
                <ModalBody>Are you sure you want to LOGOUT</ModalBody>
                <ModalFooter>
                    <Button onClick={() => setShowLogoutModal(false)}>Cancel</Button>
                    <Button onClick={handleLogout}>Logout</Button>
                </ModalFooter>
            </ModalWrapper>
        </ModalBackground>
      )}
    
  </>
  )
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
`;

// Modal Wrapper
const ModalWrapper = styled.div`
  background: white;
  border-radius: 5px;
  width: 500px;
  max-width: 90%;
  padding: 20px;
`;

// Modal Header
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #dee2e6;
`;

// Modal Title
const ModalTitle = styled.h5`
  margin: 0;
`;

// Modal Body
const ModalBody = styled.div`
  padding: 20px 0;
`;

// Modal Footer
const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  border-top: 1px solid #dee2e6;
`;

// Button (you can customize this further)
const Button = styled.button`
  padding: 5px 15px;
  background-color: #db4445;
  color: #333;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;

export default Sidebar