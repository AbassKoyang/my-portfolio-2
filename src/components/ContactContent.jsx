import React from 'react'
import { useTheme } from '../ThemeContext'
import { BiEnvelope, BiLocationPlus, BiLogoInstagram, BiPhone } from 'react-icons/bi';
import { FaEnvelope, FaEnvelopeOpen, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { starabsolute } from '../assets';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import {TfiEmail} from "react-icons/tfi"

const ContactContent = () => {
    const {theme} = useTheme();
  return (
    <section className={`w-[100%] lg:w-[100%]  max-w-[1230px] mt-[150px] lg:mt-[180px] flex flex-col lg:flex-row items-start  gap-[5%]`}>
        <div className={`w-full lg:w-[30%] `}>
            <h1 className={`uppercase font-inter font-medium text-[20px] ${theme === 'light' ? 'text-black' : 'text-white'} mb-4`}>Contact info</h1>
            <div className={`w-full flex flex-col gap-[70px]`}>
                <div className={`w-[80%] flex gap-[50px]`}>
                    <TfiEmail className={`text-[50px]  ${theme === 'light' ? 'text-[#5b78f6]' : 'text-white'}`}/> 
                    <div className={``}>
                    <h4 className={`font-inter font-normal text-[17px] uppercase text-[#bcbcbc]`}>Mail us</h4>
                    <p  className={`${theme === 'light' ? 'text-[#919090]' : 'text-[#919090]'}`}>abasskoyang12345@gmail.com</p>
                    <p  className={`${theme === 'light' ? 'text-[#919090]' : 'text-[#919090]'}`}>abasskoyang05@gmail.com</p>
                    </div>
                </div>
                <div className={`w-[80%] flex gap-[50px]`}>
                    <BiLocationPlus className={`text-[70px] p-[12px] rounded-xl bg-white  ${theme === 'light' ? 'text-[#5b78f6]' : 'text-[#5b78f6]'}`}/>
                    <div className={``}>
                    <h4 className={`font-inter font-normal text-[17px] uppercase text-[#bcbcbc]`}>Location</h4>
                    <p className={`${theme === 'light' ? 'text-[#919090]' : 'text-[#919090]'}`}> 3, Ojupon Baale St,</p>
                    <p className={`${theme === 'light' ? 'text-[#919090]' : 'text-[#919090]'}`} >Ajah, Lagos, Nigeria</p>
                    </div>
                </div>
                <div className={`w-[80%] flex gap-[50px]`}>
                    <FaPhoneAlt className={`text-[70px] p-[12px] rounded-xl bg-white  ${theme === 'light' ? 'text-[#5b78f6]' : 'text-[#5b78f6]'}`}/>
                    <div className={``}>
                    <h4 className={`font-inter font-normal text-[17px] uppercase text-[#bcbcbc]`}>Phone</h4>
                    <p className={`${theme === 'light' ? 'text-[#919090]' : 'text-[#919090]'}`} >+234 816 278 2567</p>
                    <p className={`${theme === 'light' ? 'text-[#919090]' : 'text-[#919090]'}`} >+234 915 201 8480</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`w-full lg:w-[65%] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} relative p-[30px] rounded-[30px]`}>
        <img src={starabsolute} alt="Star" className={`absolute top-5 right-10 w-[15px] h-[30px] lg:w-[30px] lg:h-[60px]`}/>
        <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-[35px] lg:text-[45px] font-normal leading-[50px] font-inter`}>Let's work<span className="text-[#5b78f6]"> together.</span></h1>

        <form className={`w-full flex flex-col gap-[20px] mt-[50px]`}>
            <input type="text" placeholder='Name *' className={`${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} rounded-xl border-none w-full h-[60px] px-[30px]`}/>
            <input type="text" placeholder='Email *' className={`${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} rounded-xl border-none w-full h-[60px] px-[30px]`}/>
            <input type="text" placeholder='Your Subject *' className={`${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} rounded-xl border-none w-full h-[60px] px-[30px]`}/>
            <textarea placeholder='Your Message *' className={`${theme === 'light' ? 'bg-slate-100' : 'bg-zinc-900'} rounded-xl border-none w-full px-[30px] py-[20px]`} name="messagebox" id="messageBox" cols="30" rows="6"></textarea>
            <button className={`${theme === 'light' ? 'bg-black hover:bg-[#5b78f6]' : 'bg-[#5b78f6] hover:bg-black'} ${theme === 'light' ? 'text-white' : 'text-black'} rounded-xl border-none w-full h-[60px] px-[30px] text-[16px] font-inter font-medium transition-all duration-300`}>Contact Me</button>
        </form>
        </div>
    </section>
  )
}

export default ContactContent