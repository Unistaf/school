import { MdDashboard } from "react-icons/md";

import {
  ACCEUIL_PATH,
  FORMATIONS_PATH,
  CANDIDATURES_PATH,
  PROFIL_PATH,
} from "./navigationPaths";
import { SidebarLinksProps } from "@/layout/Sidebar/Sidebar";

/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export const links: SidebarLinksProps[] = [
  { path: ACCEUIL_PATH, icon: MdDashboard, label: "Acceuil" },
  { path: FORMATIONS_PATH, icon: MdDashboard, label: "Formations" },
  { path: CANDIDATURES_PATH, icon: MdDashboard, label: "Candidatures" },
  { path: PROFIL_PATH, icon: MdDashboard, label: "Mon Profil" },
];
