import React from 'react'
import { useTheme } from '../ThemeContext'
import { Javascript, htmlLogo, me } from '../assets';
import { BiLogoInstagram, BiLogoTwitter, BiLogoFacebookCircle, BiLogoReddit, BiArrowBack, BiCodeAlt, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoTailwindCss, BiLogoBootstrap, BiLogoNodejs, BiLogoMongodb, BiLogoFigma, BiLogoBlogger, } from "react-icons/bi";
import {SiAdobeillustrator, SiAdobepremierepro} from 'react-icons/si'
import { Link } from 'react-router-dom';
const AboutContent = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <>
        <body className={`w-[93%] lg:w-[100vw] lg:pl-[5%] lg:pr-[5%]  max-w-[1440px] mt-[150px] flex flex-col lg:flex-row items-start gap-[5%] overflow-y-auto]`}>
            <div className={`w-[100%] lg:w-[35%] p-[30px] rounded-[35px] ${theme === 'light' ? 'bg-white' : 'bg-[#212121]'} flex flex-col items-center sticky top-0 z-10`}>
                <div className={`w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] bg-[#5b78f6] rounded-[35px] overflow-hidden`}>
                <img src={me} alt=""  className={`w-full h-full`}/>
                </div>
                <h1 className={`font-inter font-medium text-[35px] mt-5 mb-0 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Abass Koyang</h1>
                <p className={`font-inter font-thin text-[20px] text-[#BCBCBC]`}>@abasskoyang</p>
                <div className={`flex gap-4 items-center justify-center icon-bubble-wrap ${theme === 'light' ? 'bg-slate-100' : ' bg-zinc-900'} p-[20px] rounded-[30px] my-7`}>
                    <BiLogoTwitter className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[10px] transition-all duration-300 cursor-pointer`}/>
                    <BiLogoInstagram className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[10px] transition-all duration-300 cursor-pointer`}/>
                    <BiLogoReddit className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300 cursor-pointer`}/>
                    <BiLogoFacebookCircle className={` rounded-[50%] text-[60px] icon-buble ${theme === 'light' ? 'bg-white' : 'bg-zinc-800'} ${theme === 'light' ? 'text-[#5b78f6] hover:text-black' : 'text-white hover:text-black hover:bg-white'}  p-[12px] transition-all duration-300 cursor-pointer`}/>
                </div>
                <Link className={`text-white text-[18px] font-normal py-2 w-full rounded-2xl ${theme === 'light' ? 'bg-black hover:bg-[#5b78f6]' : 'bg-[#5b78f6] hover:bg-zinc-900'} flex items-center justify-center transition-all duration-300`}>Contact Me</Link>
            </div>
            <div className={`w-[100%] lg:w-[70%] mt-[100px] lg:mt-0`}>
                <div className={`pb-[40px] pl-5 pr-8 w-full border-l-[#212121] border-b-[#212121] border-l-[1px] border-b-[1px] relative`}>
                <h1 className={`font-inter font-normal text-[23px] mb-5 ${theme === 'light' ? 'text-black' : 'text-white'} uppercase`}>About Me</h1>
                <p className={`font-inter font-normal text-[#919090] text-[15px]`}>I am Abass Koyang Ahmad, a 17-year-old aspiring web developer hailing from the vibrant northern region of Nigeria. Driven by my unwavering passion for technology, I am on a relentless journey to master the art of web development. With a thirst for innovation and a commitment to continuous learning, I am dedicated to creating cutting-edge digital experiences that push the boundaries of what's possible. Join me on this exciting adventure into the world of technology, where every line of code tells a story of determination and growth.</p>
                
                <span className={`p-[0.4rem] rounded-[50%] bg-[#212121]  ${theme === 'light' ? 'border-[#5b78f6]' : 'border-[#5b78f6]'} absolute top-[0rem] left-[-0.45rem]`}></span>
                </div>
                <div className={`pb-[40px] pt-[40px] pl-5 pr-8 w-full border-l-[#212121] border-b-[#212121] border-l-[1px] border-b-[1px] relative`}>
                <h1 className={`font-inter font-normal text-[23px] mb-5 ${theme === 'light' ? 'text-black' : 'text-white'} uppercase`}>Experience</h1>
    
                <p className={`font-inter font-normal text-[#c7c7c7] text-[16px] mb-1`}>2021 - 2022</p>
    
                <h4 className="font-inter font-medium text-[#5b78f6] text-[17px] mb-1 uppercase">Web Designer & Developer</h4>
    
                <p className={`font-inter font-normal text-[#c7c7c7] text-[15px] mb-1`}>Bluebase Designs</p>
    
                <p className={`font-inter font-normal text-[#919090] text-[15px]`}>In my role as a Web Developer and Web Designer at BlueBase Design from 2022 to 2033, I was entrusted with the creative fusion of aesthetics and functionality, crafting immersive digital experiences that captivated users. I leveraged cutting-edge technologies and responsive design principles to ensure our websites not only met but exceeded industry standards. Throughout this journey, I continuously pushed the boundaries of innovation, leaving a trail of visually stunning and user-centric websites in my wake.
                </p>
    
    
    
                <p className={`font-inter font-normal text-[#c7c7c7] text-[16px] mt-14 mb-1`}>2022 - 2023</p>
    
                <h4 className="font-inter font-medium text-[#5b78f6] text-[17px] mb-1 uppercase">Front-End Developer</h4>
    
                <p className={`font-inter font-normal text-[#c7c7c7] text-[15px] mb-1`}>Larsen & Toubro</p>
    
                <p className={`font-inter font-normal text-[#919090] text-[15px]`}>In my role as a Web Developer and Web Designer at BlueBase Design from 2022 to 2033, I was entrusted with the creative fusion of aesthetics and functionality, crafting immersive digital experiences that captivated users. I leveraged cutting-edge technologies and responsive design principles to ensure our websites not only met but exceeded industry standards. Throughout this journey, I continuously pushed the boundaries of innovation, leaving a trail of visually stunning and user-centric websites in my wake.
                </p>
    
                <span className={`p-[0.4rem] rounded-[50%] bg-[#212121]  ${theme === 'light' ? 'border-[#5b78f6]' : 'border-[#5b78f6]'} absolute top-[-0.2rem] left-[-0.45rem]`}></span>
                </div>
    
    
    
    
                <div className={`pb-[40px] pt-[40px] pl-5 pr-8 w-full border-l-[#212121] border-b-[#212121] border-l-[1px] border-b-[1px] relative`}>
                <h1 className={`font-inter font-normal text-[23px] mb-5 ${theme === 'light' ? 'text-black' : 'text-white'} uppercase`}>Experience</h1>
    
                <p className={`font-inter font-normal text-[#c7c7c7] text-[16px] mb-1`}>2016 - 2022</p>
    
                <h4 className="font-inter font-medium text-[#5b78f6] text-[17px] mb-1 uppercase">High School Diploma</h4>
    
                <p className={`font-inter font-normal text-[#c7c7c7] text-[15px] mb-1`}>OCJSSS/OCSSS</p>
    
                <p className={`font-inter font-normal text-[#919090] text-[15px]`}>My high school journey at Olomu Community Junior and Senior Secondary School in Ajah, Lagos, Nigeria, was a remarkable chapter of academic excellence. Throughout my years there, I consistently excelled, earning the coveted position of the top student in my class. Additionally, I had the privilege of serving as the Laboratory Prefect, further deepening my passion for science and education
                </p>
    
    
    
                <p className={`font-inter font-normal text-[#c7c7c7] text-[16px] mt-14 mb-1`}>2022 - 2023</p>
    
                <h4 className="font-inter font-medium text-[#5b78f6] text-[17px] mb-1 uppercase">Computer Sience Diploma</h4>
    
                <p className={`font-inter font-normal text-[#c7c7c7] text-[15px] mb-1`}>Ekobits ICT Academy/NABTEB</p>
    
                <p className={`font-inter font-normal text-[#919090] text-[15px]`}>My journey through Ekobits ICT Academy was transformative. I delved into a world of web development, blogging, digital marketing, and project management, honing my technical skills while nurturing essential soft skills. Along the way, I had the privilege of connecting with brilliant tech enthusiasts, expanding my network, and laying the foundation for a promising career in the ever-evolving digital landscape.
                </p>
    
                <span className={`p-[0.4rem] rounded-[50%] bg-[#212121]  ${theme === 'light' ? 'border-[#5b78f6]' : 'border-[#5b78f6]'} absolute top-[-0.2rem] left-[-0.45rem]`}></span>
                </div>
    
    
    
    
                <div className={`pb-[40px] pt-[40px] pl-5 pr-8 w-full border-l-[#212121] border-b-[#212121] border-l-[1px] border-b-[1px] relative`}>
                    <h1 className={`font-inter font-normal text-[23px] mb-5 ${theme === 'light' ? 'text-black' : 'text-white'} uppercase`}>Skills</h1>
    
                    <div className={`grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none gap-5 lg:gap-0 my-5`}>
                        <div className={`flex items-center gap-7 lg:gap-4`}>
                            <BiLogoJavascript className={`text-[#5b78f6] text-[50px]`}/>
                            <div className={``}>
                            <h4 className={`font-inter font-medium ${theme === 'light' ? 'text-black' : 'text-white'} text-[17px] mb-1 uppercase`}>JavaScript</h4>
    
                            <p className={`font-inter font-normal text-[#919090] text-[15px]`}>
                                Excellent understanding of JavaScript
                            </p>
                
                            </div>
                        </div>
                        <div className={`flex items-center gap-7 lg:gap-4`}>
                            <BiLogoHtml5 className={`text-[#5b78f6] text-[55px]`}/>
                            <div className={``}>
                            <h4 className={`font-inter font-medium ${theme === 'light' ? 'text-black' : 'text-white'} text-[17px] mb-1 uppercase`}>HTML</h4>
    
                            <p className={`font-inter font-normal text-[#919090] text-[15px]`}>
                                A wide understanding of HTMl 5.
                            </p>
                
                            </div>
                        </div>
                    </div>
                    <div className={`grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none gap-5 lg:gap-0 my-7`}>
                        <div className={`flex items-center gap-7 lg:gap-4`}>
                            <BiLogoCss3 className={`text-[#5b78f6] text-[60px]`}/>
                            <div className={``}>
                            <h4 className={`font-inter font-medium ${theme === 'light' ? 'text-black' : 'text-white'} text-[17px] mb-1 uppercase`}>CSS</h4>
    
                            <p className={`font-inter font-normal text-[#919090] text-[15px]`}>
                                Mastered  the use of CSS to beautify websites
                            </p>
                
                            </div>
                        </div>
                        <div className={`flex items-center gap-7 lg:gap-4`}>
                            <BiLogoReact className={`text-[#5b78f6] text-[100px]`}/>
                            <div className={``}>
                            <h4 className={`font-inter font-medium ${theme === 'light' ? 'text-black' : 'text-white'} text-[17px] mb-1 uppercase`}>ReactJs</h4>
    
                            <p className={`font-inter font-normal text-[#919090] text-[15px]`}>
                                A great understanding of how to use the JS libary to create component-based UI.
                            </p>
                
                            </div>
                        </div>
                    </div>
                    <div className={`grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none gap-5 lg:gap-0 my-7`}>
                        <div className={`flex items-center gap-7 lg:gap-4`}>
                            <BiLogoTailwindCss className={`text-[#5b78f6] text-[60px]`}/>
                            <div className={``}>
                            <h4 className={`font-inter font-medium ${theme === 'light' ? 'text-black' : 'text-white'} text-[17px] mb-1 uppercase`}>Tailwind CSS</h4>
    
                            <p className={`font-inter font-normal text-[#919090] text-[15px]`}>
                                Mastered the use of Tailwindcss to style elements.
                            </p>
                
                            </div>
                        </div>
                        <div className={`flex items-center gap-7 lg:gap-4`}>
                            <BiLogoBootstrap className={`text-[#5b78f6] text-[55px]`}/>
                            <div className={``}>
                            <h4 className={`font-inter font-medium ${theme === 'light' ? 'text-black' : 'text-white'} text-[17px] mb-1 uppercase`}>Bootstrap</h4>
    
                            <p className={`font-inter font-normal text-[#919090] text-[15px]`}>
                            Mastered the use of Bootstrap to style elements.
                            </p>
                
                            </div>
                        </div>
                    </div>
                    <div className={`grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none gap-5 lg:gap-0 my-7`}>
                        <div className={`flex items-center gap-7 lg:gap-4`}>
                            <BiLogoNodejs className={`text-[#5b78f6] text-[70px]`}/>
                            <div className={``}>
                            <h4 className={`font-inter font-medium ${theme === 'light' ? 'text-black' : 'text-white'} text-[17px] mb-1 uppercase`}>Node Js</h4>
    
                            <p className={`font-inter font-normal text-[#919090] text-[15px]`}>
                                Excellent knowledge on how to biul servers using ExpressJS and NodeJS.
                            </p>
                
                            </div>
                        </div>
                        <div className={`flex items-center gap-7 lg:gap-4`}>
                            <BiLogoMongodb className={`text-[#5b78f6] text-[55px]`}/>
                            <div className={``}>
                            <h4 className={`font-inter font-medium ${theme === 'light' ? 'text-black' : 'text-white'} text-[17px] mb-1 uppercase`}>MongoDB</h4>
    
                            <p className={`font-inter font-normal text-[#919090] text-[15px]`}>
                                Knows how to use MongoDB to create databases.
                            </p>
                
                            </div>
                        </div>
                    </div>
                    <div className={`grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none gap-5 lg:gap-0 my-7`}>
                        <div className={`flex items-center gap-7 lg:gap-4`}>
                            <BiLogoFigma className={`text-[#5b78f6] text-[50px]`}/>
                            <div className={``}>
                            <h4 className={`font-inter font-medium ${theme === 'light' ? 'text-black' : 'text-white'} text-[17px] mb-1 uppercase`}>Figma</h4>
    
                            <p className={`font-inter font-normal text-[#919090] text-[15px]`}>
                                I create visually appealing UIs and seamless UX with Figma.
                            </p>
                
                            </div>
                        </div>
                        <div className={`flex items-center gap-7 lg:gap-4`}>
                            <SiAdobeillustrator className={`text-[#5b78f6] text-[50px]`}/>
                            <div className={``}>
                            <h4 className={`font-inter font-medium ${theme === 'light' ? 'text-black' : 'text-white'} text-[17px] mb-1 uppercase`}>Adobe Illustrator</h4>
    
                            <p className={`font-inter font-normal text-[#919090] text-[15px]`}>
                                I create captivating and compelling graphics with Adobe Illustrator.
                            </p>
                
                            </div>
                        </div>
                    </div>
                    <div className={`grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none gap-5 lg:gap-0 my-7`}>
                        <div className={`flex items-center gap-7 lg:gap-4`}>
                            <SiAdobepremierepro className={`text-[#5b78f6] text-[50px]`}/>
                            <div className={``}>
                            <h4 className={`font-inter font-medium ${theme === 'light' ? 'text-black' : 'text-white'} text-[17px] mb-1 uppercase`}>Premier Pro</h4>
    
                            <p className={`font-inter font-normal text-[#919090] text-[15px]`}>
                                I create captivating and compelling videos with Premier Pro.
                            </p>
                
                            </div>
    
                        </div>
                                            <div className={`flex items-center gap-7 lg:gap-4`}>
                            <BiLogoBlogger className={`text-[#5b78f6] text-[50px]`}/>
                            <div className={``}>
                            <h4 className={`font-inter font-medium ${theme === 'light' ? 'text-black' : 'text-white'} text-[17px] mb-1 uppercase`}>Blogger</h4>
    
                            <p className={`font-inter font-normal text-[#919090] text-[15px]`}>
                                I write interesting blog post with blogger.
                            </p>
                
                            </div>
                        </div>
                    </div>
                    <span className={`p-[0.4rem] rounded-[50%] bg-[#212121]  ${theme === 'light' ? 'border-[#5b78f6]' : 'border-[#5b78f6]'} absolute top-[-0.2rem] left-[-0.45rem]`}></span>
                    </div>
            </div>
        </body>
    </>
  )
}

export default AboutContent