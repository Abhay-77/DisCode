
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Login.jsx'
import Camps from './components/Camps.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signin' element={<Login/>} />
    <Route path='/camps' element={<Camps/>} />
    </Routes>
  </BrowserRouter>
)
