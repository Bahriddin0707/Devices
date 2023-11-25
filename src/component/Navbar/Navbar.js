import React from 'react';
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <header>
        <nav className={`navbar navbar-expand-lg navbar-light bg-light px-lg-5  ${styles.nav}`}>
          <div className="container-fluid">
            <button className={`navbar-toggler ${styles.button}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${styles.menu}`} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className={`nav-link active ${styles.link}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.link}`} to="cart">Cart</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  );
};

export default Navbar;
