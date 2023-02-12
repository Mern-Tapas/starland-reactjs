import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Client/pages/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/home.css"
import "./assets/css/fonts.css"
import './assets/css/main.css'


function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Home />} >

                </Route>
                <Route path='/login' element={<h2>under construction</h2>}></Route>
                <Route path='/Singup' element={<h2>under construction</h2>}></Route>
                <Route path='/Dashboard' element={<h2>under construction</h2>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Main