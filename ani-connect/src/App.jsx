import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignInPage from './pages/SignInPage'
import SignOutPage from './pages/SignOutPage'
import AboutPage from './pages/AboutPage'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sign-in' element={<SignInPage />}></Route>
        <Route path='/sign-out' element={<SignOutPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/projects' element={<Projects />}></Route>


      </Routes>
    </BrowserRouter>
  )
}