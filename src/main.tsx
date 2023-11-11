import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './sass/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Destination from './pages/Destination'
import Author from './pages/Author'
import Technology from './pages/Technology'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/"  element= { <App/>}/>
        <Route index element= { <App />} />
        <Route path="/Destintion" element={<Destination /> }/>
        <Route path="/Author" element={<Author />}/>
        <Route path="/Destintion" element={<Technology /> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
