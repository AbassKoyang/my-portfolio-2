import React from "react"
import { useTheme } from '../ThemeContext';
import { BiLogoInstagram, BiLogoTwitter, BiLogoFacebookCircle, BiLogoReddit, BiArrowBack, BiCodeAlt} from "react-icons/bi";
import { starabsolute } from "../assets";
import { Link } from "react-router-dom";

const Containerthree = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <section className={`w-[93%] lg:w-[90%] max-w-[1230px] mt-[1.75rem] grid gap-5 grid-rows-2 lg:grid-cols-2 lg:grid-rows-none`}>
        <div className={`${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} col-span-1 grid-cols-2 grid md:grid-cols-3 gap-3 rounded-[20px] lg:p-[35px] p-[25px] relative`}>
            <div className={`p-[20px] ${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} rounded-[25px] col-span-1`}>
                <h2 className={`text-[#5b78f6] font-inter font-medium text-[45px] mb-1 text-center`}>01</h2>
                <p className={`font-thin font-inter text-[#BCBCBC] text-[15px] text-center`}>Years of Experience</p>
            </div>
            <div className={`p-[20px] ${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} rounded-[25px] col-span-1`}>
                <h2 className={`text-[#5b78f6] font-inter font-medium text-[45px] mb-1 text-center`}>07</h2>
                <p className={`font-thin font-inter text-[#BCBCBC] text-[15px] text-center`}>Satisfied Clients</p>
            </div>
            <div className={`p-[20px] ${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} rounded-[25px] col-span-1`}>
                <h2 className={`text-[#5b78f6] font-inter font-medium text-[45px] mb-1 text-center`}>30</h2>
                <p className={`font-thin font-inter text-[#BCBCBC] text-[15px] text-center`}>Completed Projects</p>
            </div>
        </div>
        <Link to="/contact" className={`${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} col-span-1 rounded-[25px] lg:p-[35px] p-[25px] relative group flex flex-col justify-end cursor-pointer h-1/2 lg:h-full`}>
        
            <img src={starabsolute} alt="Star" className={`absolute top-5 left-10 w-[15px] h-[30px] lg:w-[30px] lg:h-[60px]`}/>

            <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[35px] lg:text-[45px] font-medium leading-[50px] font-inter`}>Let's<br />Work<span className="text-[#5b78f6]"> Together!</span></h1>

            <Link>
            <BiArrowBack className={`absolute bottom-5 transition-all duration-300 opacity-10 translate-y right-5   text-[30px] md:text-[40px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'}     group-hover:opacity-100`}/>
            </Link>

        </Link>
    </section>
  )
}

export default Containerthree;