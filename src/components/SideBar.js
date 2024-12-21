// src/components/Sidebar.js
import Link from "next/link"; // Utilisation du composant Link pour la navigation

export default function Sidebar() {
    return (
        <div id="dashboard-sidebar"
            class="dashboard-sidebar ps z-50 w-64 transition-all bg-gray-800 dark:bg-foreground text-gray-100 fixed lg:left-0 top-0 -left-64 h-full">
            <Link href="dashboard" class="px-6 p-8 flex items-center">
                <img class="w-7 h-7 mr-2" src="assets/img/logo.png" alt="" />
                <p class="text-lg font-semibold">Manager APP</p>
            </Link>
            <div class="p-6 min-h-[85%]">
                <ul class="mb-10">
                    <p class="uppercase text-gray-500 mb-3 text-sm ml-4">pages</p>
                    <li data-active-page="dashboard" data-page-name="dashboard" class="sidebar-link flex items-center mb-2">
                        <Link href="dashboard-home.html"
                            class="flex items-center hover:bg-gray-700 hover:text-blue-500 flex-1 py-2 px-3 rounded-lg">
                            <svg width="20" height="20" viewbox="0 0 20 20" fill="none" class="mr-2 w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.14285 2C8.08928 2 8.85714 2.74618 8.85714 3.66667V9.22222C8.85714 10.1424 8.08928 10.8889 7.14285 10.8889H3.71428C2.7675 10.8889 2 10.1424 2 9.22222V3.66667C2 2.74618 2.7675 2 3.71428 2H7.14285ZM7.14285 13.1111C8.08928 13.1111 8.85714 13.8576 8.85714 14.7778V15.8889C8.85714 16.809 8.08928 17.5556 7.14285 17.5556H3.71428C2.7675 17.5556 2 16.809 2 15.8889V14.7778C2 13.8576 2.7675 13.1111 3.71428 13.1111H7.14285Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M16.2857 2C17.2321 2 18 2.74618 18 3.66667V4.77778C18 5.69792 17.2321 6.44444 16.2857 6.44444H12.8571C11.9107 6.44444 11.1429 5.69792 11.1429 4.77778V3.66667C11.1429 2.74618 11.9107 2 12.8571 2H16.2857ZM16.2857 8.66667C17.2321 8.66667 18 9.41319 18 10.3333V15.8889C18 16.809 17.2321 17.5556 16.2857 17.5556H12.8571C11.9107 17.5556 11.1429 16.809 11.1429 15.8889V10.3333C11.1429 9.41319 11.9107 8.66667 12.8571 8.66667H16.2857Z"
                                    fill="#B2DDFF"></path>
                            </svg> Tableau de bord </Link>
                    </li>
                    
                    
                    <li data-active-page="dashboard" data-page-name="agent-list" class="sidebar-link flex items-center mb-2">
                        <Link href="dashboard-agent-list.html"
                            class="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 448 512" class="mr-2 w-4 h-4">
                                <path
                                    d="M377.7 338.8l37.15-92.87C419 235.4 411.3 224 399.1 224h-57.48C348.5 209.2 352 193 352 176c0-4.117-.8359-8.057-1.217-12.08C390.7 155.1 416 142.3 416 128c0-16.08-31.75-30.28-80.31-38.99C323.8 45.15 304.9 0 277.4 0c-10.38 0-19.62 4.5-27.38 10.5c-15.25 11.88-36.75 11.88-52 0C190.3 4.5 181.1 0 170.7 0C143.2 0 124.4 45.16 112.5 88.98C63.83 97.68 32 111.9 32 128c0 14.34 25.31 27.13 65.22 35.92C96.84 167.9 96 171.9 96 176C96 193 99.47 209.2 105.5 224H48.02C36.7 224 28.96 235.4 33.16 245.9l37.15 92.87C27.87 370.4 0 420.4 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 420.4 420.1 370.4 377.7 338.8zM176 479.1L128 288l64 32l16 32L176 479.1zM271.1 479.1L240 352l16-32l64-32L271.1 479.1zM320 186C320 207 302.8 224 281.6 224h-12.33c-16.46 0-30.29-10.39-35.63-24.99C232.1 194.9 228.4 192 224 192S215.9 194.9 214.4 199C209 213.6 195.2 224 178.8 224h-12.33C145.2 224 128 207 128 186V169.5C156.3 173.6 188.1 176 224 176s67.74-2.383 96-6.473V186z"
                                    fill="currentColor"></path>
                            </svg> Utilisateurs </Link>
                    </li>
                    <li data-active-page="dashboard" data-page-name="all-listing" class="sidebar-link flex items-center mb-2">
                        <Link href="dashboard-all-listing.html"
                            class="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512" class="mr-2 w-4 h-4">
                                <path
                                    d="M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05 160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08 101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43 316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4 229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64 256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3 238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160 398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z"
                                    fill="currentColor"></path>
                            </svg> All Listing </Link>
                    </li>
                    
                    <li data-active-page="dashboard" data-page-name="messages" class="sidebar-link flex items-center mb-2">
                        <Link href="dashboard-messages.html"
                            class="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
                            <svg width="20" height="20" viewbox="0 0 20 20" fill="none" class="mr-2 w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.9 12.4039C10.9 10.0389 12.7141 8.12022 14.95 8.12022C17.1859 8.12022 19 10.0389 19 12.4039C19 14.7688 17.1859 16.6875 14.95 16.6875C12.7141 16.6875 10.9 14.7688 10.9 12.4039ZM16.8428 11.7881C17.02 11.6037 17.02 11.3002 16.8428 11.1158C16.6684 10.9284 16.3816 10.9284 16.2072 11.1158L14.5 12.9215L13.6928 12.0677C13.5184 11.8803 13.2316 11.8803 13.0572 12.0677C12.88 12.2522 12.88 12.5556 13.0572 12.74L14.1822 13.9299C14.3566 14.1173 14.6434 14.1173 14.8178 13.9299L16.8428 11.7881Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M1 5.74038C1 4.95178 1.60441 4.3125 2.35 4.3125H14.05C14.7953 4.3125 15.4 4.95178 15.4 5.74038C15.4 6.18957 15.2003 6.61199 14.86 6.88269L14.4691 7.19207C12.5959 7.38245 11.0266 8.67945 10.3544 10.4584L8.74 11.7375C8.41938 11.9904 7.98063 11.9904 7.66 11.7375L1.54 6.88269C1.20005 6.61199 1 6.18957 1 5.74038ZM10 12.4038C10 13.6681 10.4247 14.8313 11.1306 15.7356H2.8C1.80578 15.7356 1 14.8818 1 13.8317V7.64423L7.12 12.499C7.76125 13.0077 8.63875 13.0077 9.28 12.499L10.0225 11.91C10.0084 12.0736 10 12.2373 10 12.4038Z"
                                    fill="#D0D5DD"></path>
                            </svg> Messages </Link>
                    </li>
                    
                </ul>
                <ul class="mb-10">
                    <p class="uppercase text-gray-500 mb-3 text-sm ml-4">Compte</p>
                    <li data-active-page="dashboard" data-page-name="profile" class="sidebar-link flex items-center mb-2">
                        <Link href="dashboard-myprofile.html"
                            class="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
                            <svg width="20" height="20" viewbox="0 0 20 20" fill="none" class="mr-2 w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.8296 11.6H8.57036C5.49461 11.6 3 13.988 3 16.9331C3 17.5221 3.49886 18 4.11407 18H16.2866C16.9018 18.0009 17.4 17.5239 17.4 16.9331C17.4 13.988 14.9057 11.6 11.8296 11.6Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M14.2 6C14.2 8.20906 12.4094 10 10.2 10C7.99064 10 6.20001 8.20937 6.20001 6C6.20001 3.79063 7.99095 2 10.2 2C12.4094 2 14.2 3.79094 14.2 6Z"
                                    fill="#D0D5DD"></path>
                            </svg> Profile </Link>
                    </li>
                    <li data-active-page="dashboard" data-page-name="purchase" class="sidebar-link flex items-center mb-2">
                        <Link href="#" class="flex items-center flex-1 py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500">
                            <svg width="20" height="20" viewbox="0 0 20 20" fill="none" class="mr-2 w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.7545 10.6395L13.8409 15.7537C13.6031 16.0011 13.2544 16.0687 12.9543 15.9265C12.6542 15.7837 12.4596 15.4576 12.4596 15.0973L12.4564 12.4236L8.09183 12.4236C7.48863 12.4236 7 11.8847 7 11.2202V8.81353C7 8.14906 7.48897 7.61018 8.09183 7.61018L12.4564 7.61022L12.4596 4.90268C12.4596 4.5425 12.6542 4.21639 12.9543 4.07349C13.2545 3.93131 13.6032 3.99889 13.8409 4.24625L18.7545 9.36049C19.0818 9.66554 19.0818 10.2973 18.7545 10.6395Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M4.5 18H6.83333C7.47865 18 8 17.4893 8 16.8571C8 16.225 7.47865 15.7143 6.83333 15.7143H4.5C3.85578 15.7143 3.33333 15.2025 3.33333 14.5714V5.42857C3.33333 4.7975 3.85578 4.28571 4.5 4.28571H6.83333C7.47865 4.28571 8 3.77393 8 3.14286C8 2.51179 7.47865 2 6.83333 2H4.5C2.56698 2 1 3.535 1 5.42857V14.5714C1 16.4643 2.56698 18 4.5 18Z"
                                    fill="#D0D5DD"></path>
                            </svg> Déconnexion </Link>
                    </li>
                </ul>
            </div>
            <div class="p-6 mt-auto">
                <div class="flex items-center">
                    <img class="w-10 h-10 rounded-full border border-white" src="assets/img/faces/2.jpg" alt="" />
                    <div class="ml-2">
                        <h6 class="text-base font-semibold">Gage Paquette</h6>
                        <p class="text-sm font-normal text-gray-300"> gagep@accommo.com </p>
                    </div>
                </div>
            </div>
        </div>

    );
}
