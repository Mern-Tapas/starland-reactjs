import React from 'react'

function Header() {
    return (
        <div className="container-fluid p-0">
            <div class="row  topbar p-0 m-0 ">
                <div class="col color-1 py-2 px-4 m-0 d-flex ">
                    <div class="logo ">
                        <img src="" alt="" />
                    </div>
                    <h4 class="text-center text-light greatvibes ms-2 my-auto ">Starland Academy</h4>
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
    )
}

export default Header