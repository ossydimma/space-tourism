import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './sass/main.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Author from './pages/Author'
import Technology from './pages/Technology'
import Destination from './pages/Destination'
import Mistake from './pages/Mistake'
import Home from './components/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
