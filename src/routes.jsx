import App from "./App";
import { ContentRole } from "./Shared/ContentRole";
import { NotFoundPage } from "./Pages/NotFound/NotFoundPage";
import { UsersAdmin } from "./Pages/Admin/UsersAdmin";
import { AccountAdmin } from "./Pages/Admin/AccountAdmin";
//importar rutas de cliente 

//importar rutas del admin


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
    

]

