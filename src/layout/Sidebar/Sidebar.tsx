import { links } from "@/routes/navigation/sidebarLinks";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

export type SidebarLinksProps = { path: string | (() => string); label: string, icon: IconType }

const Sidebar = () => {
  return (
    <div className="lg:w-[250px] w-[50px] bg-blue relative overflow-x-hidden overflow-y-hidden p-2 transition-[width] duration-200 border-r-[1px] border-[#9993]">
      <div className="h-full">
        <div className="absolute h-full w-full top-3 left-0">
          <div className="p-2 flex flex-col items-center">
            <div className="w-20 h-20 bg-slate-300 rounded-full"></div>
            <h2 className="text-2xl font-[600] hidden lg:block text-white mt-3">Bakeli</h2>
            <p className="text-white mt-2 font-medium">bakeli@gmail.com</p>
          </div>
          {/* <div className="w-full h-[1px] bg-[#9993] my-1"></div> */}
          <div className="mt-4 flex-col gap-5 px-3">
            {links.map((item: SidebarLinksProps) => {
              const Icon = item.icon;
              return <NavLink
          // key={inde/x}
                to={""}
                className={
                  "flex gap-3 py-2 px-6 hover:bg-[#9993] bg-white rounded-md mb-2"
                }
              >
                <Icon size={25} />
                <div className="text-end hidden lg:block transition-[hidden] duration-300">
                  {item?.label}
                </div>
              </NavLink>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar