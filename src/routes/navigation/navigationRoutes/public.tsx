import { LOGIN_PATH, PUBLIC_PATH } from "../navigationPaths";
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';
import WithoutAuth from "../../../layout/WithoutAuth";
import { LoginPage } from "@/pages/Login/LoginPage";
import { Navigate } from "react-router-dom";

/*
|---------------------------------------------------------------
| Les routes publics
|---------------------------------------------------------------
| Toute page qui ne necessite pas une authentification doit etre ici
|
*/
export const publicRoutes = [
    {
        path: PUBLIC_PATH,
        errorElement: <ErrorBoundary />,
        element: <WithoutAuth />,
        children: [
            {
                path: '',
                element: <Navigate to={LOGIN_PATH} />
            },
            {
                path: LOGIN_PATH,
                element: <LoginPage />
            },
        ]
    },
];