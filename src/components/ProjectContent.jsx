import React from 'react'
import { useTheme } from '../ThemeContext'
import { sportopiaproject } from '../assets';
import { Link } from 'react-router-dom';
import { BiArrowBack, BiLogoFacebookCircle, BiLogoGithub, BiLogoReddit } from 'react-icons/bi';
import { TbWorldShare } from 'react-icons/tb';

const ProjectContent = () => {
    const {theme} = useTheme();
    const handleIconClick = () => {
        window.location.href = 'https://abass-sportopia-project.netlify.app/'; // Replace with your URL
      };

  return (
    <section className={`w-[100%] lg:w-[100%]  max-w-[1230px] mt-[150px] lg:mt-[180px]`}>
        <a href="https://abass-sportopia-project.netlify.app/"><BiArrowBack className={` bottom-7 transition-all duration-300 opacity-10 right-7 text-[35px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/></a>
        <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} font-inter font-medium text-[30px] lg:text-[60px] uppercase text-center`}>All Projects</h1>

        <div className={`w-[100%] lg:w-[100%] grid grid-rows-6 lg:grid-cols-2 lg:grid-rows-3 gap-5 p-[30px] rounded-[30px] row-span-1 col-span-1`}>
            <Link to="" className={`p-[30px] rounded-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} group relative`}>
                <img src={sportopiaproject} className={`w-full h-[250px] lg:h-[300px] mb-4 rounded-[20px]`} alt="Sportopia landing page" />
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[25px] font-inter font-medium uppercase mb-4`}>Sportopia</h1>
                <p className={`text-[14px] md:text-[16px] font-inter font-normal text-[#919090]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut accusantium totam tempora, aperiam ab fugiat.</p>

                <div className={`flex gap-4 items-center icon-bubble-wrap ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[20px] rounded-[50px] w-fit mt-4`}>
                <a href="https://abass-sportopia-project.netlify.app/" target='blank' onClick={handleIconClick}><BiLogoGithub className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/></a>
                <a href="https://abass-sportopia-project.netlify.app/" target='blank'><TbWorldShare className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/></a>
                </div>
                <BiArrowBack className={`absolute bottom-7 transition-all duration-300 opacity-10 right-7 text-[35px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
            </Link>
            
            <Link to="" className={`p-[30px] rounded-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} group relative`}>
                <img src={sportopiaproject} className={`w-full h-[250px] lg:h-[300px] mb-4 rounded-[20px]`} alt="Sportopia landing page" />
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[25px] font-inter font-medium uppercase mb-4`}>Sportopia</h1>
                <p className={`text-[14px] md:text-[16px] font-inter font-normal text-[#919090]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut accusantium totam tempora, aperiam ab fugiat.</p>

                <div className={`flex gap-4 items-center icon-bubble-wrap ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[20px] rounded-[50px] w-fit mt-4`}>
                <Link to="https://abass-sportopia-project.netlify.app/"><BiLogoGithub className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/></Link>
                <a href=""><TbWorldShare className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/></a>
                </div>
                <BiArrowBack className={`absolute bottom-7 transition-all duration-300 opacity-10 right-7 text-[35px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
            </Link>
            
            <Link to="" className={`p-[30px] rounded-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} group relative`}>
                <img src={sportopiaproject} className={`w-full h-[250px] lg:h-[300px] mb-4 rounded-[20px]`} alt="Sportopia landing page" />
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[25px] font-inter font-medium uppercase mb-4`}>Sportopia</h1>
                <p className={`text-[14px] md:text-[16px] font-inter font-normal text-[#919090]`}>Lorem ipsum dolor sit, amet consectetur you're adipisicing elit. Aut accusantium totam tempora, aperiam ab fugiat.</p>

                <div className={`flex gap-4 items-center icon-bubble-wrap ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[20px] rounded-[50px] w-fit mt-4`}>
                <a href=""><BiLogoGithub className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/></a>
                <a href=""><TbWorldShare className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/></a>
                </div>
                <BiArrowBack className={`absolute bottom-7 transition-all duration-300 opacity-10 right-7 text-[35px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
            </Link>
            
            <Link to="" className={`p-[30px] rounded-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} group relative`}>
                <img src={sportopiaproject} className={`w-full h-[250px] lg:h-[300px] mb-4 rounded-[20px]`} alt="Sportopia landing page" />
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[25px] font-inter font-medium uppercase mb-4`}>Sportopia</h1>
                <p className={`text-[14px] md:text-[16px] font-inter font-normal text-[#919090]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut accusantium totam tempora, aperiam ab fugiat.</p>

                <div className={`flex gap-4 items-center icon-bubble-wrap ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[20px] rounded-[50px] w-fit mt-4`}>
                <a href=""><BiLogoGithub className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/></a>
                <a href=""><TbWorldShare className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/></a>
                </div>
                <BiArrowBack className={`absolute bottom-7 transition-all duration-300 opacity-10 right-7 text-[35px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
            </Link>
            
            <Link to="" className={`p-[30px] rounded-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} group relative`}>
                <img src={sportopiaproject} className={`w-full h-[250px] lg:h-[300px] mb-4 rounded-[20px]`} alt="Sportopia landing page" />
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[25px] font-inter font-medium uppercase mb-4`}>Sportopia</h1>
                <p className={`text-[14px] md:text-[16px] font-inter font-normal text-[#919090]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut accusantium totam tempora, aperiam ab fugiat.</p>

                <div className={`flex gap-4 items-center icon-bubble-wrap ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[20px] rounded-[50px] w-fit mt-4`}>
                <a href=""><BiLogoGithub className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/></a>
                <a href=""><TbWorldShare className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/></a>
                </div>
                <BiArrowBack className={`absolute bottom-7 transition-all duration-300 opacity-10 right-7 text-[35px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
            </Link>
            
            <Link to="" className={`p-[30px] rounded-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} group relative`}>
                <img src={sportopiaproject} className={`w-full h-[250px] lg:h-[300px] mb-4 rounded-[20px]`} alt="Sportopia landing page" />
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[25px] font-inter font-medium uppercase mb-4`}>Sportopia</h1>
                <p className={`text-[14px] md:text-[16px] font-inter font-normal text-[#919090]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut accusantium totam tempora, aperiam ab fugiat.</p>

                <div className={`flex gap-4 items-center icon-bubble-wrap ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[20px] rounded-[50px] w-fit mt-4`}>
                <a href=""><BiLogoGithub className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/></a>
                <a href=""><TbWorldShare className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300`}/></a>
                </div>
                <BiArrowBack className={`absolute bottom-7 transition-all duration-300 opacity-10 right-7 text-[35px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
            </Link>
            
        </div>
    </section>
  )
}

export default ProjectContent