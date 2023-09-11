import React from 'react'
import { useState } from 'react';
import { useTheme } from '../ThemeContext'
import Navlinks from '../object';


const Footer = () => {
const { theme, toggleTheme } = useTheme();
const [active, setActive] = useState('Home');

  return (
    <div className={`flex flex-col items-center gap-5 my-[2rem] lg:my-[5rem]`}>
         <a href="#" className={`font-medium font-inter text-[30px] ${theme === 'light' ? 'text-black' : 'text-white'}`}>Grid<span className={`text-[#5b78f6]`}>X</span></a>
         <ul className='hidden lg:py-2 lg:px-2 lg:flex lg:gap-7 '>
            {
            Navlinks.map((nav)=>{
                return(
                <li key={nav.id} className={`text-[16px] ${theme === 'light' ? 'text-black' : 'text-white'} ${active === nav.title ? 'text-blue-500' : 'text-[#676767]'} font-inter`} onClick={()=>setActive(nav.title)}>
                    <a href="#" className='hover:text-[#5b78f6] transition-all'>{nav.title}</a>
                </li>
                )
            })
            }
        </ul>
        <p className={`text-[14px] ${theme === 'light' ? 'text-black' : 'text-white'}`}>All Rights Reserved by <span className={`text-[#5b78f6]`}>Abass Koyang</span></p>
    </div>
  )
}

export default Footer