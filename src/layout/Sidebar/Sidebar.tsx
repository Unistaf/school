import Logo from "@/components/Logo/Logo";
import { SidebarLinksProps, links } from "@/routes/navigation/sidebarLinks";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const baseClassName = "flex gap-3 py-2 px-6 rounded-md mb-4"
  return (
    <div className="lg:w-[250px] w-[50px] bg-blue relative overflow-x-hidden overflow-y-hidden p-2 transition-[width] duration-200 border-r-[1px] border-[#9993]">
      <div className="h-full">
        <div className="absolute h-full w-full top-3 left-0">
          <Logo />
          <div className="mt-4 flex-col gap-5 px-3">
            {links.map((item: SidebarLinksProps, index) => {
              const Icon = item.icon;
              return <NavLink
                key={index}
                to={item.path}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : `${isActive ? "bg-white " : "bg-transparent text-white hover:bg-[#9993] "}` + baseClassName
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