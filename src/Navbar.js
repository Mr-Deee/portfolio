import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "./Assets/logo.png";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react'
// import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

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
        {/* <Brand /> */}
      </div>

      <div className="menu-icon" onClick={handleShowNavbar}>
    <Hamburger />
  </div>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
       
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
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
    //       aria-controls="responsive-navbar-nav"
    //       onClick={() => {
    //         updateExpanded(expand ? false : "expanded");
    //       }}
    //     >
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="ms-auto" defaultActiveKey="#home">
    //         <Nav.Item>
    //           <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
    //             <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
    //           </Nav.Link>
    //         </Nav.Item>
    //         <div className="menu-icon" onClick={handleShowNavbar}>
    //       <Hamburger />
    //     </div>
    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/about"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <AiOutlineUser style={{ marginBottom: "2px" }} /> About
    //           </Nav.Link>
    //         </Nav.Item>

    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/project"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <AiOutlineFundProjectionScreen
    //               style={{ marginBottom: "2px" }}
    //             />{" "}
    //             Projects
    //           </Nav.Link>
    //         </Nav.Item>

    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/resume"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
    //           </Nav.Link>
    //         </Nav.Item>

    //         {/* <Nav.Item>
    //           <Nav.Link
    //             href="https://soumyajitblogs.vercel.app/"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <ImBlog style={{ marginBottom: "2px" }} /> Blogs
    //           </Nav.Link>
    //         </Nav.Item> */}

    //         <Nav.Item className="fork-btn">
    //           <Button
    //             href="https://github.com/Mr-Deee"
    //             target="_blank"
    //             className="fork-btn-inner"
    //           >
    //             <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
    //             <AiFillStar style={{ fontSize: "1.1em" }} />
    //           </Button>
    //         </Nav.Item>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default NavBar;
