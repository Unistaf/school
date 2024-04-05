/*
|--------------------------------------------------------------------------
! All Your Application Navigations Paths Will Be Here
|--------------------------------------------------------------------------
*/

/**
 * @readonly
 * ! PUBLIC ROUTES
 */
export const PUBLIC_PATH = "/";
export const ECOLES_PATH = "/etablissement";
export const ECOLES_DETAILS_PATH = ":ecole";
export const DIPLOME_PATH = "/diplomes";
export const TROUVER_FORMATION_PATH = "/trouver-ma-formation";
export const LOGIN_PATH = "/connexion";
export const REGISTER_PATH = "/inscription";
export const FORGETPASSWORD = "/auth/forgetPassword";
export const RESETPASSWORD = "/aut/resetPassword";

/**
 * @readonly
 * ! PROTECTED ROUTES
 */
export const ACCEUIL_PATH = "/acceuil";
export const FORMATIONS_PATH = "formations";
export const CANDIDATURES_PATH = "candidatures";
export const MON_PROFIL_PATH = "mon-profil";
export const MODIFIER_OU_COMPLETER_PROFIL_PATH = "modifier-ou-completer-profil";

/**
 * @readonly
 * ! NOT FOUND ROUTE
 */
export const NOTFOUND_PATH = "*";