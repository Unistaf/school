import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import { ACCEUIL_PATH } from "../navigationPaths";
import RequireAuth from "@/layout/RequireAuth";
import AppShell from "@/layout/AppShell/AppShell";


/*
|---------------------------------------------------------------
| Les routes privates
|---------------------------------------------------------------
| Toute page qui necessite une authentification doit etre ici
|
*/
export const privateRoutes = [
    {
        path: ACCEUIL_PATH,
        errorElement: <ErrorBoundary />,
        element: <RequireAuth />,
        children: [
            {
                path: "",
                element: <AppShell />,
                children: [
                    {
                        path: "",
                        element: <h1>Wecolme</h1>
                    }
                ]
            }
        ]
    },
];