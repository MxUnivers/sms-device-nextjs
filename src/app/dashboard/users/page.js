'use client'; // Cette directive permet d'utiliser les hooks de React

import { useState } from 'react';

export default function Users() {
  // Etat pour afficher ou masquer le modal
  const [showModal, setShowModal] = useState(false);

  // Fonction pour afficher/fermer le modal
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="dashboard-content transition-all duration-200 dark:bg-background lg:ml-64 ml-0 mt-20 min-h-[calc(100vh-80px)] p-7">
      <section className="dark:bg-background">
        <div className="container mx-auto">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex text-gray-400 text-sm items-center mb-4">
              <a href="#" className="font-medium text-gray-700 dark:text-gray-200"> Dashboard </a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                strokeWidth="2" className="w-3 h-3 mx-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg> <span>Utilisateurs </span>
            </div>
            {/* Bouton pour ouvrir le modal */}
            <button
              type="button"
              onClick={toggleModal} // Afficher le modal lorsque ce bouton est cliqué
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-2.5 mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-6 w-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
              </svg>
              Nouvelle utilisateur
            </button>
          </div>

          {/* Modal pour Ajouter un Nouvel Utilisateur */}
          {showModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-md shadow-md w-96">
                <h3 className="text-lg font-semibold mb-4">Ajouter un nouvel utilisateur</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={toggleModal} // Fermer le modal lorsque le bouton "Annuler" est cliqué
                      className="px-4 py-2 bg-gray-300 rounded-md"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Ajouter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="bg-white shadow-front-2 dark:bg-foreground rounded-lg mb-7 overflow-hidden">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table id="myTable" className="min-w-full">
                      <thead>
                        <tr>
                          <th scope="col" className="text-base bg-gray-100 border-b border-gray-200 dark:border-gray-900 dark:bg-background items-center flex font-medium text-gray-700 dark:text-gray-100 px-6 py-3 text-left">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="mr-4" />
                            <label htmlFor="vehicle1" className="block"> Name </label>
                          </th>
                          <th scope="col" className="text-base bg-gray-100 border-b border-gray-200 dark:border-gray-900 whitespace-nowrap dark:bg-background font-medium text-gray-700 dark:text-gray-100 px-6 py-3 text-left">
                            Package Name </th>
                          <th scope="col" className="text-base bg-gray-100 border-b border-gray-200 dark:border-gray-900 whitespace-nowrap dark:bg-background font-medium text-gray-700 dark:text-gray-100 px-6 py-3 text-left">
                            Package Start Date </th>
                          <th scope="col" className="text-base bg-gray-100 border-b border-gray-200 dark:border-gray-900 whitespace-nowrap dark:bg-background font-medium text-gray-700 dark:text-gray-100 px-6 py-3 text-left">
                            Package End Date </th>
                          <th scope="col" className="text-base bg-gray-100 border-b border-gray-200 dark:border-gray-900 whitespace-nowrap dark:bg-background font-medium text-gray-700 dark:text-gray-100 px-6 pb-0 text-left">
                            Paid Amount </th>
                          <th scope="col" className="text-base bg-gray-100 border-b border-gray-200 dark:border-gray-900 whitespace-nowrap dark:bg-background font-medium text-gray-700 dark:text-gray-100 px-6 text-left">
                            Action </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Utilisateur exemple */}
                        <tr className="align-middle hover:bg-gray-50 dark:hover:bg-background">
                          <td className="border-b border-gray-200 dark:border-gray-900 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                            <div className="flex items-center mr-10">
                              <input type="checkbox" id="vehicle2" name="vehicle1" value="Bike" className="mr-4" />
                              <label htmlFor="vehicle2" className="flex items-center">
                                <img className="w-9 h-9 object-cover rounded-full mr-4 border border-white" src="assets/img/faces/2.jpg" alt="" />
                                Gage Paquette </label>
                            </div>
                          </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                            Standard </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                            03 April, 2022 </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                            03 May, 2022 </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                            $150.25 </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                            <div className="flex items-center">
                              {/* Buttons pour actions */}
                              <button type="button" className="border mr-2 border-gray-200 hover:bg-blue-500 dark:hover:border-blue-500 hover:text-white text-gray-700 dark:text-gray-300 dark:border-gray-800 rounded-full w-8 h-8 flex justify-center items-center">
                                {/* Icone Edit */}
                              </button>
                              <button type="button" className="border mr-2 border-gray-200 hover:bg-blue-500 dark:hover:border-blue-500 hover:text-white text-gray-700 dark:text-gray-300 dark:border-gray-800 rounded-full w-8 h-8 flex justify-center items-center">
                                {/* Icone Delete */}
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
