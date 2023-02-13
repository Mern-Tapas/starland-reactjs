import React from 'react'
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="row p-0 nav-bar position-fixed w-100 bg-white shadow-sm overflow-hidden">
                <div className="container-xxl">
                    <div className="row p-2">
                        <div data-aos="fade-right" className="col-md-3 col d-flex align-items-center">
                            <div  className='' style={{ minWidth: "40px", mihHeight: "40px", maxWidth: "40px", maxHeight: "40px" }}>
                                <img src={logo} alt="" />
                            </div>
                            <h5 className='m-0 ms-2 d-md-block d-none'>Starland Academy</h5>
                        </div>
                        <div className="col-md-6 d-xl-flex justify-content-center align-items-center d-none ">
                            <Link data-aos="fade-up" data-aos-delay="300" className='ms-3 text-dark' to='' >Home</Link>
                            <Link data-aos="fade-up" data-aos-delay="400" className='ms-3 text-dark' to='academics' >Academics</Link>
                            <Link data-aos="fade-up" data-aos-delay="500" className='ms-3 text-dark' to='apply' >Apply Online</Link>
                            <Link data-aos="fade-up" data-aos-delay="600" className='ms-3 text-dark' to='contact' >Contact Us</Link>
                            <Link data-aos="fade-up" data-aos-delay="700" className='ms-3 text-dark' to='about' >About Us</Link>
                        </div>
                        <div className="col-md-3 col d-flex">
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Navbar