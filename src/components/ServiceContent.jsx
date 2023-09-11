import React from 'react'
import { useTheme } from '../ThemeContext'
import { BsFileCode } from "react-icons/bs"
import { PiPencilCircle} from "react-icons/pi"
import { AiOutlineVideoCameraAdd } from "react-icons/ai"
import { FaGlobe, FaFigma } from "react-icons/fa"
import { BiLogoInstagram, BiLogoTwitter, BiLogoFacebookCircle, BiLogoReddit, BiArrowBack, BiCodeAlt} from "react-icons/bi";
import { Link } from 'react-router-dom';
import { starabsolute} from '../assets'

const ServiceContent = () => {
    const {theme} = useTheme();
  return (
    <>
    <section className={`w-[100%] lg:w-[100%]  max-w-[1230px] mt-[150px] lg:mt-[180px] flex flex-col lg:flex-row items-start  gap-[5%]`}>
            <div className={`w-[100%] lg:w-[30%] p-[30px] lg:p-[50px] py-[45px] lg:py-[90px] rounded-[35px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} flex flex-col items-center sticky top-0 z-10`}>
                <div className={`flex gap-5 lg:gap-9 items-center mb-[82px] lg:justify-start w-full`}>
                    <BsFileCode className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} text-[30px] md:text-[40px] `}/>
                    <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[20px] font-inter uppercase`}>Web Development</h1>
                </div>
                <div className={`flex gap-5 lg:gap-9 items-center mb-[82px] lg:justify-start w-full`}>
                    <FaFigma className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} text-[30px] md:text-[40px] `}/>
                    <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[20px] font-inter uppercase`}>product design</h1>
                </div>
                <div className={`flex gap-5 lg:gap-9 items-center mb-[82px] lg:justify-start w-full`}>
                    <PiPencilCircle className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} text-[30px] md:text-[40px] `}/>
                    <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[20px] font-inter uppercase`}>Graphics Design</h1>
                </div>
                <div className={`flex gap-5 lg:gap-9 items-center lg:justify-start w-full`}>
                    <AiOutlineVideoCameraAdd className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} text-[30px] md:text-[40px] `}/>
                    <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[20px] font-inter uppercase`}>Video Editing</h1>
                </div>
            </div>
            <div className={`w-[100%] lg:w-[65%] mt-[100px] lg:mt-0 flex flex-col items-center`}>

                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} font-inter font-medium text-[30px] lg:text-[60px] uppercase`}>My Services</h1>
                
            <div className={`w-[100%] lg:w-[100%] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} grid grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-3 p-[30px] rounded-[30px]`}>
               <div className={`p-[30px] ${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} rounded-[30px]`}>
                <h4 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[16px] uppercase font-medium`}>Web development</h4>
                <p className='text-[#919090] mt-2'>Transforming your ideas into digital reality, I craft dynamic websites and web applications with cutting-edge technology, ensuring user-friendly interfaces and seamless functionality.</p>
               </div>
               <div className={`p-[30px] ${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} rounded-[30px]`}>
                <h4 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[16px] uppercase font-medium`}>Product Design</h4>
                <p className='text-[#919090] mt-2'>Elevating user experiences through intuitive design, I create visually appealing interfaces that engage and delight users, resulting in higher satisfaction and retention rates.</p>
               </div>
               <div className={`p-[30px] ${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} rounded-[30px]`}>
                <h4 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[16px] uppercase font-medium`}>Graphicsphics Design</h4>
                <p className='text-[#919090] mt-2'>Captivating your audience with stunning visuals, I bring your brand to life through eye-catching graphics, logos, and illustrations that convey your message with impact.</p>
               </div>
               <div className={`p-[30px] ${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} rounded-[30px]`}>
                <h4 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[16px] uppercase font-medium`}>Video Editing</h4>
                <p className='text-[#919090] mt-2'>Weaving stories with precision, I enhance your videos with seamless transitions, professional effects, and engaging narratives, leaving a lasting impression on your viewers.</p>
               </div>
            </div>
            </div>
        </section>




<section className={`w-[100%] lg:w-[100%] max-w-[1230px] mt-[1.75rem] grid gap-5 grid-rows-3 lg:grid-cols-4 lg:grid-rows-none`}>
<Link className={`${theme === 'light' ? 'bg-white' : 'bg-[#221c1c]'} col-span-2 lg:col-span-1 rounded-[20px] lg:p-[35px] p-[25px] order-3 relative group cursor-pointer`}>
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


<Link className={`${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} col-span-2 rounded-[25px] lg:p-[35px] p-[25px] order-2 relative group flex flex-col justify-end cursor-pointer lg:h-full`}>
    <img src={starabsolute} alt="Star" className={`absolute top-5 left-10 w-[15px] h-[30px] lg:w-[30px] lg:h-[60px]`}/>

    <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[35px] lg:text-[45px] font-medium leading-[50px] font-inter`}>Let's<br />Work<span className="text-[#5b78f6]"> Together!</span></h1>

    <Link>
    <BiArrowBack className={`absolute bottom-5 transition-all duration-300 opacity-10 translate-y right-5   text-[30px] md:text-[40px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'}     group-hover:opacity-100`}/>
    </Link>
</Link>
</section>
    </>
  )
}

export default ServiceContent