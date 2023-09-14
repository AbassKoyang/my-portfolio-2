import React from 'react'
import { useTheme } from '../ThemeContext';
import { Abass, MacStudio, me } from '../assets';
import { TypeAnimation } from 'react-type-animation';
import { BiLogoInstagram, BiLogoTwitter, BiLogoFacebookCircle, BiLogoReddit, BiArrowBack, BiCodeAlt} from "react-icons/bi";
import { Link } from 'react-router-dom';

const Containerone = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <section className={`w-[93%] lg:w-[90%] max-w-[1230px] mt-[150px] grid gap-5 grid-rows-2 lg:grid-cols-2 lg:grid-rows-none`}>
        <div className={`${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} lg:p-[40px] p-[30px] flex flex-col md:flex-row items-center justify-between rounded-[25px] gap-8 xl:gap-5`}>
            <div className={`w-[250px] h-[250px] md:w-[50%] md:h-[100%] lg:w-[330px] lg:h-[230px] overflow-hidden rounded-tl-[30px] rounded-br-[30px] bg-[#5b78f6]`}>
            <img src={Abass} alt="" className='w-full h-full'/>
            </div>
            <div className="flex items-start md:justify-center flex-col">
                <small className={`font-medium font-poppins text-[#BCBCBC] uppercase`}>
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'A Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'A UI/UX Designer',
        1000,
        'A Graphics Designer',
        1000,
        'A Video Editor',
        1000,
        'A Blogger',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{fontSize: 'text-[14px] md:text-[18px] lg:text-[14px]', display: 'inline-block', color: '#5b78f6' }}
      repeat={Infinity}
    />
                </small>
                <p  className={`${theme === 'light' ? 'text-black' : 'text-white'} font-inter text-[33px] md:text-[40px] lg:text-[33px] font-medium leading-[40px]`}>Ahmad Koyang Abass.</p>
                <small className={`text-[15px] md:text-[17px] lg:text-[15px] font-normal font-inter mt-3 text-[#BCBCBC]`}>I am a passionate Web Developer based in Lagos, Nigeria.</small>
            </div>
        </div>



        
        <div className={`  flex flex-col  items-center justify-between rounded-[25px] gap-4 lg:gap-[5%]`}>
          <div className={`${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} w-full h-[10%] lg:h-[20%]  rounded-[30px]`}></div>
          
          <div className={`w-full h-[90%] lg:h-[75%] grid grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-5`}>
    
            <Link to="/about" className={`${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} rounded-[20px] group relative lg:p-[40px] p-[30px]`}>
              <p className='text-[16px] font-normal text-[#BCBCBC] mt-5 mb-0'>More About Me</p>
            <h4 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[25px] font-medium`}>Credentials</h4>
           <Link to="/about">
           <BiArrowBack className={`absolute bottom-5 transition-all duration-300 opacity-10 translate-y right-5 text-[30px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
           </Link>
            </Link>


            <Link to="/projects" className={`${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} rounded-[20px] group relative lg:p-[40px] p-[30px]`}>
            <div className={`w-[250px] h-[250px] md:w-[50%] md:h-[100%] lg:w-full lg:h-[80px] overflow-hidden  rounded-br-[30px] bg-[#5b78f6]`}>
            <img src={MacStudio} alt="" className='w-full h-full'/>
            </div>
              <p className='text-[16px] font-normal text-[#BCBCBC] mt-5 mb-0'>Showcase</p>
            <h4 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[25px] font-medium`}>Projects</h4>
          <Link to="/projects">
          <BiArrowBack className={`absolute bottom-5 transition-all duration-300 opacity-10 translate-y right-5 text-[30px] rotate-180 ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'} group-hover:opacity-100`}/>
          </Link>
          </Link>
          </div>
        </div>
    </section>
  )
}

export default Containerone