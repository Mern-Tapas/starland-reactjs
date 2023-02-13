import React from 'react'
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="row p-0 nav-bar position-fixed bg-white w-100 shadow">
                <div className="container-xxl">
                    <div className="row p-2">
                        <div className="col-md-3 col d-flex align-items-center">
                            <div className='' style={{ minWidth: "40px", mihHeight: "40px", maxWidth: "40px", maxHeight: "40px" }}>
                                <img src={logo} alt="" />
                            </div>
                            <h5 className='m-0 ms-2 d-md-block d-none'>Starland Academy</h5>
                        </div>
                        <div className="col-md-6 d-xl-flex justify-content-center align-items-center d-none ">
                            <Link className='ms-3 text-dark' to='' >Home</Link>
                            <Link className='ms-3 text-dark' to='academics' >Academics</Link>
                            <Link className='ms-3 text-dark' to='apply' >Apply Online</Link>
                            <Link className='ms-3 text-dark' to='contact' >Contact Us</Link>
                            <Link className='ms-3 text-dark' to='about' >About Us</Link>
                        </div>
                        <div className="col-md-3 col d-flex">
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Navbar