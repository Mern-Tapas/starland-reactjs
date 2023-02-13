import React from 'react'
import '../../assets/css/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="row footer text-light py-2">
                <div className="container-xxl">
                    <div className="col-12 footer-grid">
                        <div>
                            <h6 className='text-uppercase'>information</h6>
                            <div className='d-flex flex-column'>
                                <Link className='text-secondary mb-1' to="">Home</Link>
                                <Link className='text-secondary mb-1' to="">About</Link>
                                <Link className='text-secondary mb-1' to="">Faculty</Link>
                                <Link className='text-secondary mb-1' to="">Principal</Link>
                            </div>
                        </div>
                        <div>
                            <h6 className='text-uppercase'>content</h6>
                            <div className='d-flex flex-column'>
                                <Link className='text-secondary mb-1' to="">Forms</Link>
                                <Link className='text-secondary mb-1' to="">Apply Online</Link>
                                <Link className='text-secondary mb-1' to="">Download Syllabus</Link>
                                <Link className='text-secondary mb-1' to="">Gallary</Link>
                                <Link className='text-secondary mb-1' to="">Teacher Login</Link>
                            </div>

                        </div>
                        <div>
                            <h6 className='text-uppercase'>important Link</h6>
                            <div className='d-flex flex-column'>
                                <Link className='text-secondary mb-1' to="">FAQ</Link>
                                <Link className='text-secondary mb-1' to="">Contact</Link>
                            </div>

                            <h6 className='text-uppercase'>support</h6>
                            <div className='d-flex flex-column'>
                                <Link className='text-secondary mb-1' to="">FAQ</Link>
                                <Link className='text-secondary mb-1' to="">Contact</Link>
                            </div>

                        </div>
                        <div>
                            <h5>Follow Us On</h5>
                            <div className='d-flex'>
                                <Link className='text-secondary me-1' to="">

                                </Link>
                                <Link className='text-secondary me-1' to="">

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer