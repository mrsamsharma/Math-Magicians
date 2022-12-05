import React from 'react';
import '../styles.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Math Magicians</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse flex-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/calculator">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/quote">Quote</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
