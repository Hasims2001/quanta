import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png"

const Navbar = () => {
  const navigate = useNavigate();

  //handleHomeLogo
  const handleHome = ()=>{
    navigate("/");
  }

  return (
    <div className="bg-[#0A2640] text-white pt-2">
        <div className="p-2 max-w-7xl m-auto flex items-center justify-between">
            <img src={logo} alt="logo" onClick={handleHome} className="w-20 border-solid border-1 border-red-500" />
            <div className="mr-10">
                <a href="#" className="mx-5">Product</a>
                <a href="#" className="mr-5">Services</a>
                <a href="#" className="mr-5">Contact</a>
                <a href="#" className="mr-10">Log in</a>
                <button className="bg-slate-400 p-1 text-white w-40 rounded-xl hover:bg-slate-300 hover:text-blue-500">Try It Free</button>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
