import React from 'react'

function Home() {
    return (
        <>
            <div className="container-fluid">
                <div class="row  topbar p-0 m-0 ">
                    <div class="col color-1 py-2 px-4 m-0 d-flex ">
                        <div class="logo ">
                            <img src="" alt="" />
                        </div>
                        <h4 class="text-center text-light oleoscript ms-2 my-auto">Starland Academy</h4>
                        <div class="m-auto d-md-block d-none">
                            <ul class="list-inline p-0 m-0">
                                <li class="  list-inline-item "><a
                                    class=" text-light text-uppercase mx-2 fs-7"
                                    href="/">Home</a></li>
                                <li class="  list-inline-item"><a
                                    class="text-light text-uppercase mx-2 fs-7"
                                    href="/about">About Us</a></li>
                                <li class="   list-inline-item"><a
                                    class="text-light text-uppercase mx-2 fs-7"
                                    href="/">Academics</a></li>
                                <li class="   list-inline-item"><a
                                    class="text-light text-uppercase mx-2 fs-7"
                                    href="/application">Apply Online</a></li>
                                <li class="  list-inline-item"><a
                                    class="text-light text-uppercase mx-2 fs-7"
                                    href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class=" my-auto ms-auto d-md-block d-none">
                            <a class="px-4 rounded fw-bold text-light py-2 color-2" href="/admin">Login</a>
                        </div>
                        <div class=" my-auto ms-auto d-md-none">
                            <button class="p-2 border-0 color-2" id="openbutton">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="feather feather-menu">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="container-fluid  ">
                <div class="row pt-4">
                    <div class="col">
                        <div class="college-profile p-2">
                            <div class="college-image rounded d-flex justify-content-center align-items-center">
                                <div class="overlay-image p-4 d-flex flex-column justify-content-center">
                                    <h4 class="display-4 text-light kaushan">Welcome to</h4>
                                    <h4 class="display-4 text-light kaushan">Starland Academy</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="contact-info-row p-2">
                    <div class="cards ">
                        <div class="box-card rounded d-flex align-items-center justify-content-start border-0 ">
                            <i class="mx-2 rounded fa-sharp fa-solid fa-phone text-light color-1 p-4 fs-2"></i>
                            <div class="p-1">
                                <h6 class="pb-2 fw-bold poppins text-secondary">+91 9907943852</h6>
                                <h6 class="pb-2 fw-bold poppins text-secondary">+91 9907943852</h6>
                            </div>
                        </div>
                        <div class="box-card rounded d-none d-md-flex align-items-center justify-content-start border-0">
                            <i class="mx-2 rounded fa-sharp fa-solid fa-envelope text-light color-1 p-4 fs-2"></i>
                            <div class="p-1">
                                <h6 class="pb-2 fw-bold poppins text-secondary">starlandacademy@gmail.com</h6>
                                <h6 class="pb-2 fw-bold poppins text-secondary">support@starlandacademy.com</h6>
                            </div>
                        </div>
                        <div class="box-card  rounded d-flex align-items-center justify-content-start border-0">
                            <i class="mx-2 rounded fa-sharp fa-solid fa-location-dot text-light color-1 p-4 fs-2"></i>
                            <div class="p-1">
                                <h6 class="fw-bold poppins text-secondary">Bicholi Mardana indore madhya pradesh indore-452001</h6>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="container-fluid pt-5 pb-5">
                    <div class="container ">
                        <h3 class="text-md-start text-center fw-bold oleoscript font-color-3">Welcome to our website</h3>

                        <p class="mt-4 text-secondary fs-5">

                            Our school is committed to providing a quality education for all of our students. We believe that each and
                            every one of our students has the potential to succeed in life and we are dedicated to helping them reach
                            their goals.
                            We offer a variety of programs and services to our students, all of which are designed to help them succeed
                            in school and in life. We encourage our students to get involved in their education and to take advantage of
                            all the resources and opportunities our school has to offer.
                            We are proud of our school and our students, and we invite you to browse our website to learn more about us.
                            If you have any questions, please do not hesitate to contact us. Thank you for visiting our website!
                        </p>
                        <h6> <a href="/about">Read More</a> </h6>
                    </div>
                </div>

                <div class="container my-5">
                    <div class="d-grid affiliation-box">
                        <div class="shadow-color-3 p-4 d-flex flex-column">
                            <div class="d-flex">
                                <i class="fa-sharp fa-solid fa-graduation-cap fs-2"></i>
                                <h4 class="m-0 ms-3">Who we are</h4>
                            </div>
                            <p class="mt-4 text-secondary">Starland Academy provides good quality, modern education, including a strong
                                component of
                                culture, inculcation of values, and education.</p>
                            <div class="mt-auto">
                                <button class="read-more p-2">Read More <span><i
                                    class="fa-sharp fa-solid fa-arrow-right fs-8 ps-2"></i></span></button>
                            </div>
                        </div>
                        <div class="shadow-color-3 p-4 d-flex flex-column">
                            <div class="d-flex">
                                <i class="fa-sharp fa-solid fa-building-columns fs-2"></i>
                                <h4 class="m-0 ms-3">Established</h4>
                            </div>
                            <p class="mt-4 text-secondary">Established in 1949, with the noble aim of providing education to the youth
                                of newly
                                independent India, the Starland Academy school Society is a pioneer in providing quality education.</p>
                            <div class="mt-auto">
                                <button class="read-more p-2">Read More <span><i
                                    class="fa-sharp fa-solid fa-arrow-right fs-8 ps-2"></i></span></button>
                            </div>
                        </div>
                        <div class="shadow-color-3 p-4 d-flex flex-column">
                            <div class="d-flex">
                                <i class="fa-solid fa-certificate fs-2"></i>
                                <h4 class="m-0 ms-3">Affiliation</h4>
                            </div>
                            <p class="mt-4 text-secondary">Starland Academy is a Madhya Pradesh Board certified <strong>middle</strong>
                                school that provides education to students from <strong>classes 1<sup>st</sup> to
                                    8<sup>th</sup></strong></p>
                            <div class="mt-auto">
                                <button class="read-more p-2">Read More <span><i
                                    class="fa-sharp fa-solid fa-arrow-right fs-8 ps-2"></i></span></button>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="container py-4">
                    <div class="py-2 d-flex flex-column">
                        <h3 class="text-center fw-bold oleoscript font-color-3">Photos</h3>
                        <div class="mt-3 gallary-grid ">
                            <div class="photo">
                                <div class="photooverlay d-flex align-items-center justify-content-center text-light fw-bold fs-4"><i
                                    class="fa-sharp fa-solid fa-plus"></i></div>
                            </div>
                            <div class="photo">
                                <div class="photooverlay d-flex align-items-center justify-content-center text-light fw-bold fs-4"><i
                                    class="fa-sharp fa-solid fa-plus"></i></div>
                            </div>
                            <div class="photo">
                                <div class="photooverlay d-flex align-items-center justify-content-center text-light fw-bold fs-4"><i
                                    class="fa-sharp fa-solid fa-plus"></i></div>
                            </div>
                            <div class="photo">
                                <div class="photooverlay d-flex align-items-center justify-content-center text-light fw-bold fs-4"><i
                                    class="fa-sharp fa-solid fa-plus"></i></div>
                            </div>
                            <div class="photo">
                                <div class="photooverlay d-flex align-items-center justify-content-center text-light fw-bold fs-4"><i
                                    class="fa-sharp fa-solid fa-plus"></i></div>
                            </div>
                            <div class="photo">
                                <div class="photooverlay d-flex align-items-center justify-content-center text-light fw-bold fs-4"><i
                                    class="fa-sharp fa-solid fa-plus"></i></div>
                            </div>
                            <div class="photo">
                                <div class="photooverlay d-flex align-items-center justify-content-center text-light fw-bold fs-4"><i
                                    class="fa-sharp fa-solid fa-plus"></i></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>




        </>
    )
}

export default Home