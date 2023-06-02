import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Contact from "./Contact/Contact";

import "./App.css";

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
        </Router>
  );
  
}

export default App;
