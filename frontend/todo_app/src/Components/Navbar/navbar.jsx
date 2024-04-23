import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { MdLibraryBooks } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

function Navbar() {
  const dispatch = useDispatch()
  const isloggedin = useSelector((state) => state.isloggedin);
  const logout = () => {
    dispatch(authActions.logout());
    sessionStorage.removeItem("id");
    window.location.reload();
  }
  console.log(isloggedin);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <b style={{ display: "flex", alignItems: "center" }}>
            <MdLibraryBooks style={{ marginRight: "5px" }} />
            TODO
          </b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item" style={{ marginRight: "10px" }}>
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: "10px" }}>
              <Link className="nav-link" to="/about">
                About us <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: "10px" }}>
              <Link className="nav-link" to="/todo">
                Todo <span className="sr-only">(current)</span>
              </Link>
            </li>
            
            {!isloggedin && <><li className="nav-item" style={{ marginRight: "10px" }}>
              <Link className="nav-link btn-nav" to="/signup">
                Sign up <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: "10px" }}>
              <Link className="nav-link btn-nav" to="/signin">
                Sign in <span className="sr-only">(current)</span>
              </Link>
            </li>
            </>}
            {isloggedin && <li className="nav-item" style={{ marginRight: "10px" }} onClick={logout}>
              <Link className="nav-link btn-nav" to="#" >
                Logout <span className="sr-only" >(current)</span>
              </Link>
            </li>}
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <img
                  className="user-png"
                  src="src\assets\icons8-user-100.png"
                  alt="User Icon"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

