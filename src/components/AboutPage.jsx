import React from 'react'
import Navbar from './Navbar';
import { useTheme } from '../ThemeContext';
import Containerone from './Containerone';
import Footer from './Footer';
import AboutContent from './AboutContent';
const AboutPage = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <section className={`${theme === 'light' ? 'bg-slate-100' : 'bg-black'} w-[100vw] box-border overflow-x-hidden flex flex-col items-center`}>
    <Navbar/>
    <AboutContent/>
    <Footer/>
  </section>
  )
}

export default AboutPage