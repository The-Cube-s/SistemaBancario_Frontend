import { Routes, Route, Navigate } from 'react-router-dom';
import { HomeClient } from '../Pages/Client/HomeClient'
import { NotFoundPage } from '../Pages/NotFound/NotFoundPage';
//Admin pages
import { UsersAdmin } from '../Pages/Admin/UsersAdmin';
import Layout from '../Components/ADMIN/Layout';
import NavbarLayout from '../Components/CLIENT/NavbarLayout';



export const ContentRole = () => {
  // Buscaremos el user
  const userDetails = localStorage.getItem('user');
  // Extraemos el rol
  const role = userDetails ? JSON.parse(userDetails).role : null;

  return (
      <Routes>
        {role === 'ADMIN' ? (
          <Route path="banco" element={<Layout><UsersAdmin /></Layout>} />
        ) : role === 'CLIENT' ? (
          <Route path="banco" element={<NavbarLayout><HomeClient/></NavbarLayout>} />          
        ) : (
          // Manejar otros roles o un rol desconocido mostrando una página de NotFoundPage
          <Route path="*" element={<NotFoundPage />} />
        )}
      </Routes>
    );
  };