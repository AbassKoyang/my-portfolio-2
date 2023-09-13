import React from 'react'
import { useTheme } from '../ThemeContext'
import { Retta, dream, dreemz, gobits, softwaretesting, sportopiaproject } from '../assets';
import { Link } from 'react-router-dom';
import { BiArrowBack, BiLogoFacebookCircle, BiLogoGithub, BiLogoReddit } from 'react-icons/bi';
import { TbWorldShare } from 'react-icons/tb';

const ProjectContent = () => {
    const {theme} = useTheme();

  return (
    <section className={`w-[100%] mt-[150px] lg:mt-[180px] `}>
        <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} font-inter font-medium text-[30px] lg:text-[60px] uppercase text-center`}>All Projects</h1>

        <div className={`w-[100%] grid grid-rows-6 lg:grid-cols-2 lg:grid-rows-3 gap-10 p-[0px] rounded-[30px] row-span-1 col-span-1`}>
            <div to="" className={`p-[30px] rounded-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} group relative`}>
                <img src={sportopiaproject} className={`w-full h-[200px] lg:h-[320px] mb-4 rounded-[20px]`} alt="Sportopia landing page" />
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[25px] font-inter font-medium uppercase mb-4`}>Sportopia</h1>
                <p className={`text-[14px] md:text-[16px] font-inter font-normal text-[#919090]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut accusantium totam tempora, aperiam ab fugiat.</p>

                <div className={`flex gap-4 items-center ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[10px] lg:p-[20px] rounded-[50px] w-fit mt-4`}>
                <a href="https://github.com/AbassKoyang/Sportopia-Project" target='_blank'><BiLogoGithub className={` rounded-[50%] text-[40px] lg:text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'} transition-all duration-300  p-[5px] lg:p-[12px]`}/></a>
                <a href="https://abass-sportopia-project.netlify.app/" target='blank'><TbWorldShare className={` rounded-[50%] text-[40px] lg:text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[5px] lg:p-[12px] transition-all duration-300`}/></a>
                </div>
                <Link to="/sportopia" className={`absolute bottom-7 right-7 flex items-center gap-2 lg:gap-3`}>
                <p className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} text-[14px] lg:text-[18px]  font-inter transition-all duration-300 opacity-100 lg:opacity-10 group-hover:opacity-100`}>View Case Study</p>
                <BiArrowBack className={`transition-all duration-300 opacity-100 lg:opacity-10 text-[25px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
                </Link>
            </div>    
            <div to="" className={`p-[30px] rounded-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} group relative`}>
                <img src={Retta} className={`w-full h-[200px] lg:h-[320px] mb-4 rounded-[20px]`} alt="Sportopia landing page" />
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[25px] font-inter font-medium uppercase mb-4`}>Retta's</h1>
                <p className={`text-[14px] md:text-[16px] font-inter font-normal text-[#919090]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut accusantium totam tempora, aperiam ab fugiat.</p>

                <div className={`flex gap-4 items-center ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[10px] lg:p-[20px] rounded-[50px] w-fit mt-4`}>
                <a href="https://github.com/AbassKoyang/Retta-Project" target='_blank'><BiLogoGithub className={` rounded-[50%] text-[40px] lg:text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'} transition-all duration-300  p-[5px] lg:p-[12px]`}/></a>
                <a href="https://rettascollection.netlify.app/" target='blank'><TbWorldShare className={` rounded-[50%] text-[40px] lg:text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[5px] lg:p-[12px] transition-all duration-300`}/></a>
                </div>
                <Link to="" className={`absolute bottom-7 right-7 flex items-center gap-2 lg:gap-3`}>
                <p className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} text-[14px] lg:text-[18px]  font-inter transition-all duration-300 opacity-100 lg:opacity-10 group-hover:opacity-100`}>View Case Study</p>
                <BiArrowBack className={`transition-all duration-300 opacity-100 lg:opacity-10 text-[25px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
                </Link>
            </div>    
            <div to="" className={`p-[30px] rounded-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} group relative`}>
                <img src={gobits} className={`w-full h-[200px] lg:h-[320px] mb-4 rounded-[20px]`} alt="Sportopia landing page" />
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[25px] font-inter font-medium uppercase mb-4`}>Gobits</h1>
                <p className={`text-[14px] md:text-[16px] font-inter font-normal text-[#919090]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut accusantium totam tempora, aperiam ab fugiat.</p>

                <div className={`flex gap-4 items-center ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[10px] lg:p-[20px] rounded-[50px] w-fit mt-4`}>
                <a href="https://github.com/AbassKoyang/gobits" target='_blank'><BiLogoGithub className={` rounded-[50%] text-[40px] lg:text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'} transition-all duration-300  p-[5px] lg:p-[12px]`}/></a>
                <a href="https://gobits-academy.netlify.app/" target='blank'><TbWorldShare className={` rounded-[50%] text-[40px] lg:text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[5px] lg:p-[12px] transition-all duration-300`}/></a>
                </div>
                <Link to="" className={`absolute bottom-7 right-7 flex items-center gap-2 lg:gap-3`}>
                <p className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} text-[14px] lg:text-[18px]  font-inter transition-all duration-300 opacity-100 lg:opacity-10 group-hover:opacity-100`}>View Case Study</p>
                <BiArrowBack className={`transition-all duration-300 opacity-100 lg:opacity-10 text-[25px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
                </Link>
            </div>    
            <div to="" className={`p-[30px] rounded-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} group relative`}>
                <img src={dreemz} className={`w-full h-[200px] lg:h-[320px] mb-4 rounded-[20px]`} alt="Sportopia landing page" />
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[25px] font-inter font-medium uppercase mb-4`}>Dreemz</h1>
                <p className={`text-[14px] md:text-[16px] font-inter font-normal text-[#919090]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut accusantium totam tempora, aperiam ab fugiat.</p>

                <div className={`flex gap-4 items-center ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[10px] lg:p-[20px] rounded-[50px] w-fit mt-4`}>
                <a href="https://github.com/AbassKoyang/DREEMZ" target='_blank'><BiLogoGithub className={` rounded-[50%] text-[40px] lg:text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'} transition-all duration-300  p-[5px] lg:p-[12px]`}/></a>
                <a href="https://abass-www-dreemz-com.netlify.app/" target='blank'><TbWorldShare className={` rounded-[50%] text-[40px] lg:text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[5px] lg:p-[12px] transition-all duration-300`}/></a>
                </div>
                <Link to="" className={`absolute bottom-7 right-7 flex items-center gap-2 lg:gap-3`}>
                <p className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} text-[14px] lg:text-[18px]  font-inter transition-all duration-300 opacity-100 lg:opacity-10 group-hover:opacity-100`}>View Case Study</p>
                <BiArrowBack className={`transition-all duration-300 opacity-100 lg:opacity-10 text-[25px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
                </Link>
            </div>    
            <div to="" className={`p-[30px] rounded-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} group relative`}>
                <img src={softwaretesting} className={`w-full h-[200px] lg:h-[320px] mb-4 rounded-[20px]`} alt="Sportopia landing page" />
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[25px] font-inter font-medium uppercase mb-4`}>Software Testing</h1>
                <p className={`text-[14px] md:text-[16px] font-inter font-normal text-[#919090]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut accusantium totam tempora, aperiam ab fugiat.</p>

                <div className={`flex gap-4 items-center ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[10px] lg:p-[20px] rounded-[50px] w-fit mt-4`}>
                <a href="https://github.com/AbassKoyang/Sportopia-Project" target='_blank'><BiLogoGithub className={` rounded-[50%] text-[40px] lg:text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'} transition-all duration-300  p-[5px] lg:p-[12px]`}/></a>
                <a href="https://abass-sportopia-project.netlify.app/" target='blank'><TbWorldShare className={` rounded-[50%] text-[40px] lg:text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[5px] lg:p-[12px] transition-all duration-300`}/></a>
                </div>
                <Link to="" className={`absolute bottom-7 right-7 flex items-center gap-2 lg:gap-3`}>
                <p className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} text-[14px] lg:text-[18px]  font-inter transition-all duration-300 opacity-100 lg:opacity-10 group-hover:opacity-100`}>View Case Study</p>
                <BiArrowBack className={`transition-all duration-300 opacity-100 lg:opacity-10 text-[25px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
                </Link>
            </div>    
            <div to="" className={`p-[30px] rounded-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} group relative`}>
                <img src={dream} className={`w-full h-[200px] lg:h-[320px] mb-4 rounded-[20px]`} alt="Sportopia landing page" />
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[20px] md:text-[25px] font-inter font-medium uppercase mb-4`}>Dream</h1>
                <p className={`text-[14px] md:text-[16px] font-inter font-normal text-[#919090]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut accusantium totam tempora, aperiam ab fugiat.</p>

                <div className={`flex gap-4 items-center ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[10px] lg:p-[20px] rounded-[50px] w-fit mt-4`}>
                <a href="https://" target='_blank'><BiLogoGithub className={` rounded-[50%] text-[40px] lg:text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'} transition-all duration-300  p-[5px] lg:p-[12px]`}/></a>
                <a href="https://abass-dream-project.netlify.app/" target='blank'><TbWorldShare className={` rounded-[50%] text-[40px] lg:text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[5px] lg:p-[12px] transition-all duration-300`}/></a>
                </div>
                <Link to="" className={`absolute bottom-7 right-7 flex items-center gap-2 lg:gap-3`}>
                <p className={`${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} text-[14px] lg:text-[18px]  font-inter transition-all duration-300 opacity-100 lg:opacity-10 group-hover:opacity-100`}>View Case Study</p>
                <BiArrowBack className={`transition-all duration-300 opacity-100 lg:opacity-10 text-[25px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
                </Link>
            </div>    
        </div>
    </section>
  )
}

export default ProjectContent