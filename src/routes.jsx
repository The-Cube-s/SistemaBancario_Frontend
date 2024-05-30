import App from "./App";
import { ContentRole } from "./Shared/ContentRole";
import { NotFoundPage } from "./Pages/NotFound/NotFoundPage";
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
    }
    //Rutas de cliente (agregar coma despues de not found)

    //Rutas de admin

]

