import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";

import ListingsWrapper from "./Listings/ListingsWrapper";
import Contact from "./Contact/Contact";
import Testimonials from "./Testimonials/Testimonials";
import Home from "./Home/Home";

function App() {

  
  return (
    <Router>
      <div className="App">

        <Switch>
          
          <Route exact path="/" component={Home}/> 
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
        </div>
          <ListingsWrapper/>
          <Testimonials/>
        </Router>
  );
  
}

export default App;
