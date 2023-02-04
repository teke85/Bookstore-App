import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../App.css';

const Navbar = () => (
  <nav className="nav">
    <ul>
      <h1 className="navTitle">BookStore CMS</h1>
      <li>
        <Link className="link" to="/">
          BOOKS
        </Link>
      </li>
      <li>
        <Link className="link" to="/Categories">
          CATEGORIES
        </Link>
      </li>
    </ul>
    <FaUser className="Icon" />
  </nav>
);

export default Navbar;
