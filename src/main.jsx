
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Login.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signin' element={<Login/>} />
    </Routes>
  </BrowserRouter>
)
