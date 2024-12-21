import React from 'react'

export default function DashboardOverview() {
    return (
        <>

            <div
                className="xl:col-span-2 lg:col-span-4 col-span-1 rounded-lg shadow-front-2 flex justify-between items-center cursor-pointer hover:bg-blue-500 group p-6">
                <div className="">
                    <p className="text-base group-hover:text-white text-gray-500  mb-2 font-medium"> Active
                        Listings </p>
                    <h5 className="text-gray-700 group-hover:text-white font-semibold text-3xl"> 22 </h5>
                </div>
                <div className="bg-gray-100 group-hover:bg-white  rounded-full p-3">
                    <svg width="32" height="33" viewbox="0 0 32 33" fill="currentColor"
                        className="w-8 h-8  text-gray-700 group-hover:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.62222 12.5533V22.708C4.62222 23.5104 5.25911 24.1587 6.04445 24.1587H15.4311C15.6889 24.6755 16.0044 25.1651 16.3644 25.6093H6.04445C4.47333 25.6093 3.2 24.3083 3.2 22.708V12.4445C3.2 12.0365 3.28351 11.6376 3.44516 11.2659L5.29378 7.02312C5.75022 5.97501 6.76889 5.3 7.89333 5.3H18.4178C19.5422 5.3 20.56 5.97547 21.0178 7.02312L22.8667 11.2659C23.0267 11.6376 23.1111 12.0365 23.1111 12.4445V12.5533H4.62222ZM13.8667 11.1027H21.24L19.72 7.612C19.4889 7.0884 18.9822 6.75067 18.4178 6.75067H13.8667V11.1027ZM12.4444 6.75067H7.89333C7.33111 6.75067 6.82178 7.0884 6.59333 7.612L5.07245 11.1027H12.4444V6.75067ZM25.3911 18.5691C25.6711 18.8501 25.6711 19.3125 25.3911 19.5936L22.1911 22.8576C21.9156 23.1432 21.4622 23.1432 21.1867 22.8576L19.4089 21.0443C19.1289 20.7632 19.1289 20.3008 19.4089 20.0197C19.6844 19.7341 20.1378 19.7341 20.4133 20.0197L21.6889 21.3208L24.3867 18.5691C24.6622 18.2835 25.1156 18.2835 25.3911 18.5691ZM16 20.532C16 16.928 18.8667 14.004 22.4 14.004C25.9333 14.004 28.8 16.928 28.8 20.532C28.8 24.136 25.9333 27.06 22.4 27.06C18.8667 27.06 16 24.136 16 20.532ZM22.4 25.6093C25.1511 25.6093 27.3778 23.3381 27.3778 20.532C27.3778 17.7259 25.1511 15.4547 22.4 15.4547C19.6489 15.4547 17.4222 17.7259 17.4222 20.532C17.4222 23.3381 19.6489 25.6093 22.4 25.6093Z"
                            fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <div
                className="xl:col-span-2 lg:col-span-4 col-span-1  rounded-lg shadow-front-2 flex justify-between items-center cursor-pointer hover:bg-blue-500  group p-6">
                <div className="">
                    <p className="text-base group-hover:text-white text-gray-500  mb-2 font-medium"> Total
                        Views </p>
                    <h5 className="text-gray-700 group-hover:text-white  font-semibold text-3xl"> 1.2k </h5>
                </div>
                <div className="bg-gray-100 group-hover:bg-white  p-3">
                    <svg width="32" height="33" viewbox="0 0 32 33" fill="none"
                        className="w-8 h-8  text-gray-700 group-hover:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.8 23.7C4.8 25.025 5.8745 26.1 7.2 26.1H28C28.44 26.1 28.8 26.46 28.8 26.9C28.8 27.34 28.44 27.7 28 27.7H7.2C4.991 27.7 3.2 25.91 3.2 23.7V6.1C3.2 5.658 3.5582 5.3 4 5.3C4.442 5.3 4.8 5.658 4.8 6.1V23.7ZM19.765 18.665C19.455 18.98 18.945 18.98 18.635 18.665L14.355 14.43L9.365 19.465C9.055 19.78 8.545 19.78 8.235 19.465C7.922 19.155 7.922 18.645 8.235 18.335L13.835 12.735C14.145 12.42 14.655 12.42 14.965 12.735L19.2 16.97L25.835 10.335C26.145 10.02 26.655 10.02 26.965 10.335C27.28 10.645 27.28 11.155 26.965 11.465L19.765 18.665Z"
                            fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <div
                className="xl:col-span-2 lg:col-span-4 col-span-1  rounded-lg shadow-front-2 flex justify-between items-center cursor-pointer hover:bg-blue-500 group p-6">
                <div className="">
                    <p className="text-base group-hover:text-white text-gray-500  mb-2 font-medium"> Total
                        Reviews </p>
                    <h5 className="text-gray-700 group-hover:text-white  font-semibold text-3xl"> 395 </h5>
                </div>
                <div className="bg-gray-100 group-hover:bg-white  rounded-full p-3">
                    <svg width="32" height="33" viewbox="0 0 32 33" fill="currentColor"
                        className="w-8 h-8  text-gray-700 group-hover:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-outside-1_1440_8191" maskunits="userSpaceOnUse" x="2.19995" y="7.5" width="27"
                            height="17" fill="black">
                            <rect fill="white" x="2.19995" y="7.5" width="27" height="17"></rect>
                            <path
                                d="M28.7633 12.6604C28.7214 12.5297 28.6436 12.4135 28.5387 12.3251C28.4338 12.2367 28.3061 12.1796 28.1703 12.1604L26.3906 11.9018C26.3789 11.899 26.367 11.8966 26.3549 11.8949L25.0904 11.7111L23.7075 8.90907C23.6454 8.78605 23.5503 8.68268 23.4329 8.61045C23.3156 8.53823 23.1805 8.5 23.0426 8.5C22.9048 8.50001 22.7697 8.53825 22.6523 8.61048C22.535 8.68271 22.4399 8.78609 22.3778 8.90912L20.995 11.7111L19.7304 11.8949C19.7185 11.8966 19.7067 11.8989 19.695 11.9018L18.229 12.1148L16.7298 9.07705C16.6578 8.93123 16.5465 8.80845 16.4084 8.7226C16.2703 8.63676 16.1109 8.59126 15.9483 8.59126C15.7857 8.59126 15.6263 8.63676 15.4882 8.7226C15.3501 8.80845 15.2388 8.93123 15.1668 9.07705L13.6744 12.1009L12.3045 11.9018C12.2928 11.899 12.2809 11.8966 12.2688 11.8949L11.0043 11.7111L9.62136 8.90917C9.55926 8.78613 9.46423 8.68274 9.34686 8.6105C9.22948 8.53826 9.09436 8.50001 8.95654 8.5C8.81872 8.49999 8.68359 8.53824 8.56621 8.61047C8.44883 8.6827 8.3538 8.78608 8.29169 8.90912L6.90883 11.7111L5.64428 11.8949C5.63237 11.8966 5.62056 11.8989 5.60888 11.9018L3.82893 12.1604C3.69328 12.1801 3.56585 12.2374 3.46106 12.3257C3.35626 12.4141 3.27827 12.53 3.23591 12.6604C3.19355 12.7907 3.18851 12.9303 3.22135 13.0634C3.2542 13.1965 3.32362 13.3177 3.42177 13.4134L5.65931 15.5945L5.13106 18.6741C5.10752 18.8093 5.12235 18.9484 5.17389 19.0755C5.22543 19.2027 5.31159 19.3129 5.42261 19.3935C5.53362 19.4742 5.66503 19.5221 5.80191 19.5318C5.93879 19.5416 6.07565 19.5127 6.19694 19.4485L8.95655 17.9977L11.36 19.2613L10.8036 22.5057C10.7761 22.6659 10.794 22.8307 10.8552 22.9814C10.9165 23.132 11.0187 23.2625 11.1502 23.3581C11.2818 23.4537 11.4375 23.5106 11.5997 23.5223C11.7619 23.534 11.9241 23.5001 12.0681 23.4244L15.8904 21.4149C15.9082 21.4055 15.9281 21.4006 15.9483 21.4006C15.9685 21.4006 15.9883 21.4055 16.0062 21.4149L19.8285 23.4244C19.9724 23.5001 20.1347 23.534 20.2969 23.5223C20.4591 23.5105 20.6147 23.4537 20.7463 23.3581C20.8779 23.2625 20.9801 23.132 21.0413 22.9814C21.1026 22.8308 21.1205 22.666 21.093 22.5057L20.545 19.3105L23.0427 17.9977L25.8023 19.4485C25.9237 19.5123 26.0604 19.5409 26.1971 19.531C26.3338 19.5211 26.465 19.4731 26.5759 19.3926C26.6868 19.312 26.7729 19.202 26.8246 19.075C26.8762 18.9481 26.8913 18.8092 26.8681 18.6741L26.34 15.5944L28.5775 13.4134C28.6761 13.318 28.7458 13.1968 28.7787 13.0636C28.8116 12.9304 28.8062 12.7907 28.7633 12.6604V12.6604ZM11.5335 18.2495L11.4928 18.4871L9.29231 17.3303C9.1905 17.277 9.07763 17.2482 8.96272 17.2463C8.95864 17.2462 8.95446 17.2462 8.95037 17.2463C8.83547 17.2482 8.72261 17.277 8.62079 17.3302L5.87159 18.7756L6.39668 15.7142C6.4168 15.5969 6.40809 15.4763 6.37127 15.3631C6.33446 15.2498 6.27066 15.1472 6.18537 15.0641L3.96126 12.896L5.75225 12.6358C5.76416 12.6341 5.77597 12.6318 5.78765 12.6289L7.02267 12.4494C7.14055 12.4323 7.2525 12.3868 7.34887 12.3168C7.44524 12.2468 7.52313 12.1544 7.57582 12.0475L8.95655 9.24994L10.3372 12.0475C10.3899 12.1543 10.4678 12.2467 10.5642 12.3167C10.6605 12.3867 10.7725 12.4323 10.8904 12.4494L12.1251 12.6288C12.1369 12.6317 12.1487 12.634 12.1609 12.6358L13.3268 12.8052L13.2556 12.9494C13.2467 12.9675 13.2335 12.9832 13.2172 12.9951C13.2008 13.0069 13.1819 13.0147 13.1619 13.0176L8.88841 13.6386C8.72749 13.6619 8.57631 13.7299 8.45198 13.8347C8.32766 13.9395 8.23513 14.077 8.18488 14.2317C8.13463 14.3863 8.12865 14.552 8.16762 14.7099C8.20659 14.8677 8.28895 15.0116 8.4054 15.1251L11.4978 18.1394C11.5122 18.1535 11.523 18.1709 11.5292 18.19C11.5355 18.2092 11.5369 18.2297 11.5335 18.2495V18.2495ZM20.3072 22.7537C20.2887 22.768 20.2664 22.7764 20.2431 22.7781C20.2198 22.7798 20.1965 22.7746 20.1761 22.7632L16.3539 20.7538C16.2288 20.688 16.0896 20.6536 15.9483 20.6535C15.807 20.6535 15.6678 20.6879 15.5427 20.7537L11.7205 22.7632C11.6999 22.774 11.6767 22.7789 11.6536 22.7772C11.6304 22.7755 11.6081 22.7674 11.5893 22.7537C11.5705 22.7401 11.5559 22.7214 11.5472 22.6999C11.5384 22.6784 11.5358 22.6549 11.5398 22.632L12.2697 18.3758C12.2937 18.2366 12.2833 18.0936 12.2397 17.9592C12.196 17.8248 12.1203 17.703 12.0191 17.6044L8.92683 14.5902C8.91019 14.574 8.89842 14.5534 8.89285 14.5309C8.88728 14.5083 8.88813 14.4846 8.8953 14.4625C8.90248 14.4404 8.91569 14.4208 8.93345 14.4058C8.95121 14.3908 8.9728 14.3811 8.99579 14.3778L13.2693 13.7568C13.4092 13.7365 13.5419 13.6825 13.6562 13.5994C13.7705 13.5164 13.8629 13.4068 13.9255 13.2801L15.8366 9.40765C15.8469 9.38682 15.8628 9.36928 15.8826 9.35701C15.9023 9.34475 15.925 9.33825 15.9483 9.33825C15.9715 9.33825 15.9943 9.34475 16.014 9.35701C16.0337 9.36928 16.0496 9.38682 16.0599 9.40765L17.971 13.28C18.0335 13.4067 18.126 13.5164 18.2403 13.5994C18.3546 13.6825 18.4874 13.7365 18.6273 13.7568L22.9007 14.3778C22.9237 14.3811 22.9453 14.3908 22.9631 14.4058C22.9808 14.4208 22.994 14.4404 23.0012 14.4625C23.0084 14.4846 23.0092 14.5083 23.0037 14.5308C22.9981 14.5534 22.9863 14.5739 22.9697 14.5902L19.8774 17.6044C19.7762 17.703 19.7005 17.8248 19.6569 17.9591C19.6132 18.0935 19.6029 18.2365 19.6268 18.3758L19.7633 19.1719C19.7635 19.1729 19.7636 19.1739 19.7638 19.1749L20.3567 22.632C20.3613 22.6549 20.359 22.6786 20.3502 22.7003C20.3414 22.7219 20.3264 22.7405 20.3072 22.7537V22.7537ZM25.8139 15.0641C25.7286 15.1472 25.6648 15.2498 25.628 15.3631C25.5912 15.4763 25.5825 15.5969 25.6026 15.7143L26.1276 18.7756L23.3785 17.3303C23.2767 17.277 23.1638 17.2482 23.0489 17.2463C23.0448 17.2462 23.0406 17.2462 23.0365 17.2463C22.9216 17.2482 22.8088 17.277 22.707 17.3302L20.4122 18.5364L20.363 18.2496C20.3596 18.2297 20.3611 18.2092 20.3673 18.19C20.3735 18.1708 20.3843 18.1534 20.3988 18.1393L23.4911 15.1251C23.6076 15.0116 23.6899 14.8677 23.7289 14.7099C23.7679 14.552 23.7619 14.3863 23.7117 14.2317C23.6614 14.077 23.5689 13.9395 23.4446 13.8347C23.3202 13.7299 23.169 13.6619 23.0081 13.6386L18.7347 13.0176C18.7147 13.0147 18.6958 13.007 18.6794 12.9951C18.6631 12.9832 18.6499 12.9676 18.6409 12.9495L18.5766 12.8191L19.8384 12.6358C19.8503 12.6341 19.8621 12.6318 19.8738 12.6289L21.1088 12.4494C21.2267 12.4323 21.3386 12.3868 21.435 12.3168C21.5314 12.2468 21.6093 12.1544 21.662 12.0475L23.0427 9.24989L24.4234 12.0475C24.476 12.1543 24.5539 12.2467 24.6503 12.3167C24.7467 12.3867 24.8586 12.4323 24.9765 12.4494L26.2112 12.6288C26.223 12.6317 26.2349 12.634 26.247 12.6358L28.038 12.8961L25.8139 15.0641Z">
                            </path>
                        </mask>
                        <path
                            d="M28.7633 12.6604C28.7214 12.5297 28.6436 12.4135 28.5387 12.3251C28.4338 12.2367 28.3061 12.1796 28.1703 12.1604L26.3906 11.9018C26.3789 11.899 26.367 11.8966 26.3549 11.8949L25.0904 11.7111L23.7075 8.90907C23.6454 8.78605 23.5503 8.68268 23.4329 8.61045C23.3156 8.53823 23.1805 8.5 23.0426 8.5C22.9048 8.50001 22.7697 8.53825 22.6523 8.61048C22.535 8.68271 22.4399 8.78609 22.3778 8.90912L20.995 11.7111L19.7304 11.8949C19.7185 11.8966 19.7067 11.8989 19.695 11.9018L18.229 12.1148L16.7298 9.07705C16.6578 8.93123 16.5465 8.80845 16.4084 8.7226C16.2703 8.63676 16.1109 8.59126 15.9483 8.59126C15.7857 8.59126 15.6263 8.63676 15.4882 8.7226C15.3501 8.80845 15.2388 8.93123 15.1668 9.07705L13.6744 12.1009L12.3045 11.9018C12.2928 11.899 12.2809 11.8966 12.2688 11.8949L11.0043 11.7111L9.62136 8.90917C9.55926 8.78613 9.46423 8.68274 9.34686 8.6105C9.22948 8.53826 9.09436 8.50001 8.95654 8.5C8.81872 8.49999 8.68359 8.53824 8.56621 8.61047C8.44883 8.6827 8.3538 8.78608 8.29169 8.90912L6.90883 11.7111L5.64428 11.8949C5.63237 11.8966 5.62056 11.8989 5.60888 11.9018L3.82893 12.1604C3.69328 12.1801 3.56585 12.2374 3.46106 12.3257C3.35626 12.4141 3.27827 12.53 3.23591 12.6604C3.19355 12.7907 3.18851 12.9303 3.22135 13.0634C3.2542 13.1965 3.32362 13.3177 3.42177 13.4134L5.65931 15.5945L5.13106 18.6741C5.10752 18.8093 5.12235 18.9484 5.17389 19.0755C5.22543 19.2027 5.31159 19.3129 5.42261 19.3935C5.53362 19.4742 5.66503 19.5221 5.80191 19.5318C5.93879 19.5416 6.07565 19.5127 6.19694 19.4485L8.95655 17.9977L11.36 19.2613L10.8036 22.5057C10.7761 22.6659 10.794 22.8307 10.8552 22.9814C10.9165 23.132 11.0187 23.2625 11.1502 23.3581C11.2818 23.4537 11.4375 23.5106 11.5997 23.5223C11.7619 23.534 11.9241 23.5001 12.0681 23.4244L15.8904 21.4149C15.9082 21.4055 15.9281 21.4006 15.9483 21.4006C15.9685 21.4006 15.9883 21.4055 16.0062 21.4149L19.8285 23.4244C19.9724 23.5001 20.1347 23.534 20.2969 23.5223C20.4591 23.5105 20.6147 23.4537 20.7463 23.3581C20.8779 23.2625 20.9801 23.132 21.0413 22.9814C21.1026 22.8308 21.1205 22.666 21.093 22.5057L20.545 19.3105L23.0427 17.9977L25.8023 19.4485C25.9237 19.5123 26.0604 19.5409 26.1971 19.531C26.3338 19.5211 26.465 19.4731 26.5759 19.3926C26.6868 19.312 26.7729 19.202 26.8246 19.075C26.8762 18.9481 26.8913 18.8092 26.8681 18.6741L26.34 15.5944L28.5775 13.4134C28.6761 13.318 28.7458 13.1968 28.7787 13.0636C28.8116 12.9304 28.8062 12.7907 28.7633 12.6604V12.6604ZM11.5335 18.2495L11.4928 18.4871L9.29231 17.3303C9.1905 17.277 9.07763 17.2482 8.96272 17.2463C8.95864 17.2462 8.95446 17.2462 8.95037 17.2463C8.83547 17.2482 8.72261 17.277 8.62079 17.3302L5.87159 18.7756L6.39668 15.7142C6.4168 15.5969 6.40809 15.4763 6.37127 15.3631C6.33446 15.2498 6.27066 15.1472 6.18537 15.0641L3.96126 12.896L5.75225 12.6358C5.76416 12.6341 5.77597 12.6318 5.78765 12.6289L7.02267 12.4494C7.14055 12.4323 7.2525 12.3868 7.34887 12.3168C7.44524 12.2468 7.52313 12.1544 7.57582 12.0475L8.95655 9.24994L10.3372 12.0475C10.3899 12.1543 10.4678 12.2467 10.5642 12.3167C10.6605 12.3867 10.7725 12.4323 10.8904 12.4494L12.1251 12.6288C12.1369 12.6317 12.1487 12.634 12.1609 12.6358L13.3268 12.8052L13.2556 12.9494C13.2467 12.9675 13.2335 12.9832 13.2172 12.9951C13.2008 13.0069 13.1819 13.0147 13.1619 13.0176L8.88841 13.6386C8.72749 13.6619 8.57631 13.7299 8.45198 13.8347C8.32766 13.9395 8.23513 14.077 8.18488 14.2317C8.13463 14.3863 8.12865 14.552 8.16762 14.7099C8.20659 14.8677 8.28895 15.0116 8.4054 15.1251L11.4978 18.1394C11.5122 18.1535 11.523 18.1709 11.5292 18.19C11.5355 18.2092 11.5369 18.2297 11.5335 18.2495V18.2495ZM20.3072 22.7537C20.2887 22.768 20.2664 22.7764 20.2431 22.7781C20.2198 22.7798 20.1965 22.7746 20.1761 22.7632L16.3539 20.7538C16.2288 20.688 16.0896 20.6536 15.9483 20.6535C15.807 20.6535 15.6678 20.6879 15.5427 20.7537L11.7205 22.7632C11.6999 22.774 11.6767 22.7789 11.6536 22.7772C11.6304 22.7755 11.6081 22.7674 11.5893 22.7537C11.5705 22.7401 11.5559 22.7214 11.5472 22.6999C11.5384 22.6784 11.5358 22.6549 11.5398 22.632L12.2697 18.3758C12.2937 18.2366 12.2833 18.0936 12.2397 17.9592C12.196 17.8248 12.1203 17.703 12.0191 17.6044L8.92683 14.5902C8.91019 14.574 8.89842 14.5534 8.89285 14.5309C8.88728 14.5083 8.88813 14.4846 8.8953 14.4625C8.90248 14.4404 8.91569 14.4208 8.93345 14.4058C8.95121 14.3908 8.9728 14.3811 8.99579 14.3778L13.2693 13.7568C13.4092 13.7365 13.5419 13.6825 13.6562 13.5994C13.7705 13.5164 13.8629 13.4068 13.9255 13.2801L15.8366 9.40765C15.8469 9.38682 15.8628 9.36928 15.8826 9.35701C15.9023 9.34475 15.925 9.33825 15.9483 9.33825C15.9715 9.33825 15.9943 9.34475 16.014 9.35701C16.0337 9.36928 16.0496 9.38682 16.0599 9.40765L17.971 13.28C18.0335 13.4067 18.126 13.5164 18.2403 13.5994C18.3546 13.6825 18.4874 13.7365 18.6273 13.7568L22.9007 14.3778C22.9237 14.3811 22.9453 14.3908 22.9631 14.4058C22.9808 14.4208 22.994 14.4404 23.0012 14.4625C23.0084 14.4846 23.0092 14.5083 23.0037 14.5308C22.9981 14.5534 22.9863 14.5739 22.9697 14.5902L19.8774 17.6044C19.7762 17.703 19.7005 17.8248 19.6569 17.9591C19.6132 18.0935 19.6029 18.2365 19.6268 18.3758L19.7633 19.1719C19.7635 19.1729 19.7636 19.1739 19.7638 19.1749L20.3567 22.632C20.3613 22.6549 20.359 22.6786 20.3502 22.7003C20.3414 22.7219 20.3264 22.7405 20.3072 22.7537V22.7537ZM25.8139 15.0641C25.7286 15.1472 25.6648 15.2498 25.628 15.3631C25.5912 15.4763 25.5825 15.5969 25.6026 15.7143L26.1276 18.7756L23.3785 17.3303C23.2767 17.277 23.1638 17.2482 23.0489 17.2463C23.0448 17.2462 23.0406 17.2462 23.0365 17.2463C22.9216 17.2482 22.8088 17.277 22.707 17.3302L20.4122 18.5364L20.363 18.2496C20.3596 18.2297 20.3611 18.2092 20.3673 18.19C20.3735 18.1708 20.3843 18.1534 20.3988 18.1393L23.4911 15.1251C23.6076 15.0116 23.6899 14.8677 23.7289 14.7099C23.7679 14.552 23.7619 14.3863 23.7117 14.2317C23.6614 14.077 23.5689 13.9395 23.4446 13.8347C23.3202 13.7299 23.169 13.6619 23.0081 13.6386L18.7347 13.0176C18.7147 13.0147 18.6958 13.007 18.6794 12.9951C18.6631 12.9832 18.6499 12.9676 18.6409 12.9495L18.5766 12.8191L19.8384 12.6358C19.8503 12.6341 19.8621 12.6318 19.8738 12.6289L21.1088 12.4494C21.2267 12.4323 21.3386 12.3868 21.435 12.3168C21.5314 12.2468 21.6093 12.1544 21.662 12.0475L23.0427 9.24989L24.4234 12.0475C24.476 12.1543 24.5539 12.2467 24.6503 12.3167C24.7467 12.3867 24.8586 12.4323 24.9765 12.4494L26.2112 12.6288C26.223 12.6317 26.2349 12.634 26.247 12.6358L28.038 12.8961L25.8139 15.0641Z"
                            fill="currentColor"></path>
                        <path
                            d="M28.7633 12.6604C28.7214 12.5297 28.6436 12.4135 28.5387 12.3251C28.4338 12.2367 28.3061 12.1796 28.1703 12.1604L26.3906 11.9018C26.3789 11.899 26.367 11.8966 26.3549 11.8949L25.0904 11.7111L23.7075 8.90907C23.6454 8.78605 23.5503 8.68268 23.4329 8.61045C23.3156 8.53823 23.1805 8.5 23.0426 8.5C22.9048 8.50001 22.7697 8.53825 22.6523 8.61048C22.535 8.68271 22.4399 8.78609 22.3778 8.90912L20.995 11.7111L19.7304 11.8949C19.7185 11.8966 19.7067 11.8989 19.695 11.9018L18.229 12.1148L16.7298 9.07705C16.6578 8.93123 16.5465 8.80845 16.4084 8.7226C16.2703 8.63676 16.1109 8.59126 15.9483 8.59126C15.7857 8.59126 15.6263 8.63676 15.4882 8.7226C15.3501 8.80845 15.2388 8.93123 15.1668 9.07705L13.6744 12.1009L12.3045 11.9018C12.2928 11.899 12.2809 11.8966 12.2688 11.8949L11.0043 11.7111L9.62136 8.90917C9.55926 8.78613 9.46423 8.68274 9.34686 8.6105C9.22948 8.53826 9.09436 8.50001 8.95654 8.5C8.81872 8.49999 8.68359 8.53824 8.56621 8.61047C8.44883 8.6827 8.3538 8.78608 8.29169 8.90912L6.90883 11.7111L5.64428 11.8949C5.63237 11.8966 5.62056 11.8989 5.60888 11.9018L3.82893 12.1604C3.69328 12.1801 3.56585 12.2374 3.46106 12.3257C3.35626 12.4141 3.27827 12.53 3.23591 12.6604C3.19355 12.7907 3.18851 12.9303 3.22135 13.0634C3.2542 13.1965 3.32362 13.3177 3.42177 13.4134L5.65931 15.5945L5.13106 18.6741C5.10752 18.8093 5.12235 18.9484 5.17389 19.0755C5.22543 19.2027 5.31159 19.3129 5.42261 19.3935C5.53362 19.4742 5.66503 19.5221 5.80191 19.5318C5.93879 19.5416 6.07565 19.5127 6.19694 19.4485L8.95655 17.9977L11.36 19.2613L10.8036 22.5057C10.7761 22.6659 10.794 22.8307 10.8552 22.9814C10.9165 23.132 11.0187 23.2625 11.1502 23.3581C11.2818 23.4537 11.4375 23.5106 11.5997 23.5223C11.7619 23.534 11.9241 23.5001 12.0681 23.4244L15.8904 21.4149C15.9082 21.4055 15.9281 21.4006 15.9483 21.4006C15.9685 21.4006 15.9883 21.4055 16.0062 21.4149L19.8285 23.4244C19.9724 23.5001 20.1347 23.534 20.2969 23.5223C20.4591 23.5105 20.6147 23.4537 20.7463 23.3581C20.8779 23.2625 20.9801 23.132 21.0413 22.9814C21.1026 22.8308 21.1205 22.666 21.093 22.5057L20.545 19.3105L23.0427 17.9977L25.8023 19.4485C25.9237 19.5123 26.0604 19.5409 26.1971 19.531C26.3338 19.5211 26.465 19.4731 26.5759 19.3926C26.6868 19.312 26.7729 19.202 26.8246 19.075C26.8762 18.9481 26.8913 18.8092 26.8681 18.6741L26.34 15.5944L28.5775 13.4134C28.6761 13.318 28.7458 13.1968 28.7787 13.0636C28.8116 12.9304 28.8062 12.7907 28.7633 12.6604V12.6604ZM11.5335 18.2495L11.4928 18.4871L9.29231 17.3303C9.1905 17.277 9.07763 17.2482 8.96272 17.2463C8.95864 17.2462 8.95446 17.2462 8.95037 17.2463C8.83547 17.2482 8.72261 17.277 8.62079 17.3302L5.87159 18.7756L6.39668 15.7142C6.4168 15.5969 6.40809 15.4763 6.37127 15.3631C6.33446 15.2498 6.27066 15.1472 6.18537 15.0641L3.96126 12.896L5.75225 12.6358C5.76416 12.6341 5.77597 12.6318 5.78765 12.6289L7.02267 12.4494C7.14055 12.4323 7.2525 12.3868 7.34887 12.3168C7.44524 12.2468 7.52313 12.1544 7.57582 12.0475L8.95655 9.24994L10.3372 12.0475C10.3899 12.1543 10.4678 12.2467 10.5642 12.3167C10.6605 12.3867 10.7725 12.4323 10.8904 12.4494L12.1251 12.6288C12.1369 12.6317 12.1487 12.634 12.1609 12.6358L13.3268 12.8052L13.2556 12.9494C13.2467 12.9675 13.2335 12.9832 13.2172 12.9951C13.2008 13.0069 13.1819 13.0147 13.1619 13.0176L8.88841 13.6386C8.72749 13.6619 8.57631 13.7299 8.45198 13.8347C8.32766 13.9395 8.23513 14.077 8.18488 14.2317C8.13463 14.3863 8.12865 14.552 8.16762 14.7099C8.20659 14.8677 8.28895 15.0116 8.4054 15.1251L11.4978 18.1394C11.5122 18.1535 11.523 18.1709 11.5292 18.19C11.5355 18.2092 11.5369 18.2297 11.5335 18.2495V18.2495ZM20.3072 22.7537C20.2887 22.768 20.2664 22.7764 20.2431 22.7781C20.2198 22.7798 20.1965 22.7746 20.1761 22.7632L16.3539 20.7538C16.2288 20.688 16.0896 20.6536 15.9483 20.6535C15.807 20.6535 15.6678 20.6879 15.5427 20.7537L11.7205 22.7632C11.6999 22.774 11.6767 22.7789 11.6536 22.7772C11.6304 22.7755 11.6081 22.7674 11.5893 22.7537C11.5705 22.7401 11.5559 22.7214 11.5472 22.6999C11.5384 22.6784 11.5358 22.6549 11.5398 22.632L12.2697 18.3758C12.2937 18.2366 12.2833 18.0936 12.2397 17.9592C12.196 17.8248 12.1203 17.703 12.0191 17.6044L8.92683 14.5902C8.91019 14.574 8.89842 14.5534 8.89285 14.5309C8.88728 14.5083 8.88813 14.4846 8.8953 14.4625C8.90248 14.4404 8.91569 14.4208 8.93345 14.4058C8.95121 14.3908 8.9728 14.3811 8.99579 14.3778L13.2693 13.7568C13.4092 13.7365 13.5419 13.6825 13.6562 13.5994C13.7705 13.5164 13.8629 13.4068 13.9255 13.2801L15.8366 9.40765C15.8469 9.38682 15.8628 9.36928 15.8826 9.35701C15.9023 9.34475 15.925 9.33825 15.9483 9.33825C15.9715 9.33825 15.9943 9.34475 16.014 9.35701C16.0337 9.36928 16.0496 9.38682 16.0599 9.40765L17.971 13.28C18.0335 13.4067 18.126 13.5164 18.2403 13.5994C18.3546 13.6825 18.4874 13.7365 18.6273 13.7568L22.9007 14.3778C22.9237 14.3811 22.9453 14.3908 22.9631 14.4058C22.9808 14.4208 22.994 14.4404 23.0012 14.4625C23.0084 14.4846 23.0092 14.5083 23.0037 14.5308C22.9981 14.5534 22.9863 14.5739 22.9697 14.5902L19.8774 17.6044C19.7762 17.703 19.7005 17.8248 19.6569 17.9591C19.6132 18.0935 19.6029 18.2365 19.6268 18.3758L19.7633 19.1719C19.7635 19.1729 19.7636 19.1739 19.7638 19.1749L20.3567 22.632C20.3613 22.6549 20.359 22.6786 20.3502 22.7003C20.3414 22.7219 20.3264 22.7405 20.3072 22.7537V22.7537ZM25.8139 15.0641C25.7286 15.1472 25.6648 15.2498 25.628 15.3631C25.5912 15.4763 25.5825 15.5969 25.6026 15.7143L26.1276 18.7756L23.3785 17.3303C23.2767 17.277 23.1638 17.2482 23.0489 17.2463C23.0448 17.2462 23.0406 17.2462 23.0365 17.2463C22.9216 17.2482 22.8088 17.277 22.707 17.3302L20.4122 18.5364L20.363 18.2496C20.3596 18.2297 20.3611 18.2092 20.3673 18.19C20.3735 18.1708 20.3843 18.1534 20.3988 18.1393L23.4911 15.1251C23.6076 15.0116 23.6899 14.8677 23.7289 14.7099C23.7679 14.552 23.7619 14.3863 23.7117 14.2317C23.6614 14.077 23.5689 13.9395 23.4446 13.8347C23.3202 13.7299 23.169 13.6619 23.0081 13.6386L18.7347 13.0176C18.7147 13.0147 18.6958 13.007 18.6794 12.9951C18.6631 12.9832 18.6499 12.9676 18.6409 12.9495L18.5766 12.8191L19.8384 12.6358C19.8503 12.6341 19.8621 12.6318 19.8738 12.6289L21.1088 12.4494C21.2267 12.4323 21.3386 12.3868 21.435 12.3168C21.5314 12.2468 21.6093 12.1544 21.662 12.0475L23.0427 9.24989L24.4234 12.0475C24.476 12.1543 24.5539 12.2467 24.6503 12.3167C24.7467 12.3867 24.8586 12.4323 24.9765 12.4494L26.2112 12.6288C26.223 12.6317 26.2349 12.634 26.247 12.6358L28.038 12.8961L25.8139 15.0641Z"
                            stroke="#667085" stroke-width="0.2" mask="url(#path-1-outside-1_1440_8191)"></path>
                    </svg>
                </div>
            </div>
            <div
                className="xl:col-span-2 lg:col-span-4 col-span-1  rounded-lg shadow-front-2 flex justify-between items-center cursor-pointer hover:bg-blue-500 group p-6">
                <div className="">
                    <p className="text-base group-hover:text-white text-gray-500  mb-2 font-medium"> Favourite
                        Listings </p>
                    <h5 className="text-gray-700 group-hover:text-white font-semibold text-3xl"> 12 </h5>
                </div>
                <div className="bg-gray-100 group-hover:bg-white  rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        className="w-8 h-8  text-gray-700 group-hover:text-blue-500" viewbox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                        </path>
                    </svg>
                </div>
            </div>

        </>
    )
}
