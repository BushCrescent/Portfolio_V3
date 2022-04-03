import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Form from "./components/Form";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router basename="/">
      <div>
        <Nav />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/AboutMe">
            <AboutMe />
          </Route>
          {/* <Route exact path="/Form">
            <Form />
          </Route> */}
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}