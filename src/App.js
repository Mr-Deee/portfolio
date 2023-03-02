import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Preloader from "./Pre";
import Home from "./Home";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import ScrollToTop from ".ScrollToTop";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
// import Create from "./Create";
import ScrollToTop from "./ScrollToTop";
import Projects from "./Project";
import "./style.css";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

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
        <Route path="/project" element = {<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  </Router>
);




    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <div className="content">
    //       <Switch>
    //         <Route exact path="/">
    //           <Home />
    //         </Route>
    //         <Route path="/project">
    //           <Projects />
    //         </Route>

    //         <Route path="/blogs/:id">
    //           <BlogDetails/>
    //         </Route>
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
  //);
}

export default App;
