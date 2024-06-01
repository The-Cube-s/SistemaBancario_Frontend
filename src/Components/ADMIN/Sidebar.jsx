import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCreditCard, faShoppingBag, faSignOutAlt, faSliders } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <nav className="sidebar-navigation">
      <ul>
        <li>
          <Link to="/home/banco/users">
            <FontAwesomeIcon icon={faUser} />
            <span className="tooltip">USERS</span>
          </Link>
        </li>
        <li>
          <Link to="/home/banco/accounts">
            <FontAwesomeIcon icon={faCreditCard} />
            <span className="tooltip">ACCOUNTS</span>
          </Link>
        </li>
        <li>
          <Link to="/home/banco/products">
            <FontAwesomeIcon icon={faShoppingBag} />
            <span className="tooltip">PRODUCTS</span>
          </Link>
        </li>
        <li>
          <Link to="/home/banco/settings">
            <FontAwesomeIcon icon={faSliders} />
            <span className="tooltip">Settings</span>
          </Link>
        </li>
      </ul>
      <ul className="logout">
        <li>
          <Link to="/home/banco/logout">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="tooltip">Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};