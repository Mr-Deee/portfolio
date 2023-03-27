import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Preloader from "./Pre";
import Home from "./Home";
import About from "./About/About";
import Footer from "./Footer";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Projects from "./projects/Project";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );

}

export default App;
