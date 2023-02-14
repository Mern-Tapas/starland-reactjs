import React from 'react'
import '../../assets/css/footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-light.png'


function Footer() {
    return (
        <>
            <div className="row  footer text-light py-3">
                <div className="container-xxl">
                    <div className="col-12 footer-grid">
                        <div>
                            <h6 className='text-uppercase text-md-start text-center fs-7'>information</h6>
                            <div className='d-flex flex-column'>
                                <Link className='text-secondary text-md-start text-center fs-7 mb-1' to="">Home</Link>
                                <Link className='text-secondary text-md-start text-center fs-7 mb-1' to="">About</Link>
                                <Link className='text-secondary text-md-start text-center fs-7 mb-1' to="">Faculty</Link>
                                <Link className='text-secondary text-md-start text-center fs-7 mb-1' to="">Principal</Link>
                            </div>
                        </div>
                        <div>
                            <h6 className='text-uppercase text-md-start text-center fs-7'>content</h6>
                            <div className='d-flex flex-column'>
                                <Link className='text-secondary text-md-start text-center fs-7 mb-1' to="">Forms</Link>
                                <Link className='text-secondary text-md-start text-center fs-7 mb-1' to="">Apply Online</Link>
                                <Link className='text-secondary text-md-start text-center fs-7 mb-1' to="">Download Syllabus</Link>
                                <Link className='text-secondary text-md-start text-center fs-7 mb-1' to="">Gallary</Link>
                                <Link className='text-secondary text-md-start text-center fs-7 mb-1' to="">Teacher Login</Link>
                            </div>

                        </div>
                        <div>
                            <h6 className='text-uppercase text-md-start text-center fs-7'>important Link</h6>
                            <div className='d-flex flex-column'>
                                <Link className='text-secondary text-md-start text-center fs-7 mb-1' to="">FAQ</Link>
                                <Link className='text-secondary text-md-start text-center fs-7 mb-1' to="">Contact</Link>
                            </div>

                            <h6 className='text-uppercase text-md-start text-center fs-7'>support</h6>
                            <div className='d-flex flex-column'>
                                <Link className='text-secondary text-md-start text-center fs-7 mb-1' to="">FAQ</Link>
                                <Link className='text-secondary text-md-start text-center fs-7 mb-1' to="">Contact</Link>
                            </div>

                        </div>
                        <div className='d-flex flex-column align-items-md-start align-items-center'>
                            <h5 className='mb-3 text-uppercaste text-md-start text-center fs-7 '>Follow Us On</h5>
                            <div className='d-flex justify-content-md-start justify-content-center'>
                                <Link data-aos="zoom-in" data-aos-delay="250" className='text-secondary text-md-start text-center fs-7 me-4' to="">
                                    <i class="fa-brands fa-facebook-f fs-4"></i>
                                </Link>
                                <Link data-aos="zoom-in" data-aos-delay="300" className='text-secondary text-md-start text-center fs-7 me-4' to="">
                                    <i class="fa-brands fa-instagram fs-4"></i>
                                </Link>
                                <Link data-aos="zoom-in" data-aos-delay="350" className='text-secondary text-md-start text-center fs-7 me-4' to="">
                                    <i class="fa-brands fa-linkedin-in fs-4"></i>
                                </Link>
                                <Link data-aos="zoom-in" data-aos-delay="400" className='text-secondary text-md-start text-center fs-7 me-4' to="">
                                    <i class="fa-brands fa-youtube fs-4"></i>
                                </Link>
                            </div >

                            <div className='d-flex mt-3 align-items-center  '>
                                <div className='d-flex me-2' style={{ width: "55px", height: "55px" }}>
                                    <img src={logo} alt="" />
                                </div>
                                <h3 className='m-0 greatvibes'>Starland Academy</h3>
                            </div>

                        </div>
                    </div>
                    <hr />
                    <div className="col-12">
                        <p className='m-0 fs-8 text-secondary'>Copyright ©  2010-2023 Starland Academy S.L. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer