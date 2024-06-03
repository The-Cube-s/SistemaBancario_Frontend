import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
import { faUser, faCreditCard, faShoppingBag, faSignOutAlt, faSliders } from '@fortawesome/free-solid-svg-icons';
=======
import { faUser, faCreditCard, faShoppingBag, faSignOutAlt, faSliders, faAddressCard } from '@fortawesome/free-solid-svg-icons';
>>>>>>> origin/main
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <nav className="sidebar-navigation">
      <ul>
<<<<<<< HEAD
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
=======
        <Link to="/home/banco/users">
          <li>
            <FontAwesomeIcon icon={faUser} />
            <span className="tooltip">USERS</span>
          </li>
        </Link>
        <Link to="/home/banco/accounts">
          <li>
            <FontAwesomeIcon icon={faCreditCard} />
            <span className="tooltip">ACCOUNTS</span>
          </li>
        </Link>
        <Link to="/home/banco/products">
          <li>
            <FontAwesomeIcon icon={faShoppingBag} />
            <span className="tooltip">PRODUCTS</span>
          </li>
        </Link>
        <Link to="/home/banco/settings">
          <li>
            <FontAwesomeIcon icon={faSliders} />
            <span className="tooltip">Settings</span>
          </li>
        </Link>
        <Link to="/home/banco/register">
          <li>
            <FontAwesomeIcon icon={faAddressCard} />
            <span className="tooltip">Register</span>
          </li>
        </Link>
      </ul>
      <ul className="logout">
        <Link to="/home/banco/logout">
          <li>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="tooltip">Logout</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
>>>>>>> origin/main
