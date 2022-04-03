import {
  Link
} from "react-router-dom";
const Nav = () =>{
    return (
        <nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">John Park</a>

    <div id="navbarColor02">
      <ul className="navbar-nav me-auto">
            <li className = "nav-item">
              <Link to="/" className="nav-items">Home</Link>
            </li>
            {/* <li className = "nav-item">
              <Link to="/AboutMe" className="nav-items">About Me</Link>
            </li> */}
            
            {/* <li className = "nav-item">
              <Link to="/Form" className="nav-items">Form</Link>
            </li> */}
      </ul>
    </div>
  </div>
</nav>

    );
};

export default Nav;