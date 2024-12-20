'use client'; // Cette directive permet à ce composant d'utiliser React Hooks

import { useState } from 'react';
import Image from "next/image"; // Pour l'image du profil

export default function HeaderAdmin() {
    // Etat pour afficher ou masquer le modal de déconnexion
    const [showModal, setShowModal] = useState(false);

    // Etat pour afficher ou masquer le dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Fonction pour afficher/fermer le modal
    const toggleModal = () => setShowModal(!showModal);

    // Fonction pour déconnecter l'utilisateur
    const handleLogout = () => {
        console.log("Utilisateur déconnecté");
        toggleModal(); // Ferme le modal après la déconnexion
    };

    // Fonction pour gérer l'ouverture/fermeture du dropdown
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="dashboard-header transition-all duration-200 fixed lg:left-64 left-0 z-30 shadow-front-2 bg-white h-20 lg:w-[calc(100%-256px)] w-full px-7 py-4 flex flex-col justify-center dark:bg-foreground dark:text-gray-200 top-0">
            <div className="flex justify-between">
                {/* Partie gauche avec les boutons */}
                <div className="flex items-center">
                    <button type="button" className="mr-3 lg:hidden block dashboard-header-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <button type="button" className="mr-3 block dashboard-sidebar-control">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    {/* Menu de navigation */}
                    <ul className="lg:flex hidden items-center">
                        <li className="mr-9">
                            <a href="dashboard-home.html" className="hover:text-blue-500">Home</a>
                        </li>
                        <li className="mr-9">
                            <a href="#" className="hover:text-blue-500">Listing</a>
                        </li>
                    </ul>
                </div>

                {/* Partie droite avec la photo du profil et le dropdown */}
                <div className="flex items-center">
                    <div className="relative mr-3">
                        {/* Bouton d'avatar pour ouvrir le dropdown */}
                        <button
                            onClick={toggleDropdown}
                            className="link hover:text-blue-500 flex items-center"
                        >
                            <div className="relative lg:mr-3 mr-0">
                                <Image className="w-12 h-12 rounded-full border border-white" src="/assets/img/faces/10.jpg" alt="Profil" width={50} height={50} />
                                <div className="w-5 h-5 bg-green-500 rounded-full border absolute bottom-0 right-0"></div>
                            </div>
                            <span className="lg:block hidden font-bold">Mon Compte</span>
                            <svg className="w-3 h-auto ml-2" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.99982 6.00001C4.79513 6.00001 4.59034 5.92467 4.43435 5.774L0.434558 1.91686C0.122074 1.61552 0.122074 1.12735 0.434558 0.826011C0.747042 0.524671 1.25327 0.524671 1.56575 0.826011L4.99982 4.13893L8.43464 0.826613C8.74712 0.525274 9.25335 0.525274 9.56583 0.826613C9.87831 1.12795 9.87831 1.61612 9.56583 1.91746L5.56604 5.7746C5.4098 5.92527 5.20481 6.00001 4.99982 6.00001Z" fill="currentColor"></path>
                            </svg>
                        </button>

                        {/* Dropdown menu */}
                        {dropdownOpen && (
                            <div className="dropdown-menu bg-white dark:bg-foreground dark:text-gray-300 text-gray-700 absolute right-0 w-48 mt-2 rounded-md shadow-lg z-10">
                                <div className="dropdown-links max-w-xs py-3">
                                    <a className="link hover:text-blue-500 px-4 py-1 flex items-center text-sm text-gray-700 dark:text-gray-300">Profile </a>
                                    <a className="link hover:text-blue-500 px-4 py-1 flex items-center text-sm text-gray-700 dark:text-gray-300">Paramètre</a>
                                    <button onClick={toggleModal} className="link hover:text-red-500 px-4 py-1 flex items-center text-sm text-gray-700 dark:text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-4 h-4 mr-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                        </svg>
                                        <span>Se connecter</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal de confirmation de déconnexion */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <h3 className="text-lg font-semibold">Confirmer votre déconnexion</h3>
                        <p>Are you sure you want to log out?</p>
                        <div className="mt-4 flex justify-end gap-4">
                            <button onClick={toggleModal} className="px-4 py-2 bg-gray-300 rounded-md">fermer</button>
                            <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-md">Se déconnecter</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
