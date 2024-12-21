'use client'; // Cette directive permet à ce composant d'utiliser React Hooks

import Link from 'next/link'; // Utilisation du composant Link pour la navigation
import Image from "next/image"; // Importation de l'image pour le logo
import { useState } from 'react';
import { MdApi, MdPerson4, MdSettings } from 'react-icons/md';
import { FaSyncAlt } from 'react-icons/fa';

export default function Sidebar() {
    // État pour gérer la page active
    const [activePage, setActivePage] = useState('/dashboard');

    const handleActivePage = (page) => {
        setActivePage(page); // Met à jour la page active
    };

    return (
        <div id="dashboard-sidebar"
            className="dashboard-sidebar ps z-50 w-64 transition-all bg-gray-800  text-gray-100 fixed lg:left-0 top-0 -left-64 h-full">

            <Link href="/dashboard" className="px-6 p-8 flex items-center">
                <img className="w-7 h-7 mr-2" src="assets/img/logo.png" alt="Logo" />
                <p className="text-lg font-semibold">Manager APP</p>
            </Link>
            <div className="p-6 min-h-[85%]">
                <ul className="mb-10">
                    <p className="uppercase text-gray-500 mb-3 text-sm ml-4">Pages</p>

                    <li className={`sidebar-link flex items-center mb-2 ${activePage === '/dashboard' ? 'bg-gray-700 text-blue-500' : ''}`}>
                        <Link
                            href="/dashboard"
                            className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500 flex-1"
                            onClick={() => handleActivePage('/dashboard')}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.14285 2C8.08928 2 8.85714 2.74618 8.85714 3.66667V9.22222C8.85714 10.1424 8.08928 10.8889 7.14285 10.8889H3.71428C2.7675 10.8889 2 10.1424 2 9.22222V3.66667C2 2.74618 2.7675 2 3.71428 2H7.14285ZM7.14285 13.1111C8.08928 13.1111 8.85714 13.8576 8.85714 14.7778V15.8889C8.85714 16.809 8.08928 17.5556 7.14285 17.5556H3.71428C2.7675 17.5556 2 16.809 2 15.8889V14.7778C2 13.8576 2.7675 13.1111 3.71428 13.1111H7.14285Z" fill="currentColor"></path>
                            </svg> Tableau de bord
                        </Link>
                    </li>

                    {/* Autres liens du sidebar */}
                    <li className={`sidebar-link flex items-center mb-2 ${activePage === '/dashboard/users' ? 'bg-gray-700 text-blue-500' : ''}`}>
                        <Link
                            href="/dashboard/users"
                            className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500 flex-1"
                            onClick={() => handleActivePage('/dashboard/users')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="mr-2 w-4 h-4">
                                <path
                                    d="M377.7 338.8l37.15-92.87C419 235.4 411.3 224 399.1 224h-57.48C348.5 209.2 352 193 352 176c0-4.117-.8359-8.057-1.217-12.08C390.7 155.1 416 142.3 416 128c0-16.08-31.75-30.28-80.31-38.99C323.8 45.15 304.9 0 277.4 0c-10.38 0-19.62 4.5-27.38 10.5c-15.25 11.88-36.75 11.88-52 0C190.3 4.5 181.1 0 170.7 0C143.2 0 124.4 45.16 112.5 88.98C63.83 97.68 32 111.9 32 128c0 14.34 25.31 27.13 65.22 35.92C96.84 167.9 96 171.9 96 176C96 193 99.47 209.2 105.5 224H48.02C36.7 224 28.96 235.4 33.16 245.9l37.15 92.87C27.87 370.4 0 420.4 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 420.4 420.1 370.4 377.7 338.8zM176 479.1L128 288l64 32l16 32L176 479.1zM271.1 479.1L240 352l16-32l64-32L271.1 479.1zM320 186C320 207 302.8 224 281.6 224h-12.33c-16.46 0-30.29-10.39-35.63-24.99C232.1 194.9 228.4 192 224 192S215.9 194.9 214.4 199C209 213.6 195.2 224 178.8 224h-12.33C145.2 224 128 207 128 186V169.5C156.3 173.6 188.1 176 224 176s67.74-2.383 96-6.473V186z"
                                    fill="currentColor"></path>
                            </svg> Utilisateurs
                        </Link>
                    </li>

                    <li className={`sidebar-link flex items-center mb-2 ${activePage === '/dashboard/messages' ? 'bg-gray-700 text-blue-500' : ''}`}>
                        <Link
                            href="/dashboard/messages"
                            className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500 flex-1"
                            onClick={() => handleActivePage('/dashboard/messages')}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-2 w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.9 12.4039C10.9 10.0389 12.7141 8.12022 14.95 8.12022C17.1859 8.12022 19 10.0389 19 12.4039C19 14.7688 17.1859 16.6875 14.95 16.6875C12.7141 16.6875 10.9 14.7688 10.9 12.4039ZM16.8428 11.7881C17.02 11.6037 17.02 11.3002 16.8428 11.1158C16.6684 10.9284 16.3816 10.9284 16.2072 11.1158L14.5 12.9215L13.6928 12.0677C13.5184 11.8803 13.2316 11.8803 13.0572 12.0677C12.88 12.2522 12.88 12.5556 13.0572 12.74L14.1822 13.9299C14.3566 14.1173 14.6434 14.1173 14.8178 13.9299L16.8428 11.7881Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M1 5.74038C1 4.95178 1.60441 4.3125 2.35 4.3125H14.05C14.7953 4.3125 15.4 4.95178 15.4 5.74038C15.4 6.18957 15.2003 6.61199 14.86 6.88269L14.4691 7.19207C12.5959 7.38245 11.0266 8.67945 10.3544 10.4584L8.74 11.7375C8.41938 11.9904 7.98063 11.9904 7.66 11.7375L1.54 6.88269C1.20005 6.61199 1 6.18957 1 5.74038ZM10 12.4038C10 13.6681 10.4247 14.8313 11.1306 15.7356H2.8C1.80578 15.7356 1 14.8818 1 13.8317V7.64423L7.12 12.499C7.76125 13.0077 8.63875 13.0077 9.28 12.499L10.0225 11.91C10.0084 12.0736 10 12.2373 10 12.4038Z"
                                    fill="#D0D5DD"></path>
                            </svg> Messages
                        </Link>
                    </li>


                    <li className={`sidebar-link flex items-center mb-2 ${activePage === '/dashboard/pricing' ? 'bg-gray-700 text-blue-500' : ''}`}>
                        <Link
                            href="/dashboard/pricing"
                            className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500 flex-1"
                            onClick={() => handleActivePage('/dashboard/pricing')}
                        >
                            <FaSyncAlt className="inline-block mr-2" /> Recharge
                        </Link>
                    </li>



                    <li className={`sidebar-link flex items-center mb-2 ${activePage === '/dashboard/settings' ? 'bg-gray-700 text-blue-500' : ''}`}>
                        <Link
                            href="/dashboard/settings"
                            className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500 flex-1"
                            onClick={() => handleActivePage('/dashboard/settings')}
                        >
                            <MdSettings /> Paramètre
                        </Link>
                    </li>


                    <li className={`sidebar-link flex items-center mb-2 ${activePage === '/dashboard/documentation' ? 'bg-gray-700 text-blue-500' : ''}`}>
                        <Link
                            href="/dashboard/documentation"
                            className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500 flex-1"
                            onClick={() => handleActivePage('/dashboard/documentation')}
                        >
                            <MdApi /> Documentation
                        </Link>
                    </li>


                    <li className={`sidebar-link flex items-center mb-2 ${activePage === '/dashboard/profile' ? 'bg-gray-700 text-blue-500' : ''}`}>
                        <Link
                            href="/dashboard/profile"
                            className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-700 hover:text-blue-500 flex-1"
                            onClick={() => handleActivePage('/dashboard/profile')}
                        >
                            <MdPerson4 /> Profile
                        </Link>
                    </li>

                </ul>
            </div>
            <div className="p-6 mt-auto">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full border border-white" src="assets/img/faces/2.jpg" alt="" />
                    <div className="ml-2">
                        <h6 className="text-base font-semibold">Gage Paquette</h6>
                        <p className="text-sm font-normal text-gray-300"> gagep@accommo.com </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
