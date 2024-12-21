"use client"
import React, { useState } from 'react';
import {MdOutlineSearch} from "react-icons/md";


const MessageAdmin = () => {
  // Liste des messages fictifs
  const [searchQuery, setSearchQuery] = useState("");
  const messages = [
    {
      id: 1,
      user: 'John Doe',
      description: 'Ceci est un message de test.',
      date: '2024-12-18',
      status: 'Envoyé',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      user: 'Alice Smith',
      description: 'Nouveau message à vérifier.',
      date: '2024-12-17',
      status: 'Non Lu',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      user: 'Bob Johnson',
      description: 'Message de confirmation.',
      date: '2024-12-16',
      status: 'Lu',
      image: 'https://via.placeholder.com/50',
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Fonction pour afficher/fermer la modal
  const toggleModal = (message) => {
    setSelectedMessage(message);
    setShowModal(!showModal);
  };

  // Fonction de recherche pour filtrer les messages
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filtrer les messages en fonction de la recherche
  const filteredMessages = messages.filter(
    (message) =>
      message.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-content transition-all duration-200 dark:bg-background lg:ml-64 ml-0 mt-20 min-h-[calc(100vh-80px)] p-7">
      <section className="dark:bg-background">
        <div className="container mx-auto">
          <div className="flex justify-between flex-wrap items-center mb-7">
            <div className="flex text-gray-400 text-sm items-center mb-4">
              <a href="#" className="font-medium text-gray-700 dark:text-gray-200"> Dashboard </a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                strokeWidth="2" className="w-3 h-3 mx-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg> <span>Message</span>
            </div>
            <div className="flex rounded-lg shadow-input dark:bg-foreground p-3 w-96 max-w-full justify-between">
              <input
                type="text"
                className="focus:outline-none dark:bg-foreground dark:text-gray-100 pl-3"
                placeholder="Rechercher un message..."
                value={searchQuery}
                onChange={handleSearch}
              />
              <button type="button" className="bg-blue-500 text-white rounded-lg px-4 py-2 ">
                <span className="flex flex-row sm:block hidden"><MdOutlineSearch />  <span> Recherche </span></span>
              </button>
            </div>
          </div>
          <div className="bg-white shadow-front-2 dark:bg-foreground rounded-lg">
            <div className="flex flex-wrap justify-between items-center mb-4 px-6 pt-6">
              <h4 className="text-gray-700 dark:text-gray-300 text-xl font-semibold mr-5 sm:mb-0 mb-3"> Message </h4>
              <select name="cars"
                className="px-4 py-2 mr-0 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-lg dark:bg-foreground focus:outline-none">
                <option value="volvo">Last Months</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>

            {/* Affichage des messages filtrés */}
            <div>
              {filteredMessages.map((message) => (
                <div key={message.id} className="flex justify-between items-start flex-wrap dark:bg-background p-6 border-b dark:border-gray-700">
                  <div className="flex mr-10 flex-wrap">
                    <img alt={message.user} src={message.image} className="w-14 h-14 rounded-full mr-4" />
                    <div>
                      <div className="flex items-center mb-1 flex-wrap">
                        <p className="font-medium text-gray-700 dark:text-gray-100 text-lg mr-2">{message.user}</p>
                        <small
                          className={`bg-${message.status === 'Non Lu' ? 'green' : 'gray'}-100 text-${message.status === 'Non Lu' ? 'green' : 'gray'}-500 font-medium text-xs px-3 py-1 rounded-lg`}
                        >
                          {message.status}
                        </small>
                      </div>
                      <p className="text-gray-500 text-sm dark:text-gray-400">{message.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm dark:text-gray-400 flex-shrink-0">{message.date}</p>
                  <button
                    onClick={() => toggleModal(message)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
                  >
                    Voir
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination ou autres éléments */}
            <div className="flex justify-center p-6">
              <div className="flex items-center">
                <button className="rounded-full w-8 h-8 flex justify-center items-center border border-gray-200 dark:border-gray-800 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    strokeWidth="2" className="h-4 w-4 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button className="rounded-full w-8 h-8 flex justify-center items-center border border-gray-200 dark:border-gray-800 bg-blue-500 text-white mr-4">1</button>
                <button className="rounded-full w-8 h-8 flex justify-center items-center border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-300 mr-4">2</button>
                <button className="rounded-full w-8 h-8 flex justify-center items-center border border-gray-200 dark:border-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    strokeWidth="2" className="h-4 w-4 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedMessage && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h3 className="text-lg font-semibold mb-4">Message de {selectedMessage.user}</h3>
            <p className="mb-4">{selectedMessage.description}</p>
            <p className="mb-4">Date: {selectedMessage.date}</p>
            <p className="mb-4">Statut: {selectedMessage.status}</p>
            <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded-md">Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageAdmin;
