import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Form from "./components/Form";
import AboutMe from "./components/AboutMe";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/AboutMe">
            <AboutMe />
          </Route>
          <Route path="/Form">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}