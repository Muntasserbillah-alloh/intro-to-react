import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts";
import ROUTES from "./routes";
import * as Pages from '../pages';


const routes = [
    {
        path: ROUTES.BASE,
        element: <Pages.CartUi/>
    },
    {
        path: ROUTES.CART,
        element: <Pages.CartUi/>
    },
    {
        path: ROUTES.NOT_FOUND,
        element: <Pages.NotFoundUi />,
    },
    {
        path: "*",
        element: <Pages.NotFoundUi />,
    },
];



export const getRouterRoutes = () => {
    return [
        {
            path: "/",
            element: <MainLayout />,
            children: routes,
        },
    ];
};

const router = createBrowserRouter(getRouterRoutes());
export default router;