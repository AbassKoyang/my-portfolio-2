// App.js
import React from 'react';
import Navbar from './components/Navbar';
import { ThemeProvider, useTheme } from './ThemeContext';
import Containerone from './components/Containerone';
import Containertwo from './components/Containertwo';
import Containerthree from './components/Containerthree';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
<>
<section className={`${theme === 'light' ? 'bg-slate-100' : 'bg-black'} w-[100vw] box-border overflow-x-hidden flex flex-col items-center`}>
      <Navbar/>
      <Containerone/>
      <Containertwo/>
      <Containerthree/>
      <Footer/>
    </section>
</>
  );
}

export default App;

