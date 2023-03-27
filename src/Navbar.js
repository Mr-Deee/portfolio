import React, { useState } from "react";
import logo from "./Assets/logo.png";

import { NavLink } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react'
// import { ImBlog } from "react-icons/im";
import {

  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineFundProjectionScreen,

} from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);



  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (


    <nav className="navbar">
    <div className="container">
      <div className="logo">
        <logo />
      </div>


      <div className="menu-icon" onClick={handleShowNavbar}>
    <Hamburger />
  </div>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          <li>
            <NavLink to="/">  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home</NavLink>
          </li>
       
          <li>
            <NavLink to="/about">  <AiOutlineInfoCircle style={{ marginBottom: "2px" }} /> About</NavLink>
          </li>
          <li>
            <NavLink to="/project"><AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />Projects</NavLink>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>


    // <Navbar
    //   expanded={expand}
     
    //   className={navColour ? "sticky" : "navbar"}
    // >
    //   <Container>
    //     <Navbar.Brand href="/" className="d-flex">
    //       <img src={logo} className="img-fluid logo" alt="brand" />
    //     </Navbar.Brand>
        
    //     <Navbar.Toggle
    
  );
}

export default NavBar;
