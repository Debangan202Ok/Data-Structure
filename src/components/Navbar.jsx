import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";
import {useState,useEffect} from "react"
export default function Navbar() {
  const githubLink = () => {
    window.open("https://github.com/pauldebangan1970/Data-Structure", "_blank");
  };
  const inLink = () => {
    window.open(
      "https://www.linkedin.com/in/debangan-paul-chowdhury-2ba39822a/",
      "_blank"
    );
  };
  
  const [onload, setonload] = useState(true)
   
  useEffect(() => {
   setTimeout(()=>{
    setonload(false)
   },500)
  }, [])
  console.log(onload)

  return (
    <nav
      className={`fixed inset-x-0 w-screen  mx-auto flex items-center justify-around md:mt-4 py-3 bg-[#f7f7f7] tracking-wide shadow-md z-50 md:rounded-full transition-all duration-500 ease-in-out ${onload ?' md:w-3/5' : 'md:w-1/2'}`}
    >
      <ul className="flex items-center mx-5">
        <li className="font-semibold text-[0.8rem] md:text-[1rem] ">
          <Link className="inline-flex animate-text-gradient bg-gradient-to-t from-[#FFFFFF] via-[#FF6633] to-[#F478e6] bg-[auto_200%] bg-clip-text text-xl text-transparent">DATA STRUCTURE</Link>
        </li>
        <li className="ml-[20px] text-base hidden md:block  ">
          <Link
            className="hover:px-4 hover:py-1  hover:bg-[#FF6633] rounded-2xl hover:text-white  transition-all duration-300 ease-in-out hover:font-semibold"
            to={"/"}
          >
            HOME
          </Link>
        </li>
        <li className="ml-3 hover:text-black cursor-pointer hidden md:block ">
          <Link
            className="hover:px-4 hover:py-1  hover:bg-[#F478e6] rounded-2xl hover:text-white  transition-all duration-300 ease-in-out hover:font-semibold"
            to={"labs/"}
          >
            LABS
          </Link>
        </li>
      </ul>
      <div> </div>
      <div className="flex items-center">
        <BsGithub
          className="mx-2 cursor-pointer"
          style={{ fontSize: 20 }}
          onClick={githubLink}
        />
        <BsLinkedin
          className="mx-2 cursor-pointer"
          style={{ fontSize: 20 }}
          onClick={inLink}
        />
        <Dropdown />
      </div>
    </nav>
  );
}
