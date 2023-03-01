import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Preloader from "./Pre";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Create from "./Create";
import BlogDetails from "./BlogDetails"
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
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/project">
              <Projects />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
