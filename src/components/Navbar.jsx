import logo from "../assets/img/download.svg"
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'

function Navbar() {
return (
    <nav className=' flex items-center justify-between '>
        <div className='flex flex-shrink items-center'>
            <img src={logo} alt='Logo' className=' w-[7rem] h-10% sm:w-40 md:w-[7rem] lg:w-[7rem]'/>
        </div>
        <div className=' m-8 flex items-center justify-center gap-4 text-2xl text-white'>
            <a href="https://www.linkedin.com/in/tabark-abdelrhman-153124366" target="blank"><FaLinkedin  className=" hover:text-cyan-700 duration-100"/></a>
            <a href="https://github.com/tabark345" target="blank"><FaGithub className="hover:text-black hover:bg-white duration-100 rounded-full"/></a>
            <a href="https://x.com/Tabark766545251" target="blank"><FaSquareXTwitter className="hover:text-black hover:bg-white duration-100 rounded-full" /></a>
        </div>
    </nav>
)
}

export default Navbar
