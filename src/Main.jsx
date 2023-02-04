import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Client/pages/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/css/menu.css'
import './assets/css/home.css'
import './assets/css/about.css'
import './assets/css/contact-page.css'
import './assets/css/application.css'
import './assets/css/login.css'
import './assets/css/color.css'
import './assets/css/fonts.css'
import './assets/css/fontsize.css'
import './assets/css/fullpageimage.css'
import './assets/css/footer.css'

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Home/>} >

                </Route>
                <Route path='/login' element={<h2>under construction</h2>}></Route>
                <Route path='/Singup' element={<h2>under construction</h2>}></Route>
                <Route path='/Dashboard' element={<h2>under construction</h2>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Main