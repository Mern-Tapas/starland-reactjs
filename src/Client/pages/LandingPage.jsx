import React from 'react'
import EnForm from '../components/EnForm'
import schoolimage from '../../assets/images/school.jpg'
import { Link } from 'react-router-dom'


function LandingPage() {
    return (
        <>
            <div data-aos="fade-down" className="row min-vh-100 image-background position-relative" style={{ backgroundImage: `url(${schoolimage})` }}>
                <div className="col dark-overlay">

                </div>
                <div className="col d-flex flex-column content-overlay">
                    <h3 data-aos="zoom-out" className='mx-auto mt-auto text-light text-center greatvibes  fs-md-11'>Welcome to <br />
                        Starland Academy</h3>

                    <a href="#form" className='mx-auto mb-md-3 mb-auto d-flex home-page-button  rounded-pill border border-white border-3 overflow-hidden '>
                        <i class="fa-solid fa-chevron-down m-auto fs-5"></i>
                    </a>

                </div>
            </div>

            <div id='form' className="row min-vh-100">
                <div className="container-xxl ">

                    <div className="row h-100 py-3">


                        <div className="py-4 col-md-7 col-12 d-flex flex-column justify-content-center">
                            <h1 data-aos="zoom-out" className='mb-4 text-center greatvibes fs-md-1'>Welcome to our website</h1>
                            <p data-aos="zoom-out" data-aos-delay="250" className='text-center '>Our school is committed to providing a quality education for all of our students. We believe that each and every one of our students has the potential to succeed in life and we are dedicated to helping them reach their goals. We offer a variety of programs and services to our students, all of which are designed to help them succeed in school and in life. We encourage our students to get involved in their education and to take advantage of all the resources and opportunities our school has to offer. We are proud of our school and our students, and we invite you to browse our website to learn more about us. If you have any questions, please do not hesitate to contact us. Thank you for visiting our website!</p>
                            <Link data-aos="fade-up" data-aos-delay="300" className='text-center' to="about">Read More</Link>
                        </div>
                        <div className="py-4 col-md-5 col-12 d-flex">
                            <EnForm />
                        </div>

                    </div>
                </div>
            </div>


            <div className="row min-vh-100">
                <div className="container-xxl">
                    <div className="row h-100">
                        <div className="col d-flex">
                            <div className='m-auto d-flex flex-column w-100'>
                                <div className='mx-auto mb-5 pb-3' style={{ maxWidth: "970px" }}>
                                    <h1 data-aos="fade-up" className='text-center greatvibes fw-bold text-secondary' >Starland Acadamy Indore </h1>
                                    <p data-aos="fade-up" className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quisquam in ut, reprehenderit assumenda at aut voluptates doloribus et debitis mollitia nobis tenetur consectetur fugit ipsum vitae dolore placeat rem consequuntur eius minima. Libero totam sapiente iure possimus iste, repellendus incidunt quo, esse optio tempora saepe modi rem laudantium nesciunt excepturi expedita quibusdam, quod ex sint. Maiores officia at vel impedit dolore magnam esse sint suscipit consequatur dicta. Atque, dolores?</p>
                                </div>
                                <div className='school-history w-100' >

                                    <div data-aos='fade-up' className='d-flex flex-column'>
                                        <div className='d-flex bg-warning rounded-pill mx-auto' style={{ height: "70px", width: "70px" }}>
                                            <i className='m-auto fa-sharp fa-solid fa-graduation-cap fs-2'></i>
                                        </div>
                                        <h4 className='text-center mt-3 text-secondary'>Who We are</h4>
                                        <p className='text-center'>Starland Academy provides good quality, modern education, including a strong component of culture, inculcation of values, and education.</p>
                                    </div>

                                    <div data-aos='fade-up' className='d-flex flex-column'>
                                        <div className='d-flex bg-warning rounded-pill mx-auto' style={{ height: "70px", width: "70px" }}>
                                            <i className='m-auto fa-sharp fa-solid fa-building-columns fs-2'></i>
                                        </div>
                                        <h4 className='text-center mt-3 text-secondary'>Established</h4>
                                        <p className='text-center'>Established in 1949, with the noble aim of providing education to the youth of newly independent India, the Starland Academy school Society is a pioneer in providing quality education.</p>
                                    </div>

                                    <div data-aos='fade-up' className='d-flex flex-column'>
                                        <div className='d-flex bg-warning rounded-pill mx-auto' style={{ height: "70px", width: "70px" }}>
                                            <i className='m-auto fa-solid fa-certificate fs-2'></i>
                                        </div>
                                        <h4 className='text-center mt-3 text-secondary'>Affiliation</h4>
                                        <p className='text-center'>Starland Academy is a Madhya Pradesh Board certified middle school that provides education to students from classes <strong>1st</strong> to <strong> 8th</strong></p>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage