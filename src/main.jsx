import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, useTheme } from './ThemeContext.jsx'
import {  BrowserRouter} from 'react-router-dom';
import RouteComp from './components/RouteComp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<ThemeProvider>
<React.StrictMode>
    <BrowserRouter>
    <RouteComp/>
    </BrowserRouter>
  </React.StrictMode>
</ThemeProvider>
)
