import React from 'react'

const SignUpPage = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 bg-white p-10 items-center rounded-lg">
                    <img className="w-full lg:block hidden rounded-2xl" src="assets/img/sessions.png" alt="" />
                    <div className="">
                        <div className="text-center mb-6">
                            <a href="index.htm">
                                <img className="w-20 mx-auto h-auto mb-1" src="assets/img/logo-2.png" alt="" />
                            </a>
                            <p className="text-gray-700 font-semibold text-lg mb-6"> Accommo </p>
                            <h1 className="text-gray-700 text-3xl capitalize font-semibold mb-3"> Register an account </h1>
                            <p className="text-base text-gray-500 mb-7"> If you haven’t any account, please <a href="#"
                                className="text-blue-500 font-medium">Sign In</a>
                            </p>
                            <input type="radio" id="html" name="fav_language" value="HTML" />   <label for="html">Agent</label>
                            <input type="radio" id="css" name="fav_language" value="CSS" />   <label for="css">User</label>
                        </div>
                        <div className="">
                            <label for="" className="text-gray-700 font-medium mb-1">Email <sup>*</sup></label>
                            <div className="relative mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-4 text-gray-400 absolute top-1/2 -translate-y-1/2 ml-3" fill="none" viewbox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                                </svg>
                                <input type="text"
                                    className="border pl-9 border-gray-200 dark:border-gray-800 dark:text-gray-300 rounded-lg dark:bg-foreground py-4 focus:outline-none w-full"
                                    placeholder="Enter email or username" />
                            </div>
                            <label for="" className="text-gray-700 font-medium mb-1">Password <sup>*</sup></label>
                            <div className="relative mb-5">
                                <svg className="h-5 w-4 text-gray-400 absolute top-1/2 -translate-y-1/2 ml-3 h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                                    </path>
                                </svg>
                                <input type="text"
                                    className="border pl-9 border-gray-200 dark:border-gray-800 dark:text-gray-300 rounded-lg dark:bg-foreground py-4 focus:outline-none w-full"
                                    placeholder="Enter email or username" />
                            </div>
                            <div className="flex justify-between flex-wrap mb-3">
                                <div className="mb-3">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="border border-gray-500" />
                                    <label for="vehicle1" className="text-gray-500 font-normal"> Remember me?</label>
                                </div>
                                <a href="#" className="text-red-500 mb-3">Forget Password ?</a>
                            </div>
                            <button type="button"
                                className="w-full flex justify-center items-center bg-blue-500 hover:bg-blue-600 rounded-lg text-white p-4 mb-7">
                                Sign In </button>
                            <div className="flex items-center mb-7">
                                <div className="border-b border-gray-200 flex-1"></div>
                                <p className="text-sm font-medium mx-5 text-gray-500 mb-1"> Or </p>
                                <div className="border-b border-gray-200 flex-1"></div>
                            </div>
                            <button type="button"
                                className="border border-gray-200 rounded-lg text-gray-700 flex font-medium items-center w-full justify-center p-4 mb-3">
                                <svg className="mr-3" width="18" height="19" viewbox="0 0 18 19" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_204_1858)">
                                        <path
                                            d="M17.5803 9.58867C17.5803 8.85123 17.5205 8.31309 17.391 7.75502H8.96999V11.0835H13.9129C13.8133 11.9107 13.2751 13.1564 12.0792 13.9934L12.0625 14.1049L14.725 16.1675L14.9095 16.1859C16.6036 14.6213 17.5803 12.3192 17.5803 9.58867Z"
                                            fill="#2E90FA"></path>
                                        <path
                                            d="M8.96995 18.3586C11.3916 18.3586 13.4245 17.5613 14.9095 16.186L12.0792 13.9935C11.3218 14.5217 10.3053 14.8904 8.96995 14.8904C6.59815 14.8904 4.58512 13.3258 3.86752 11.1633L3.76234 11.1722L0.993786 13.3149L0.957581 13.4155C2.43248 16.3454 5.46203 18.3586 8.96995 18.3586Z"
                                            fill="#00AB55"></path>
                                        <path
                                            d="M3.86753 11.1633C3.67819 10.6052 3.56861 10.0072 3.56861 9.38937C3.56861 8.77146 3.67819 8.17354 3.85757 7.61547L3.85256 7.49662L1.0493 5.31958L0.95758 5.36321C0.349702 6.57903 0.000900269 7.94435 0.000900269 9.38937C0.000900269 10.8344 0.349702 12.1996 0.95758 13.4155L3.86753 11.1633Z"
                                            fill="#FDB022"></path>
                                        <path
                                            d="M8.97002 3.88829C10.6542 3.88829 11.7903 4.61578 12.4381 5.22372L14.9693 2.75224C13.4147 1.30723 11.3916 0.420288 8.97002 0.420288C5.46206 0.420288 2.43249 2.43332 0.957581 5.36319L3.85758 7.61545C4.58514 5.45291 6.5982 3.88829 8.97002 3.88829Z"
                                            fill="#F04438"></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_204_1858">
                                            <rect width="17.5896" height="18" fill="white" transform="translate(0 0.420288)"></rect>
                                        </clippath>
                                    </defs>
                                </svg> Continue With Google </button>
                            <button type="button"
                                className="border border-gray-200 rounded-lg text-gray-700 flex font-medium items-center w-full justify-center p-4 mb-3">
                                <svg className="mr-3" width="18" height="19" viewbox="0 0 18 19" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_204_1883)">
                                        <path
                                            d="M18 9.42029C18 4.44972 13.9706 0.420288 9 0.420288C4.02944 0.420288 0 4.44972 0 9.42029C0 13.9124 3.29117 17.6358 7.59375 18.3109V12.0219H5.30859V9.42029H7.59375V7.43748C7.59375 5.18185 8.9374 3.93591 10.9932 3.93591C11.9779 3.93591 13.0078 4.11169 13.0078 4.11169V6.32654H11.8729C10.7549 6.32654 10.4062 7.02029 10.4062 7.73204V9.42029H12.9023L12.5033 12.0219H10.4062V18.3109C14.7088 17.6358 18 13.9124 18 9.42029Z"
                                            fill="#1570EF"></path>
                                        <path
                                            d="M12.5033 12.0219L12.9023 9.42029H10.4062V7.73204C10.4062 7.02029 10.7549 6.32654 11.8729 6.32654H13.0078V4.11169C13.0078 4.11169 11.9779 3.93591 10.9932 3.93591C8.9374 3.93591 7.59375 5.18185 7.59375 7.43748V9.42029H5.30859V12.0219H7.59375V18.3109C8.52558 18.4567 9.47442 18.4567 10.4062 18.3109V12.0219H12.5033Z"
                                            fill="white"></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_204_1883">
                                            <rect width="18" height="18" fill="white" transform="translate(0 0.420288)"></rect>
                                        </clippath>
                                    </defs>
                                </svg> Continue with Facebook </button>
                            <button type="button"
                                className="border border-gray-200 rounded-lg text-gray-700 flex font-medium items-center w-full justify-center p-4 mb-3">
                                <svg className="mr-3" width="18" height="19" viewbox="0 0 18 19" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_204_1895)">
                                        <path
                                            d="M13.7679 9.96662C13.7924 12.6104 16.0874 13.4903 16.1127 13.5015C16.0933 13.5634 15.7461 14.7553 14.9037 15.9862C14.1756 17.0505 13.4197 18.1108 12.2293 18.133C11.0596 18.1544 10.6834 17.4391 9.34594 17.4391C8.00887 17.4391 7.59108 18.1108 6.48366 18.1544C5.33447 18.198 4.45936 17.0034 3.72516 15.9432C2.22497 13.7742 1.07845 9.81404 2.61787 7.1409C3.38259 5.8134 4.74947 4.97289 6.23292 4.95123C7.3613 4.92971 8.42639 5.71032 9.11616 5.71032C9.8055 5.71032 11.0998 4.77151 12.4605 4.90932C13.0302 4.93309 14.6291 5.13938 15.6558 6.64238C15.5732 6.69371 13.7481 7.75627 13.7679 9.96662ZM11.5695 3.47453C12.1795 2.7361 12.5902 1.70785 12.4782 0.685089C11.5988 0.720386 10.5353 1.27107 9.90464 2.00921C9.33933 2.6627 8.84433 3.70895 8.97778 4.71146C9.95808 4.7874 10.9593 4.21337 11.5695 3.47453Z"
                                            fill="black"></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_204_1895">
                                            <rect width="18" height="18" fill="white" transform="translate(0 0.420288)"></rect>
                                        </clippath>
                                    </defs>
                                </svg> Continue with Apple </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpPage
