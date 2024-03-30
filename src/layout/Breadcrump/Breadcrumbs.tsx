import useBreadcrumbs from "use-react-router-breadcrumbs";
import { privateRoutes } from '../../routes/navigation/navigationRoutes/private';
import { NavLink } from "react-router-dom";

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(privateRoutes);

  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb}
        </NavLink>
      ))}
    </>
  );
};