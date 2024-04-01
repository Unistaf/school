import LogoImg from "./LogoImg"

const Logo = () => {
  return (
    <div className="p-2 flex flex-col items-center">
      <LogoImg />
      <h2 className="text-2xl font-[600] hidden lg:block text-white mt-3">Bakeli</h2>
      <p className="text-white mt-2 font-medium">bakeli@gmail.com</p>
    </div>
  )
}

export default Logo