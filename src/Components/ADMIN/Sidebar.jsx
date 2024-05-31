import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faHdd, faNewspaper, faPrint, faSliders } from '@fortawesome/free-solid-svg-icons';

export const Sidebar = () => {
  return (
    <nav className="sidebar-navigation">
      <ul>
        <li className="active">
          <FontAwesomeIcon icon={faShareAlt} />
          <span className="tooltip">USERS</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faHdd} />
          <span className="tooltip">ACCOUNTS</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faNewspaper} />
          <span className="tooltip">PRODUCTS</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPrint} />
          <span className="tooltip">Fax</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faSliders} />
          <span className="tooltip">Settings</span>
        </li>
      </ul>
    </nav>
  );
};
