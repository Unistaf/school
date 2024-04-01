import { MdDashboard } from "react-icons/md";
import { IconType } from "react-icons";
import { To } from "react-router-dom";

import {
  ACCEUIL_PATH,
  FORMATIONS_PATH,
  CANDIDATURES_PATH,
  MON_PROFIL_PATH,
} from "./navigationPaths";

/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export type SidebarLinksProps = { path: To; label: string; icon: IconType };

export const links: SidebarLinksProps[] = [
  { path: ACCEUIL_PATH, icon: MdDashboard, label: "Acceuil" },
  { path: FORMATIONS_PATH, icon: MdDashboard, label: "Formations" },
  { path: CANDIDATURES_PATH, icon: MdDashboard, label: "Candidatures" },
  { path: MON_PROFIL_PATH, icon: MdDashboard, label: "Mon Profil" },
];
