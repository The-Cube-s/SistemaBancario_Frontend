import App from "./App";
import { ContentRole } from "./Shared/ContentRole";
import { NotFoundPage } from "./Pages/NotFound/NotFoundPage";
<<<<<<< HEAD
import { UsersAdmin } from "./Pages/Admin/UsersAdmin";
import { AccountAdmin } from "./Pages/Admin/AccountAdmin";
//importar rutas de cliente 

//importar rutas del admin

=======
import Layout from "./Components/ADMIN/Layout";

//importar rutas de cliente 

//importar rutas del admin
import { UsersAdmin } from "./Pages/Admin/UsersAdmin";
import { AccountAdmin } from "./Pages/Admin/AccountAdmin";
import { ProductAdmin } from "./Pages/Admin/ProductAdmin";
import { SettingsAdmin } from "./Pages/Admin/SettingsAdmin";
import { RegisterAdmin } from "./Pages/Admin/RegisterAdmin";
>>>>>>> origin/main

export const routes = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '/home/*',
        element: <ContentRole />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
    //Rutas de cliente (agregar coma despues de not found)

    //Rutas de admin
<<<<<<< HEAD
    {
        path: '/home/banco/users',
        element: <UsersAdmin />
    },
    {
        path: '/home/banco/accounts',
        element: <AccountAdmin />
    },
    {
        path: '/home/banco/products',
        element: <AccountAdmin />
    },
    {
        path: '/home/banco/settings',
        element: <AccountAdmin />
    },
    {
        path: '/home/banco/logout',
        element: <AccountAdmin />
    },
=======
    // Rutas de admin
  {
    path: '/home/banco/users',
    element: <Layout><UsersAdmin /></Layout>
  },
  {
    path: '/home/banco/accounts',
    element: <Layout><AccountAdmin /></Layout>
  },
  {
    path: '/home/banco/products',
    element: <Layout><ProductAdmin /></Layout>
  },
  {
    path: '/home/banco/settings',
    element: <Layout><SettingsAdmin /></Layout>
  },
  {
    path: '/home/banco/logout',
    element: <Layout><AccountAdmin /></Layout>
  },
  {
    path: '/home/banco/register',
    element: <Layout><RegisterAdmin /></Layout>
  }
>>>>>>> origin/main
    

]

