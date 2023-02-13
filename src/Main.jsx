import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Client/pages/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/home.css"
import "./assets/css/fonts.css"
import './assets/css/main.css'
import LandingPage from './Client/pages/LandingPage'
import About from './Client/pages/About'
import Contact from './Client/pages/Contact'
import ApplicationForm from './Client/pages/ApplicationForm'
import Gallary from './Client/pages/Gallary'
import Academy from './Client/pages/Academy'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Main() {


    useEffect(()=>{
        AOS.init();

    },[])


    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Home />} >
                    <Route path="" element={<LandingPage />} ></Route>
                    <Route path='about' element={<About />}></Route>
                    <Route path='contact' element={<Contact />}></Route>
                    <Route path='apply' element={<ApplicationForm />}></Route>
                    <Route path='gallary' element={<Gallary />}></Route>
                    <Route path='academics' element={<Academy />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Main