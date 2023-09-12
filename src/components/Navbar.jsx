// Header.js
import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { BiMenu, BiMoon , BiSun, BiX} from "react-icons/bi";
import Navlinks from '../object';
import { close, menu } from '../assets';
import App from '../App';
import { Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = () =>{
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);


  return (
<>
<header className={`${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} z-50 w-[95%]  md:w-[90%] max-w-[1230px] py-3 px-3  rounded-[50px]  flex justify-between items-center relative top-3 right-[50%] translate-x-[50%] header-main transition-all duration-300 ${
        isScrolled ? 'bg-opacity-70 backdrop-blur-md' : 'bg-opacity-100 backdrop-blur-none'
      }`}>
  <div className='w-[70%] flex justify-between items-center'>
  <a href="#" className={`font-normal font-inter text-[30px] ${theme === 'light' ? 'text-black' : 'text-white'}`}>AK<span className={`text-[#5b78f6]`}>A</span></a>
  <ul className='hidden lg:py-2 lg:px-2 lg:flex lg:gap-10 '>
    {
      Navlinks.map((nav)=>{
        return(
          <li key={nav.id} className={`text-[20px] font-normal ${theme === 'light' ? 'text-black' : 'text-white'} ${active === nav.title ? 'text-blue-500' : 'text-[#676767]'} font-inter hover:text-[#5b78f6] transition-all cursor-pointer`} onClick={()=>setActive(nav.title)}>
          <Link to={nav.url} className='cursor-pointer'>{nav.title}</Link>
        </li>
        )
      })
    }
  </ul>
  </div>
<div className='flex items-center gap-2 h-full'>
<button
          className={`py-1 px-1 md:px-2 md:py-2 rounded-[50%] text-white transition-all duration-100 ${theme === 'light' ? 'bg-slate-200' : 'bg-[#2d2d2d]'}`}
          onClick={toggleTheme}
        >
         
         {theme === 'light' ? <BiMoon className='sm:text-[25px] text-[30px] transition-all'/> : <BiSun className='text-[30px] transition-all'/>}
  </button>

  <i onClick={() => setToggle(!toggle)} className='lg:hidden'>{toggle ? <BiX className={`text-[35px] transition-all ${theme === 'light' ? 'text-black' : 'text-white'} cursor-pointer`}/> : <BiMenu className={`text-[35px] transition-all ${theme === 'light' ? 'text-black' : 'text-white'} cursor-pointer`}/>}</i> 
</div>
<div className={`${!toggle? 'hidden' : 'flex'} lg:hidden md:py-5 p-3 rounded-md flex-col items-center justify-center gap-7 w-full absolute bottom-[-250px] md:bottom-[-260px] left-0 bg-slate-300 sidebar`}>
  <ul className='flex flex-col items-center justify-center gap-4 cursor-pointer'>
    {
      Navlinks.map((nav)=>{
        return(
          <li key={nav.id} className={`text-[20px] font-medium ${theme === 'light' ? 'text-black' : 'text-white'} ${active === nav.title ? 'text-blue-500' : 'text-[#676767]'} font-inter hover:text-[#5b78f6] transition-all cursor-pointer`} onClick={()=>setActive(nav.title)}>
            <Link to={nav.url} className='cursor-pointer'>{nav.title}</Link>
          </li>
        )
      })
    }
  </ul>
</div>
</header>

</>
  );
}

export default Navbar;


