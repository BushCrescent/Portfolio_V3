import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Form from "./components/Form";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";

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
        <Route path="/">
            <Home />
          </Route>
          <Route path="/AboutMe">
            <AboutMe />
          </Route>
          <Route path="/Form">
            <Form />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}