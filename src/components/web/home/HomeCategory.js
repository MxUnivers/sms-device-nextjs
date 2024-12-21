import React from 'react'

const HomeCategory = () => {
    return (
        <div className="bg-white ">

            <div>
                <section className="container mx-auto text-center mb-[100px]" data-aos="fade-up">
                    <h4 className="text-2xl md:text-[32px] font-semibold text-gray-700 mb-12"> Key
                        <span style={{
                            background: 'linear-gradient(90.22deg, #2e90fa 23.44%, #3f069b 53.4%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                        }}> Features </span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
                        <div
                            className="group shadow-card hover:shadow-hover cursor-pointer text-start bg-white dark:bg-dark rounded-md p-9 shadow-lg hover:shadow-md">
                            <svg className="w-9 h-9" width="36" height="36" viewbox="0 0 36 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2076_32917)">
                                    <path
                                        d="M35.6695 34.0805L25.7203 24.1313C27.9141 21.5719 29.25 18.2602 29.25 14.625C29.25 6.5482 22.7039 0 14.625 0C6.54609 0 0 6.5482 0 14.625C0 22.7018 6.5482 29.25 14.625 29.25C18.2588 29.25 21.5754 27.9169 24.1313 25.7238L34.0805 35.673C34.2984 35.8875 34.5867 36 34.875 36C35.1633 36 35.4507 35.8902 35.6702 35.6704C36.1125 35.2336 36.1125 34.5164 35.6695 34.0805ZM14.625 27C7.74141 27 2.25 21.4453 2.25 14.625C2.25 7.80469 7.74141 2.25 14.625 2.25C21.5086 2.25 27 7.74141 27 14.625C27 21.5086 21.4453 27 14.625 27Z"
                                        fill="#98A2B3"></path>
                                    <path
                                        d="M15.875 13.625H20.375C20.9937 13.625 21.5 14.1282 21.5 14.75C21.5 15.3718 20.9968 15.875 20.375 15.875H15.875V20.375C15.875 20.9937 15.3718 21.5 14.75 21.5C14.1282 21.5 13.625 20.9968 13.625 20.375V15.875H9.125C8.50625 15.875 8 15.3688 8 14.75C8 14.1312 8.50625 13.625 9.125 13.625H13.625V9.125C13.625 8.50625 14.1282 8 14.75 8C15.3718 8 15.875 8.50316 15.875 9.125V13.625Z"
                                        fill="#2E90FA"></path>
                                </g>
                                <defs>
                                    <clippath id="clip0_2076_32917">
                                        <rect width="36" height="36" fill="white"></rect>
                                    </clippath>
                                </defs>
                            </svg>
                            <h6 className="text-lg text-gray-800 font-medium group-hover:text-blue-500 mt-[28px] mb-3"> SEO Friendly </h6>
                            <p className="text-sm text-gray-500"> The best SEO practices achieve higher rankings on Google. </p>
                        </div>
                        <div
                            className="group shadow-card hover:shadow-hover cursor-pointer text-start bg-white dark:bg-dark rounded-md p-9 shadow-lg hover:shadow-md">
                            <svg className="w-9 h-9" width="36" height="36" viewbox="0 0 36 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M31.5 2.25H4.5C2.01445 2.25 0 4.26445 0 6.75V11.25C0 13.7355 2.01445 15.75 4.5 15.75H31.5C33.9855 15.75 36 13.7355 36 11.25V6.75C36 4.26445 33.982 2.25 31.5 2.25ZM33.75 11.25C33.75 12.4903 32.7403 13.5 31.5 13.5H4.5C3.25969 13.5 2.25 12.4875 2.25 11.25V6.75C2.25 5.50969 3.25969 4.5 4.5 4.5H31.5C32.7403 4.5 33.75 5.50969 33.75 6.75V11.25ZM31.5 20.25H4.5C2.01445 20.25 0 22.2645 0 24.75V29.25C0 31.7355 2.01445 33.75 4.5 33.75H31.5C33.9855 33.75 36 31.7355 36 29.25V24.75C36 22.268 33.982 20.25 31.5 20.25ZM33.75 29.25C33.75 30.4903 32.7403 31.5 31.5 31.5H4.5C3.25969 31.5 2.25 30.4903 2.25 29.25V24.75C2.25 23.5097 3.25969 22.5 4.5 22.5H31.5C32.7403 22.5 33.75 23.5097 33.75 24.75V29.25Z"
                                    fill="#98A2B3"></path>
                                <path
                                    d="M27.5625 9C27.5625 8.06766 28.3184 7.3125 29.25 7.3125C30.1852 7.3125 30.9375 8.06484 30.9375 9C30.9375 9.93164 30.1823 10.6875 29.25 10.6875C28.3184 10.6875 27.5625 9.93164 27.5625 9Z"
                                    fill="#2E90FA"></path>
                                <path
                                    d="M20.8125 9C20.8125 8.06766 21.5684 7.3125 22.5 7.3125C23.4352 7.3125 24.1875 8.06484 24.1875 9C24.1875 9.93164 23.4323 10.6875 22.5 10.6875C21.5684 10.6875 20.8125 9.93164 20.8125 9Z"
                                    fill="#2E90FA"></path>
                                <path
                                    d="M27.5625 27C27.5625 26.0677 28.3184 25.3125 29.25 25.3125C30.1852 25.3125 30.9375 26.0648 30.9375 27C30.9375 27.9316 30.1823 28.6875 29.25 28.6875C28.3184 28.6875 27.5625 27.9316 27.5625 27Z"
                                    fill="#2E90FA"></path>
                                <path
                                    d="M20.8125 27C20.8125 26.0677 21.5684 25.3125 22.5 25.3125C23.4352 25.3125 24.1875 26.0648 24.1875 27C24.1875 27.9316 23.4323 28.6875 22.5 28.6875C21.5684 28.6875 20.8125 27.9316 20.8125 27Z"
                                    fill="#2E90FA"></path>
                            </svg>
                            <h6 className="text-lg text-gray-800 font-medium group-hover:text-blue-500 mt-[28px] mb-3"> Server Side
                                Rendered </h6>
                            <p className="text-sm text-gray-500"> Automatic code splitting, system based routing, hot code reloading. </p>
                        </div>
                        <div
                            className="group shadow-card hover:shadow-hover cursor-pointer text-start bg-white dark:bg-dark rounded-md p-9 shadow-lg hover:shadow-md">
                            <svg className="w-9 h-9" width="36" height="36" viewbox="0 0 36 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2076_32991)">
                                    <path
                                        d="M19.7028 0.0799514C8.90994 -0.924802 0.2827 7.68064 0.00145309 18.0024L4.67321e-06 19.1217C-0.00177421 19.7439 0.504533 20.2502 1.12644 20.2502C1.74202 20.2502 2.24861 19.7466 2.25143 19.1308L2.25732 18.0002C2.49892 9.04251 10.0209 1.45096 19.4707 2.3179C27.648 3.06883 33.751 10.2139 33.751 18.4263V30.316C33.751 32.18 32.24 33.691 30.3761 33.691H24.5395C24.8265 32.926 24.8636 32.0358 24.3791 31.1112C23.7397 29.8913 22.4075 29.191 21.0308 29.191L17.0028 29.2501C15.3709 29.2501 13.8746 30.3533 13.5667 31.9564C13.1497 34.1156 14.795 36 16.813 36L30.2495 36C33.3566 36 35.8752 33.4814 35.8752 30.4383V18.4854C36.001 9.11282 29.0331 0.948933 19.7028 0.0799514ZM21.3129 33.75H16.813C16.1889 33.75 15.688 33.249 15.688 32.625C15.688 32.001 16.189 31.5 16.813 31.5H21.3136C21.9377 31.5 22.4386 32.001 22.4386 32.625C22.4386 33.249 22.002 33.75 21.3129 33.75Z"
                                        fill="#98A2B3"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.5021 15.753C13.5021 14.5141 12.4917 13.5002 11.2521 13.5002H9.00141C6.51378 13.5002 4.50146 15.5126 4.50146 17.9369L4.56264 22.4748C4.56264 24.9625 6.57566 26.9748 9.06328 26.9748H11.3133C12.5528 26.9748 13.5632 25.9637 13.5632 24.7248L13.5021 15.753ZM11.3133 24.7247H9.06332C7.82373 24.7247 6.81335 23.7137 6.81335 22.4748V18.0029C6.81335 16.7641 7.82443 15.753 9.06332 15.753L11.3147 15.753L11.3133 24.7247Z"
                                        fill="#2E90FA"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M22.5624 15.753C22.5624 14.5141 23.5728 13.5002 24.8124 13.5002H27.063C29.5507 13.5002 31.563 15.5126 31.563 17.9369L31.5018 22.4748C31.5018 24.9625 29.4888 26.9748 27.0012 26.9748H24.7512C23.5116 26.9748 22.5012 25.9637 22.5012 24.7248L22.5624 15.753ZM24.7513 24.7247H27.0012C28.2408 24.7247 29.2512 23.7137 29.2512 22.4748V18.0029C29.2512 16.7641 28.2401 15.753 27.0012 15.753L24.7499 15.753L24.7513 24.7247Z"
                                        fill="#2E90FA"></path>
                                </g>
                                <defs>
                                    <clippath id="clip0_2076_32991">
                                        <rect width="36" height="36" fill="white"></rect>
                                    </clippath>
                                </defs>
                            </svg>
                            <h6 className="text-lg text-gray-800 font-medium group-hover:text-blue-500 mt-[28px] mb-3"> Multi-Vendor
                                Support </h6>
                            <p className="text-sm text-gray-500"> We can assure you the proper Author support & faster response. </p>
                        </div>
                        <div
                            className="group shadow-card hover:shadow-hover cursor-pointer text-start bg-white dark:bg-dark rounded-md p-9 shadow-lg hover:shadow-md">
                            <svg className="w-9 h-9" width="36" height="36" viewbox="0 0 36 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M28.3725 10.4807L35.5725 17.0434C35.8481 17.2895 36 17.6395 36 17.9512C36 18.3614 35.8481 18.6622 35.5725 18.9575L28.3725 25.5202C27.8269 26.0178 26.9775 25.9905 26.4656 25.46C25.9537 24.9295 25.9819 24.1037 26.5275 23.606L32.6756 17.9512L26.5275 12.3948C25.9819 11.8971 25.9537 11.0713 26.4656 10.5408C26.9775 10.0104 27.8269 9.98302 28.3725 10.4807ZM9.4725 12.3948L3.32381 17.9512L9.4725 23.606C10.0181 24.1037 10.0463 24.9295 9.53438 25.46C9.0225 25.9905 8.17313 26.0178 7.6275 25.5202L0.426656 18.9575C0.154462 18.6622 0 18.3614 0 17.9512C0 17.6395 0.154462 17.2895 0.426656 17.0434L7.6275 10.4807C8.17313 9.98302 9.0225 10.0104 9.53438 10.5408C10.0463 11.0713 10.0181 11.8971 9.4725 12.3948Z"
                                    fill="#98A2B3"></path>
                                <path
                                    d="M15.639 31.0769L23.739 5.70181C23.964 5.00944 23.5646 4.27421 22.8503 4.05933C22.1415 3.84446 21.3821 4.23155 21.1628 4.92413L13.0628 30.3004C12.8378 30.9894 13.2371 31.6785 13.9515 31.941C14.6603 32.1543 15.369 31.7715 15.639 31.0769Z"
                                    fill="#2E90FA"></path>
                            </svg>
                            <h6 className="text-lg text-gray-800 font-medium group-hover:text-blue-500 mt-[28px] mb-3"> Clean Code </h6>
                            <p className="text-sm text-gray-500"> Codebase is huge, but structured and robust. </p>
                        </div>
                        <div
                            className="group shadow-card hover:shadow-hover cursor-pointer text-start bg-white dark:bg-dark rounded-md p-9 shadow-lg hover:shadow-md">
                            <svg className="w-9 h-9" width="36" height="36" viewbox="0 0 36 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2076_33004)">
                                    <path
                                        d="M34.875 21.375C35.4937 21.375 36 20.8687 36 20.25C36 19.6312 35.4968 19.125 34.875 19.125C26.1914 19.125 19.125 26.1914 19.125 34.875C19.125 35.4968 19.6282 36 20.25 36C20.8718 36 21.375 35.4968 21.375 34.875C21.375 27.4289 27.4289 21.375 34.875 21.375ZM33.75 31.5C32.5076 31.5 31.5 32.5076 31.5 33.75C31.5 34.9924 32.5076 36 33.75 36C34.9924 36 36 34.9924 36 33.75C36 32.5076 34.9945 31.5 33.75 31.5ZM34.875 24.75C29.2915 24.75 24.75 29.2915 24.75 34.875C24.75 35.4968 25.2532 36 25.875 36C26.4968 36 27 35.4968 27 34.875C27 30.5332 30.5332 27 34.875 27C35.4968 27 36 26.4968 36 25.875C36 25.2532 35.4937 24.75 34.875 24.75Z"
                                        fill="#2E90FA"></path>
                                    <path
                                        d="M20.25 21.375V4.5C20.25 3.25758 19.2445 2.25 18 2.25H4.5C3.25758 2.25 2.25 3.25758 2.25 4.5V31.5C2.25 32.7424 3.25758 33.75 4.5 33.75H14.625C15.2438 33.75 15.75 34.2563 15.75 34.875C15.75 35.4937 15.2438 36 14.625 36H4.5C2.01445 36 0 33.9855 0 31.5V4.5C0 2.01445 2.01445 0 4.5 0H18C20.4855 0 22.5 2.01445 22.5 4.5V21.375C22.5 21.9937 21.9963 22.5 21.375 22.5C20.7537 22.5 20.25 21.9963 20.25 21.375Z"
                                        fill="#98A2B3"></path>
                                    <path
                                        d="M7.875 29.25C7.875 28.6286 8.37872 28.125 9 28.125H13.5C14.1213 28.125 14.625 28.6286 14.625 29.25C14.625 29.8713 14.1213 30.375 13.5 30.375H9C8.37872 30.375 7.875 29.8713 7.875 29.25Z"
                                        fill="#98A2B3"></path>
                                </g>
                                <defs>
                                    <clippath id="clip0_2076_33004">
                                        <rect width="36" height="36" fill="white"></rect>
                                    </clippath>
                                </defs>
                            </svg>
                            <h6 className="text-lg text-gray-800 font-medium group-hover:text-blue-500 mt-[28px] mb-3"> Optimized for
                                Mobile </h6>
                            <p className="text-sm text-gray-500"> Optimization strategies and responsive technology. </p>
                        </div>
                        <div
                            className="group shadow-card hover:shadow-hover cursor-pointer text-start bg-white dark:bg-dark rounded-md p-9 shadow-lg hover:shadow-md">
                            <svg className="w-9 h-9" width="27" height="36" viewbox="0 0 27 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2076_33008)">
                                    <path
                                        d="M19.3219 0.442125C19.6453 0.157289 20.0602 0 20.4891 0C21.6984 0 22.5422 1.19883 22.1344 2.3393L17.3461 15.75H25.0383C26.1492 15.75 27 16.6008 27 17.6484C27 18.1969 26.768 18.7172 26.3602 19.0758L7.67109 35.5641C7.35469 35.8453 6.93984 36 6.51305 36C5.30227 36 4.45711 34.7977 4.86422 33.6586L9.65391 20.25H1.81477C0.812812 20.25 0 19.4344 0 18.4359C0 17.9156 0.221695 17.4234 0.609187 17.0789L19.3219 0.442125ZM19.3641 3.4207L2.95875 18H11.25C11.6156 18 11.9602 18.1758 12.1711 18.4781C12.382 18.7734 12.4313 19.1602 12.3117 19.5047L7.63594 32.5969L24.1734 18H15.75C15.3844 18 15.0398 17.8242 14.8289 17.5219C14.618 17.1633 14.5687 16.8398 14.6883 16.4953L19.3641 3.4207Z"
                                        fill="#98A2B3"></path>
                                    <path d="M20.5789 12.9576L25.3141 9.19043M1.35706 27.0705L6.46874 22.7811" stroke="#2E90FA"
                                        stroke-width="2.3" stroke-linecap="round"></path>
                                </g>
                                <defs>
                                    <clippath id="clip0_2076_33008">
                                        <rect width="27" height="36" fill="white"></rect>
                                    </clippath>
                                </defs>
                            </svg>
                            <h6 className="text-lg text-gray-800 font-medium group-hover:text-blue-500 mt-[28px] mb-3"> Blazing Fast </h6>
                            <p className="text-sm text-gray-500"> The best SEO practices achieve higher rankings on Google. </p>
                        </div>
                        <div
                            className="group shadow-card hover:shadow-hover cursor-pointer text-start bg-white dark:bg-dark rounded-md p-9 shadow-lg hover:sdadow-md">
                            <svg className="w-9 h-9" width="36" height="36" viewbox="0 0 36 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2076_33011)">
                                    <path d="M10 2L10 35M35 18L9 18" stroke="#2E90FA" stroke-width="2.3"></path>
                                    <path
                                        d="M1.3 4C1.3 2.50883 2.50883 1.3 4 1.3H32C33.4912 1.3 34.7 2.50883 34.7 4V32C34.7 33.4912 33.4912 34.7 32 34.7H4C2.50883 34.7 1.3 33.4912 1.3 32V4Z"
                                        stroke="#98A2B3" stroke-width="2.6"></path>
                                </g>
                                <defs>
                                    <clippath id="clip0_2076_33011">
                                        <rect width="36" height="36" fill="white"></rect>
                                    </clippath>
                                </defs>
                            </svg>
                            <h6 className="text-lg text-gray-800 font-medium group-hover:text-blue-500 mt-[28px] mb-3"> Dashboard </h6>
                            <p className="text-sm text-gray-500"> Huge collection of elements and flexible layouts! </p>
                        </div>
                        <div
                            className="group shadow-card hover:shadow-hover cursor-pointer text-start bg-white dark:bg-dark rounded-md p-9 shadow-lg hover:sdadow-md">
                            <svg className="w-9 h-9" width="65" height="65" viewbox="0 0 65 65" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M32.7046 22.9087V3.11353H22.8069C20.1819 3.11353 17.6643 4.15632 15.8082 6.0125C13.952 7.86869 12.9092 10.3862 12.9092 13.0113C12.9092 15.6363 13.952 18.1538 15.8082 20.01C17.6643 21.8662 20.1819 22.909 22.8069 22.909L32.7046 22.9087Z"
                                    stroke="#9397AD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                    d="M32.7046 42.7039V22.9087H22.8069C20.1819 22.9087 17.6643 23.9515 15.8082 25.8077C13.952 27.6639 12.9092 30.1814 12.9092 32.8065C12.9092 35.4315 13.952 37.949 15.8082 39.8052C17.6643 41.6614 20.1819 42.7042 22.8069 42.7042L32.7046 42.7039ZM32.7046 22.9087V3.11353H42.6024C45.2274 3.11353 47.7449 4.15632 49.6011 6.0125C51.4573 7.86869 52.5001 10.3862 52.5001 13.0113C52.5001 15.6363 51.4573 18.1538 49.6011 20.01C47.7449 21.8662 45.2274 22.909 42.6024 22.909L32.7046 22.9087Z"
                                    stroke="#9397AD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                    d="M32.7047 42.7039V52.6017C32.7047 54.5593 32.1242 56.4729 31.0366 58.1006C29.9491 59.7283 28.4033 60.997 26.5947 61.7461C24.7861 62.4953 22.796 62.6913 20.876 62.3094C18.9561 61.9275 17.1924 60.9849 15.8082 59.6007C14.424 58.2164 13.4813 56.4528 13.0994 54.5328C12.7175 52.6129 12.9135 50.6228 13.6626 48.8142C14.4117 47.0056 15.6803 45.4598 17.308 44.3722C18.9357 43.2846 20.8493 42.7041 22.8069 42.7041L32.7047 42.7039Z"
                                    stroke="#9397AD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                    d="M42.6023 42.7042C48.0687 42.7042 52.5001 38.2728 52.5001 32.8064C52.5001 27.3401 48.0687 22.9087 42.6023 22.9087C37.136 22.9087 32.7046 27.3401 32.7046 32.8064C32.7046 38.2728 37.136 42.7042 42.6023 42.7042Z"
                                    stroke="#2E90FA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <h6 className="text-lg text-gray-800 font-medium group-hover:text-blue-500 mt-[28px] mb-3"> Figma Ready </h6>
                            <p className="text-sm text-gray-500"> The best SEO practices achieve higher rankings on Google. </p>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default HomeCategory
