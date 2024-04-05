// !GERER L'AUTORISATION D'ACCESS A VOTRE APPLICATION

import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

/**
 * Definit l'authentification
 */
function useIsAuthenticate(): true | false {
  const { isAuthenticate } = useContext(AuthContext);

  return isAuthenticate;
}

export default useIsAuthenticate;
