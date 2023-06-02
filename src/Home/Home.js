import React from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";

import Contact from "../Contact/Contact";

export default function Home(){

    const history = useHistory();

  const navToContact = () => {
    history.push("/contact")
  }

  const navToHome = () => {
    history.push("/home")
  }

    return (
        <Router>
        <>
        <h1>Welcome to Home Page</h1>
        <button onClick={ navToHome }>Home</button>
        <button onClick={ navToContact }>Contact</button>

        <Switch>
        <Route path="/home" component={ Home } />
          <Route path="/contact" component={ Contact } />
          </Switch>
        </>
        </Router>
    );
}