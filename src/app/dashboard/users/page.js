'use client'; // Cette directive permet d'utiliser les hooks de React

import { useState } from 'react'; // Import de useState pour gérer l'état du modal
import { FaEye, FaBan, FaSyncAlt } from 'react-icons/fa'; // Import des icônes de React Icons

export default function Users() {
  // État pour afficher ou masquer les modals
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState(""); // Action pour identifier le type de modal (Voir, Bloquer, Recharger)

  // Fonction pour afficher/fermer les modals
  const toggleModal = (action) => {
    setModalAction(action);
    setShowModal(!showModal);
  };

  // Fonction pour bloquer l'utilisateur
  const handleBlock = () => {
    console.log("Utilisateur bloqué");
    setShowModal(false); // Ferme le modal après le blocage
  };

  // Fonction pour recharger l'utilisateur
  const handleReload = () => {
    console.log("Utilisateur rechargé");
    setShowModal(false); // Ferme le modal après le rechargement
  };

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
              onClick={() => toggleModal("add")} // Ouvre le modal pour ajouter un utilisateur
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-2.5 mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-6 w-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
              </svg> Nouvelle utilisateur
            </button>
          </div>

          {/* Modal pour Ajouter un Nouvel Utilisateur ou Action */}
          {showModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-md shadow-md w-96">
                <h3 className="text-lg font-semibold mb-4">
                  {modalAction === "block" ? "Confirmer le blocage" : modalAction === "reload" ? "Confirmer le rechargement" : "Ajouter un nouvel utilisateur"}
                </h3>
                <form>
                  {modalAction === "block" && (
                    <div className="mb-4">
                      <p>Êtes-vous sûr de vouloir bloquer cet utilisateur ?</p>
                      <div className="mt-4 flex justify-end gap-4">
                        <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded-md">Annuler</button>
                        <button onClick={handleBlock} className="px-4 py-2 bg-red-500 text-white rounded-md">Bloquer</button>
                      </div>
                    </div>
                  )}
                  {modalAction === "reload" && (
                    <div className="mb-4">
                      <p>Êtes-vous sûr de vouloir recharger cet utilisateur ?</p>
                      <div className="mt-4 flex justify-end gap-4">
                        <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded-md">Annuler</button>
                        <button onClick={handleReload} className="px-4 py-2 bg-blue-500 text-white rounded-md">Recharger</button>
                      </div>
                    </div>
                  )}
                  {modalAction === "add" && (
                    <>
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nom</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Nom de l'utilisateur"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Email de l'utilisateur"
                        />
                      </div>
                      <div className="flex justify-end gap-4">
                        <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded-md">Annuler</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Ajouter</button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          )}

          {/* Table des utilisateurs */}
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
                        {/* Exemple d'utilisateur */}
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
                          <td className="relative border-b border-gray-200 dark:border-gray-900 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                            {/* Boutons Actions */}
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() => toggleModal("view")}
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400"
                              >
                                <FaEye className="inline-block mr-2" /> Voir
                              </button>
                              <button
                                onClick={() => toggleModal("block")}
                                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400"
                              >
                                <FaBan className="inline-block mr-2" /> Bloquer
                              </button>
                              <button
                                onClick={() => toggleModal("reload")}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
                              >
                                <FaSyncAlt className="inline-block mr-2" /> Recharger
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
