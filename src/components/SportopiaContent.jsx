import React from 'react'
import { useTheme } from '../ThemeContext'
import { MacStudio, Sportopiamockup, sportopialandscape, sportopiaproject, starabsolute } from '../assets';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const SportopiaContent = () => {
    const {theme} = useTheme();
  return (
    <section className={`w-full mt-[150px] lg:mt-[180px]`}>
      <p className={`text-[14px] lg:text-[17px] uppercase font-medium font-inter text-[#919090]`}>
        Brand - Sportopia
      </p>
         <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} font-inter font-medium text-[30px] lg:text-[60px] uppercase`}>Sportopia</h1>
        <img src={Sportopiamockup} alt="Sportopia Landing Page" className={`w-full`} />
        <div className={`w-full my-[50px] grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none gap-10 lg:gap-[100px] p-[20px] lg:p-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} rounded-[30px] relative`}>
          <img src={starabsolute} alt="Star" className={`absolute top-[0] left-[50%] translate-x-[-50%] z-10`}/> 
          <div className={` p-[25px] lg:p-[30px] ${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} rounded-[30px] z-30`}>
          <h1 className={`text-[23px] ${theme === 'light' ? 'text-black' : 'text-white'} font-inter font-normal uppercase mb-3`}>Sportopia</h1>
          <p className={`text-[#919090]`}>
            In a world where sports enthusiasts unite, share, and celebrate their passion, there exists a digital arena that stands out as the ultimate destination for all things sports—Sportopia. This innovative online platform transcends boundaries and brings together individuals from every corner of the globe who share an unquenchable love for sports. Sportopia is not merely a website; it is a virtual haven where sports fans converge, engage, and experience the thrill of sports in ways like never before.
          </p>
          </div>
          <div className={`p-[25px] lg:p-[30px] ${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} rounded-[30px] z-30`}>
          <h1 className={`text-[23px] ${theme === 'light' ? 'text-black' : 'text-white'} font-inter font-normal uppercase mb-3`}>About</h1>
          <p className={`text-[#919090]`}>
          Sportopia embodies the very essence of sportsmanship and camaraderie. It is more than a website; it's a global community that thrives on inclusivity, engagement, and reliability. Whether you're a die-hard football fanatic, a basketball buff, a cricket connoisseur, or simply someone who appreciates the exhilaration of sports, Sportopia welcomes you with open arms.
          </p>
          </div>
        </div>


        <div className={`my-[50px] overflow-hidden rounded-[30px] lg:h-[450px]`}>
        <img src={sportopialandscape} alt="Sportopia Landing Page" className={`w-full`} />
        </div>


        <div className={`w-full my-[50px] grid grid-rows-4 lg:grid-rows-2 lg:grid-cols-2 gap-10 lg:gap-[30px] rounded-[30px]`}>
          <div className={`overflow-hidden rounded-[20px]`}>
            <img src={sportopiaproject} alt="" className={`w-full h-450px`}/>
          </div>
          <div className={`overflow-hidden rounded-[20px]`}>
            <img src={sportopiaproject} alt="" className={`w-full h-450px`}/>
          </div>
          <div className={`overflow-hidden rounded-[20px]`}>
            <img src={sportopiaproject} alt="" className={`w-full h-450px`}/>
          </div>
          <div className={`overflow-hidden rounded-[20px]`}>
            <img src={sportopiaproject} alt="" className={`w-full h-450px`}/>
          </div>
        </div>

        <div className={`w-full my-[50px] p-[30px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} gap-10 lg:gap-[8%] rounded-[30px] flex flex-col lg:flex-row`}>
          <div className={`w-full p-[30px] lg:px-[70px] flex gap-[30px] flex-col items-center justify-center rounded-[30px] lg:w-[25%] ${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} relative`}>
            <div className="lg:w-full text-center lg:text-left">
              <p className='text-[17px] font-inter font-normal text-[#919090]'>Year</p>
              <p className='text-[18px] font-inter font-medium text-[#5b78f6]'>2023</p>
            </div>
            <div className="lg:w-full text-center lg:text-left">
              <p className='text-[17px] font-inter font-normal text-[#919090]'>Client</p>
              <p className='text-[18px] font-inter font-medium text-[#5b78f6]'>Sportopia</p>
            </div>
            <div className="lg:w-full text-center lg:text-left">
              <p className='text-[17px] font-inter font-normal text-[#919090]'>Service</p>
              <p className='text-[18px] font-inter font-medium text-[#5b78f6]'>Web Dev</p>
            </div>
            <div className="lg:w-full text-center lg:text-left">
              <p className='text-[17px] font-inter font-normal text-[#919090]'>Project</p>
              <p className='text-[18px] font-inter font-medium text-[#5b78f6]'>Dynamic</p>
            </div>
            <img src={starabsolute} alt="Star" className={`absolute top-0 right-10 lg:right-20 z-10`}/> 
          </div>
          <div className={`w-full rounded-[30px] lg:w-[73%]`}>
            <h1 className={`text-[25px] ${theme === 'light' ? 'text-black' : 'text-white'} font-inter font-medium`}>Description</h1>
            <p className={`text-[#919090] lg:text-[18px] mt-4`}> In my role as a web developer, I undertook the exciting task of conceptualizing, designing, and developing Sportopia—a dynamic and immersive social platform dedicated exclusively to sports enthusiasts. Sportopia aimed to create a virtual arena where passionate sports fans could come together, share their fervor, connect with like-minded individuals, stay updated with the latest sports developments, engage in lively discussions, watch live matches, and partake in various sports-related activities. This comprehensive case study delves deeply into the intricacies of this project, the challenges confronted, the innovative solutions implemented, and the remarkable impact achieved, positioning Sportopia as an exemplary addition to my portfolio.</p>
          </div>
        </div>
        <div className="flex items-center justify-end w-full">
        <Link className={`py-3 px-5 rounded-xl flex items-center gap-2 ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} ${theme === 'light' ? 'text-black' : 'text-white'} hover:text-[#5b78f6] text-[20px] group transition-all duration-3`}>Next Project <BiArrowBack className={`rotate-180 ${theme === 'light' ? 'text-black' : 'text-white'}group:hover:text-[#5b78f6] transition-all duration-300`} /></Link>
        </div>
    </section>
  )
}

export default SportopiaContent