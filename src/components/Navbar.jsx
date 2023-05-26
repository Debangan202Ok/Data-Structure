import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link } from "react-router-dom";
import Dropdown from './dropdown';

export default function Navbar() {
    const githubLink = () => {
        window.open('https://github.com/pauldebangan1970', '_blank');
    }
    const inLink = () => {
        window.open('https://www.linkedin.com/in/debangan-paul-chowdhury-2ba39822a/', '_blank');
    }

    return (
        <nav className='w-screen flex items-center justify-evenly fixed py-3 bg-[#f7f7f7] text-black tracking-wide shadow-xl z-50 top-0 ' >
            <ul className='flex items-center mx-5'>
                <li className='font-semibold text-xl'><Link>DATA STRUCTURE</Link></li>
                <li className='ml-[20px] hover:text-black text-base hidden md:block '><Link className='active:font-bold' to={'/'}>HOME</Link></li>
                <li className='ml-3 hover:text-black cursor-pointer hidden md:block '><Link className='active:font-bold' to={'labs/'}>LABS</Link></li>
            </ul>
            <div className='flex items-center'>
                <BsGithub className='mx-2' style={{ fontSize: 20 }} onClick={githubLink} />
                <BsLinkedin className='mx-2' style={{ fontSize: 20 }} onClick={inLink} />
                <Dropdown />
            </div>
        </nav>
    )
}
