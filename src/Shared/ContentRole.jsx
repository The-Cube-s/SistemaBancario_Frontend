import { Routes, Route, Navigate } from 'react-router-dom';
import { HomeClient } from '../Pages/Client/HomeClient'
import { NotFoundPage } from '../Pages/NotFound/NotFoundPage';
//Admin pages
import { HomeAdmin } from '../Pages/Admin/HomeAdmin'
import Layout from '../Components/ADMIN/Layout';



export const ContentRole = () => {
  // Buscaremos el user
  const userDetails = localStorage.getItem('user');
  // Extraemos el rol
  const role = userDetails ? JSON.parse(userDetails).role : null;

  return (
      <Routes>
        {role === 'ADMIN' ? (
          <Route path="banco" element={<Layout><HomeAdmin /></Layout>} />
        ) : role === 'CLIENT' ? (
          <Route path="banco" element={<HomeClient />} />
        ) : (
          // Manejar otros roles o un rol desconocido mostrando una página de NotFoundPage
          <Route path="*" element={<NotFoundPage />} />
        )}
      </Routes>
    );
  };