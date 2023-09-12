import React from 'react'
import { useTheme } from '../ThemeContext'
import Navbar from './Navbar';
import ServiceContent from './ServiceContent';
import Containertwo from './Containertwo';
import Footer from './Footer';

const ServicePage = () => {
    const {theme} = useTheme();
  return (
<section className={`${theme === 'light' ? 'bg-slate-100' : 'bg-black'} w-[100vw] box-border overflow-x-hidden flex flex-col items-center`}>

    <section className={`w-[93%] lg:w-[90%] max-w-[1230px] p-0`}>
        <Navbar/>
        <ServiceContent/>
        <Footer/>
    </section>

</section>
  )
}

export default ServicePage