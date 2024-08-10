import React, { useState, useEffect } from 'react';
import "./sidebar.css";
//import Logo from "../imgs/logo.png";
import { UilSignout } from "@iconscout/react-unicons";
import { UserSideBar } from '../Dashboard/data';
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";


const Sidebar = () => {
    const [selected, setSelected] = useState(-1);

    const [expanded, setExpanded] = useState(true);
  
    const sidebarVariants = {
      true: {
        left : '0'
      },
      false:{
        left : '0'
      }
    }
    //console.log(window.innerWidth)

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
              onClick={() => setSelected(index)}
          >
              <item.icon />
              <span>{item.heading}</span>
          </div>
          );
          })}
      {/* signoutIcon */}
          <div className="menuItem">
              <UilSignout />
          </div>
          </div>
  </div>
    }
    
    
  </>
  )
}

export default Sidebar