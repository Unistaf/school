import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import { ACCEUIL_PATH, CANDIDATURES_PATH, FORMATIONS_PATH } from "../navigationPaths";
import RequireAuth from "@/layout/RequireAuth";
import AppShell from "@/layout/AppShell/AppShell";
import BreadcrumbsLayout from "@/layout/Breadcrump/BreadcrumbsLayout";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import FormationsPage from "@/pages/Formations/FormationsPage";
import CandidaturesPage from "@/pages/Candidatures/CandidaturesPage";


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
                        element: <BreadcrumbsLayout />,
                        children: [
                            {
                                breadcrumb: "Acceuil",
                                path: "",
                                element: <DashboardPage />
                            },
                            {
                                // breadcrumb: "Acceuil",
                                path: FORMATIONS_PATH,
                                element: <FormationsPage />
                            },
                            {
                                // breadcrumb: "Acceuil",
                                path: CANDIDATURES_PATH,
                                element: <CandidaturesPage />
                            },
                        ]
                    }
                ]
            }
        ]
    },
];