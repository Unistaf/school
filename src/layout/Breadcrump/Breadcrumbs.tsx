import useBreadcrumbs from "use-react-router-breadcrumbs";
import { privateRoutes } from '../../routes/navigation/navigationRoutes/private';
import { NavLink } from "react-router-dom";

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(privateRoutes);

  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          {breadcrumbs.map(({ match, breadcrumb }, index) => {
            console.log({ match });

            return <li>
              <NavLink className={breadcrumbs.length === (index + 1) ? "font-bold" : ""} key={match.pathname} to={match.pathname}>
                {breadcrumb}
              </NavLink>
            </li>
          })
          }
        </ul>
      </div>
    </>
  );
};