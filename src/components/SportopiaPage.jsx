import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import SportopiaContent from './SportopiaContent';
import { useTheme } from '../ThemeContext';

const SportopiaPage = () => {
    const {theme} = useTheme();
  return (
    <section className={`${theme === 'light' ? 'bg-slate-100' : 'bg-black'} w-[100vw] box-border overflow-x-hidden flex flex-col items-center`}>
        <section className={`w-[93%] lg:w-[90%] max-w-[1230px] p-0`}>
        <Navbar/>
        <SportopiaContent/>
        <Footer/>
        </section>
    </section>
  )
}

export default SportopiaPage