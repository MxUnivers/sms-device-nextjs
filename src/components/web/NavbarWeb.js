import React from 'react'

const NavbarWeb = () => {
    return (
        <>
            {/*Mobile */}
            <div
                className="mobile-navbar overflow-y-auto fixed bg-white  -left-full top-0 h-full w-full transition-all z-[100]">
                <div className="flex justify-end py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-500 close-navbar-btn" fill="none"
                        viewbox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
                <ul className="mx-5">

                    <li className="">
                        <div className="dropdown dropdown-mobile  rounded-lg" data-dropdown="">
                            <button
                                className="link w-full py-3 flex  justify-between pb-5 items-center border-b border-gray-200 font-normal text-gray-500 "
                                data-dropdown-button=""> Option
                            </button>

                        </div>
                    </li>
                    <li className="">
                        <div className="dropdown dropdown-mobile  rounded-lg" data-dropdown="">
                            <button
                                className="link w-full py-3 flex  pb-5 justify-between items-center border-b border-gray-200 font-normal text-gray-500 "
                                data-dropdown-button=""> Dashboard <svg className="w-3 h-auto ml-2 transition-all" width="10" height="6"
                                    data-dropdown-button="" viewbox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.99982 6.00001C4.79513 6.00001 4.59034 5.92467 4.43435 5.774L0.434558 1.91686C0.122074 1.61552 0.122074 1.12735 0.434558 0.826011C0.747042 0.524671 1.25327 0.524671 1.56575 0.826011L4.99982 4.13893L8.43464 0.826613C8.74712 0.525274 9.25335 0.525274 9.56583 0.826613C9.87831 1.12795 9.87831 1.61612 9.56583 1.91746L5.56604 5.7746C5.4098 5.92527 5.20481 6.00001 4.99982 6.00001Z"
                                        fill="currentColor"></path>
                                </svg>
                            </button>
                            <div className="dropdown-mobile-menu   text-gray-700">
                                <div className="dropdown-links">
                                    <ul className="p-4">
                                        <li className="">
                                            <a href="dashboard-home.html"
                                                className="hover:text-blue-500 text-sm block  pb-3"> Overview</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>






            {/*Pc */}
            <header className="relative sticky-header-first-content" style={{ background: `url('assets/img/intro/intro-bg.png'), linearGradient(180deg, #ffffff 0%, #f0f7fe 100%)`, backgroundSize: "cover", backgroundPosition: "center" }}>

                <div className="w-full navbar h-20 flex items-center  sticky top-20 z-50">
                    <nav className="container mx-auto lg:px-0 px-5 flex items-center justify-between transition-all">
                        <div className="flex items-center">
                            <button type="button" className="lg:hidden block menu-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewbox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                            <a href="index.htm" className="flex items-center">
                                <img className="w-11 h-11 mr-3" src="assets/img/logo.svg" alt="" />
                                <h6 className="text-base font-medium">Sms Device</h6>
                            </a>
                        </div>
                        <button type="button" className="text-white hover:text-blue-500 flex items-center lg:hidden">
                            <span className="lg:mr-3 mr-0 relative">
                                <img className="w-8 h-8 rounded-full border border-white" src="assets/img/faces/10.jpg" alt="" />
                                <span className="w-2 h-2 bg-green-500 rounded-full border absolute bottom-0 right-0"></span>
                            </span>
                        </button>
                        <div className="hidden lg:flex items-center">
                            <ul className="flex items-center">


                                <li className="list-none">
                                    <div
                                        className="relative [&>div]:hover:visible [&>div]:hover:pt-3 [&>div]:hover:h-full [&>div]:hover:opacity-100 [&>div]:hover:top-auto [&>div]:hover:transition-all [&>div]:hover:z-10 pr-9">
                                        <button className="link hover:text-blue-500 flex items-center"> Solutions <svg className="w-3 h-auto ml-2"
                                            width="10" height="6" viewbox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.99982 6.00001C4.79513 6.00001 4.59034 5.92467 4.43435 5.774L0.434558 1.91686C0.122074 1.61552 0.122074 1.12735 0.434558 0.826011C0.747042 0.524671 1.25327 0.524671 1.56575 0.826011L4.99982 4.13893L8.43464 0.826613C8.74712 0.525274 9.25335 0.525274 9.56583 0.826613C9.87831 1.12795 9.87831 1.61612 9.56583 1.91746L5.56604 5.7746C5.4098 5.92527 5.20481 6.00001 4.99982 6.00001Z"
                                                fill="currentColor"></path>
                                        </svg>
                                        </button>
                                        <div className="absolute top-9 invisible opacity-0 whitespace-nowrap pt-0">
                                            <div
                                                className="max-w-sm shadow-front-3 rounded-lg whitespace-nowrap bg-white text-gray-700">
                                                <div className="dropdown-links">
                                                    <ul className="p-4">
                                                        <li className="">
                                                            <a href="dashboard-home.html"
                                                                className="hover:text-blue-500 text-sm block pb-3"> Overview</a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-none">
                                    <a className="link hover:text-blue-500 flex items-center pr-9" href="https://accomu-doc.netlify.app/"
                                        target="_blank" rel="noopener noreferrer"> Documentation </a>
                                </li>
                            </ul>
                        </div>
                        <a href="https://themeforest.net/item/accomu-directory-listings-html-template/39971703" target="_blank"
                            type="button"
                            className="hidden lg:inline-flex items-center px-5 py-3 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                            <span className="xl:block hidden">Purchase Now</span>
                        </a>
                    </nav >
                </div >


            </header>

        </>
    )
}

export default NavbarWeb
