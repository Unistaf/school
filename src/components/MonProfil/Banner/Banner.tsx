import { BiLocationPlus } from "react-icons/bi"
import { MdModeEdit } from "react-icons/md";
import { FaSchool } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"

import Button from "@/components/Button/Button"
import LogoImg from "@/components/Logo/LogoImg"
import Title2 from "@/components/Typography/Title2"

const Banner = () => {
  const mockedFn = () => {
    console.log("mocked fn");

  }
  return (
    <div className="bg-white shadow-sm rounded-xl relative">
      <div className="h-36 bg-slate-500">Banner</div>
      <div className="flex gap-4 absolute right-4 top-4">
        <Button icon={MdModeEdit} variant="outlined" title="Modifier ou completer votre profil" onClick={mockedFn} />
        <Button icon={MdModeEdit} variant="outlined" title="Modifier mot de passe" onClick={mockedFn} />
      </div>
      <div className="flex px-6 gap-4 pb-6">
        <div className="mt-[-30px]">
          <LogoImg />
        </div>
        <div className="mt-2">
          <Title2 title="Bakeli" />
          <div className="mt-2 flex gap-5">
            <div className="flex items-center gap-1 text-gray-600">
              <FaSchool />
              <span className="text-gray">Tech</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <BiLocationPlus />
              <span className="text-gray">HLM Grand Yoff</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <FiUsers />
              <span className="text-gray">200 formations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner