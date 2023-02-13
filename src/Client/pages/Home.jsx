import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


function Home() {
  return (
    <>
      <div className="container-fluid">

        <Navbar />

        <Outlet />

        <Footer />

      </div>
    </>
  )
}

export default Home