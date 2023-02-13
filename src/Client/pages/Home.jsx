import React from 'react'
import schoolimage from '../../assets/images/school.jpg'
import EnForm from '../components/EnForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


function Home() {
  return (
    <>
      <div className="container-fluid">

        <Navbar />

        <div className="row min-vh-100 image-background position-relative" style={{ backgroundImage: `url(${schoolimage})` }}>
          <div className="col dark-overlay">

          </div>
          <div className="col d-flex flex-column content-overlay">
            <h3 className='mx-auto mt-auto text-light text-center greatvibes fs-11'>Welcome to <br />
              Starlandacademy</h3>

            <button className='mx-auto mb-auto home-page-button  rounded-pill border border-white border-3' style={{ width: "70px", height: "70px" }}></button>

          </div>
        </div>

        <div className="row min-vh-100">
          <div className="container-xxl ">

            <div className="row h-100 py-3">


              <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
                <h2 className='mb-4 text-md-right text-center greatvibes fs-1'>Welcome to our website</h2>
                <p className='text-center '>Our school is committed to providing a quality education for all of our students. We believe that each and every one of our students has the potential to succeed in life and we are dedicated to helping them reach their goals. We offer a variety of programs and services to our students, all of which are designed to help them succeed in school and in life. We encourage our students to get involved in their education and to take advantage of all the resources and opportunities our school has to offer. We are proud of our school and our students, and we invite you to browse our website to learn more about us. If you have any questions, please do not hesitate to contact us. Thank you for visiting our website!</p>
              </div>
              <div className="col-md-6 col-12 d-flex">
                <EnForm />
              </div>

            </div>
          </div>
        </div>

        <Footer/>

      </div>
    </>
  )
}

export default Home