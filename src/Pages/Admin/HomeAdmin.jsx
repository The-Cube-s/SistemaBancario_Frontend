import React from 'react'
import { Sidebar } from '../../Components/ADMIN/Sidebar'
import {UsersAdmin} from './UsersAdmin'

export const HomeAdmin = () => {
  return (
    <div className="admin-container" style={{ display: 'flex' }}>
      <Sidebar />
      <div className="content" style={{ flexGrow: 1, padding: '20px' }}>
        <UsersAdmin />
      </div>
    </div>
  );
};