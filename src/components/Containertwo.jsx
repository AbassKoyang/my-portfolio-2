import React from 'react'
import { useTheme } from '../ThemeContext';
import { gfonts } from '../assets';
import { BiLogoInstagram, BiLogoTwitter, BiLogoFacebookCircle, BiLogoReddit, BiArrowBack, BiCodeAlt} from "react-icons/bi";
import { BsFileCode } from "react-icons/bs"
import { PiPencilCircle} from "react-icons/pi"
import { AiOutlineVideoCameraAdd } from "react-icons/ai"
import { FaGlobe, FaFigma } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Containertwo = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <section className={`w-[93%] lg:w-[90%] max-w-[1230px] mt-[1.75rem] grid gap-5 grid-rows-3 lg:grid-cols-4 lg:grid-rows-none`}>
        <Link to="/contact" className={`${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} col-span-2 lg:col-span-1 rounded-[20px] lg:p-[35px] p-[25px] order-3 relative group cursor-pointer`}>
            <div className={`flex gap-4 items-center justify-center icon-bubble-wrap ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[20px] rounded-[30px] `}>
                {/* <BiLogoTwitter className={` rounded-[50%] text-[60px] icon-buble lg:hidden ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[10px] transition-all duration-300`}/> */}
                <BiLogoInstagram className={` rounded-[50%] text-[60px] icon-buble lg:hidden ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[10px] transition-all duration-300`}/>
                <BiLogoReddit className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/>
                <BiLogoFacebookCircle className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/>
            </div>
            <p className='text-[16px] font-normal text-[#BCBCBC] mt-5 mb-0'>Stay With Me</p>
            <h4 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[25px] font-medium`}>Profiles</h4>
           <Link>
           <BiArrowBack className={`absolute bottom-5 transition-all duration-300 opacity-10 translate-y right-5 text-[30px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
           </Link>
        </Link>
        <Link className={`${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} col-span-2 lg:col-span-1 rounded-[20px] lg:p-[35px] p-[25px] order-1 relative group cursor-pointer`}>
            <p className='text-[16px] font-normal text-[#BCBCBC] mt-5 mb-0'>Stay With Me</p>
            <h4 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[25px] font-medium`}>Profiles</h4>
            <Link>
            <BiArrowBack className={`absolute bottom-5 transition-all duration-300 opacity-10 translate-y right-5 text-[30px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
            </Link>
        </Link>



        <Link to='/services' className={`${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} col-span-2 rounded-[25px] lg:p-[35px] p-[25px] order-2 relative group flex flex-col justify-end cursor-pointer`}>
            <div className={`flex items-center justify-center gap-[2rem] md:gap-[4rem] mb-8`}>
            <BsFileCode className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} text-[45px] md:text-[60px] `}/>
            <FaFigma className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} text-[45px] md:text-[60px] `}/>
            <PiPencilCircle className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} text-[45px] md:text-[60px] `}/>
            <AiOutlineVideoCameraAdd className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'}  text-[45px] md:text-[60px]  `}/>
            </div>
        <p className='text-[16px] font-normal text-[#BCBCBC] mt-5 mb-0'>Specializations</p>
            <h4 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[25px] font-medium`}>Services Offering</h4>
           <Link>
           <BiArrowBack className={`absolute bottom-5 transition-all duration-300 opacity-10 translate-y right-5 text-[30px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
           </Link>
        </Link>
    </section>
  )
}

export default Containertwo;