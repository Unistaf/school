// import { NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

/**
 * AppShell template
 * You can add props , custom the header and the others
 * @param param0
 * @returns
 */
function AppShell() {
  return (
    <div className="w-full min-h-screen dark:bg-[#0c0e14] dark:text-white bg-[#9991] flex">
      {/* SideBar */}
      <Sidebar />

      {/* Container */}
      <div className="flex-1 p-0">
        {/* Header */}
        <div className="border-b-[1px] border-[#9993] h-[53px] sticky top-0 bg-white flex items-center justify-between">
          <div className="">DashBoard</div>
          <div className="">Other Items</div>
        </div>

        {/* My child Items */}
        <div className="bg-contentBg min-h-[150vh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppShell;