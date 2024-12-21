'use client';
import React, { useState, useEffect } from 'react';
import { MdMoneyOffCsred, MdSms, MdTimer } from 'react-icons/md';

const PaymentPage = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+1');
    const [amount, setAmount] = useState('');
    const [isAmountValid, setIsAmountValid] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false); // To track consent checkbox

    // Mock user data
    const [credits, setCredits] = useState(5); // Example credit count
    const [smsSent, setSmsSent] = useState(10); // Example sms sent
    const [lastRechargeDate, setLastRechargeDate] = useState('2024-12-20'); // Example last recharge date

    // Handle amount validation
    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);
        setIsAmountValid(value >= 3000); // Validate if amount is >= 3000
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Toggle consent checkbox
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount >= 3000 && isChecked) {
            setIsModalOpen(true);
        }
    };

    // Handle closing the modal with the Esc key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                setIsModalOpen(false);
            }
        };

        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <div className="dashboard-content transition-all duration-200 dark:bg-background lg:ml-64 ml-0 mt-20 min-h-[calc(100vh-80px)] p-7">
            <section className="dark:bg-background">
                <div className="container mx-auto">
                    <div className="flex justify-between flex-wrap items-center mb-7">
                        <div className="flex text-gray-400 text-sm items-center mb-4">
                            <a href="#" className="font-medium text-gray-700 dark:text-gray-200">Dashboard</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-3 h-3 mx-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                            </svg>
                            <span>Paiement</span>
                        </div>
                    </div>

                    <div className="flex justify-between">

                        {/* Left Column: User Info */}
                        <div className="w-1/3 p-4 bg-gray-50 dark:bg-foreground rounded-lg shadow-md">
                            <h4 className="text-gray-700 dark:text-gray-300 text-xl font-semibold mb-6">Informations Utilisateur</h4>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <MdMoneyOffCsred className="text-3xl text-blue-500" />
                                    <div>
                                        <p className="text-lg font-semibold">Crédits Disponibles:</p>
                                        <p className="text-xl">{credits}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex items-center space-x-2">
                                    <MdSms className="text-3xl text-green-500" />
                                    <div>
                                        <p className="text-lg font-semibold">Messages Envoyés:</p>
                                        <p className="text-xl">{smsSent}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex items-center space-x-2">
                                    <MdTimer className="text-3xl text-orange-500" />
                                    <div>
                                        <p className="text-lg font-semibold">Date de Dernière Recharge:</p>
                                        <p className="text-xl">{lastRechargeDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Payment Form */}
                        <div className="w-2/3 p-4">
                            <div className="bg-white shadow-xl dark:bg-foreground rounded-lg p-6">
                                <h4 className="text-gray-700 dark:text-gray-300 text-xl font-semibold mb-6">Page de Paiement</h4>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block mb-2">Nom</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded-lg px-4 py-2 w-full dark:bg-foreground"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2">Prénom</label>
                                        <input
                                            type="text"
                                            value={surname}
                                            onChange={(e) => setSurname(e.target.value)}
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded-lg px-4 py-2 w-full dark:bg-foreground"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2">Numéro de téléphone</label>
                                        <input
                                            type="text"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded-lg px-4 py-2 w-full dark:bg-foreground"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2">Indicatif pays</label>
                                        <select
                                            value={countryCode}
                                            onChange={(e) => setCountryCode(e.target.value)}
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded-lg px-4 py-2 w-full dark:bg-foreground"
                                            required
                                        >
                                            <option value="+1">+1</option>
                                            <option value="+44">+44</option>
                                            <option value="+33">+33</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block mb-2">Montant</label>
                                        <input
                                            type="number"
                                            value={amount}
                                            onChange={handleAmountChange}
                                            className={`border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded-lg px-4 py-2 w-full dark:bg-foreground ${!isAmountValid ? 'border-red-500' : ''}`}
                                            required
                                        />
                                        {!isAmountValid && <p className="text-red-500">Le montant ne doit pas être inférieur à 3000 FCFA.</p>}
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                            className="mr-2"
                                        />
                                        <label>Je consens à effectuer ce paiement</label>
                                    </div>

                                    <div>
                                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2" disabled={!isChecked || amount < 3000}>
                                            Confirmer le paiement
                                        </button>
                                    </div>
                                </form>

                                {/* Modal Confirmation */}
                                {isModalOpen && (
                                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                                        <div className="modal-content p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                                            <h3 className="text-xl font-semibold mb-4">Confirmation du paiement</h3>
                                            <p>Êtes-vous sûr de vouloir effectuer le paiement de {amount} FCFA ?</p>
                                            <div className="modal-actions mt-4">
                                                <button onClick={() => setIsModalOpen(false)} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
                                                    Annuler
                                                </button>
                                                <button onClick={() => alert('Paiement effectué')} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-2">
                                                    Confirmer
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaymentPage;
