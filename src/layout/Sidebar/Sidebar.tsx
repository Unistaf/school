import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="lg:w-[250px] w-[50px] min-h-screen bg-blue p-2 transition-[width] duration-200 border-r-[1px] border-[#9993]">
      <div>
        <div className="d-flex flex-col">
          <div className="p-2 flex gap-5 items-center border-b-[1px] border-[#9993] h-[53px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-gmail"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" />
              <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" />
              <path d="M16 4l-4 4l-4 -4" />
              <path d="M4 6.5l8 7.5l8 -7.5" />
            </svg>
            <h2 className="text-2xl font-[200] hidden lg:block text-white">Logo Name</h2>
          </div>
          {/* <div className="w-full h-[1px] bg-[#9993] my-1"></div> */}
          <div className="mt-4 flex-col gap-5">
            {[
              {
                id: 1,
                label: "Dashboard",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-dashboard"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M13.45 11.55l2.05 -2.05" />
                    <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
                  </svg>
                ),
              },
              {
                id: 4,
                label: "Paramaetres",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-settings"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  </svg>
                ),
              },
            ].map((item: { id: number; label: string }) => (
              <NavLink
                key={item.id}
                to={""}
                className={
                  "flex gap-3 py-2 hover:bg-[#9993] px-1 rounded-md mb-2"
                }
              >
                {/* {item?.icon} */}
                <div className="text-end hidden lg:block transition-[hidden] duration-300">
                  {item?.label}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar