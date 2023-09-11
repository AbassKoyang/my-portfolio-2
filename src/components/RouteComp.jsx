import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import App from '../App';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import ServicePage from './ServicePage';
import ContactPage from './ContactPage';
const RouteComp = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/about' element={<AboutPage />}/>
    <Route path='/projects' element={<ProjectPage />}/>
    <Route path='/services' element={<ServicePage />}/>
    <Route path='/contact' element={<ContactPage />}/>
  </Routes>
    
    </>
  )
}

export default RouteComp;