import { Routes, Route, Navigate } from 'react-router-dom';
<<<<<<< HEAD
import { HomeAdmin } from '../Pages/Admin/HomeAdmin'
import { HomeClient } from '../Pages/Client/HomeClient'
import { NotFoundPage } from '../Pages/NotFound/NotFoundPage';
=======
import { HomeClient } from '../Pages/Client/HomeClient'
import { NotFoundPage } from '../Pages/NotFound/NotFoundPage';
//Admin pages
import { UsersAdmin } from '../Pages/Admin/UsersAdmin';
import Layout from '../Components/ADMIN/Layout';


>>>>>>> origin/main

export const ContentRole = () => {
  // Buscaremos el user
  const userDetails = localStorage.getItem('user');
  // Extraemos el rol
  const role = userDetails ? JSON.parse(userDetails).role : null;

  return (
      <Routes>
        {role === 'ADMIN' ? (
<<<<<<< HEAD
          <Route path="banco" element={<HomeAdmin />} />
=======
          <Route path="banco" element={<Layout><UsersAdmin /></Layout>} />
>>>>>>> origin/main
        ) : role === 'CLIENT' ? (
          <Route path="banco" element={<HomeClient />} />
        ) : (
          // Manejar otros roles o un rol desconocido mostrando una página de NotFoundPage
          <Route path="*" element={<NotFoundPage />} />
        )}
      </Routes>
    );
  };