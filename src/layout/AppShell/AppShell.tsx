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
    <div className="w-full h-screen bg-[#9991] flex flex-row">
      {/* SideBar */}
      <Sidebar />

      {/* Container */}
      <div className="flex-1 p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="border-b-[1px] border-[#9993] h-[53px] bg-white flex items-center justify-between p-3">
            <div className="">DashBoard</div>
            <div className="">Other Items</div>
          </div>

          {/* My child Items */}
          <div className="bg-contentBg h-full overflow-y-auto overflow-x-hidden p-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppShell;