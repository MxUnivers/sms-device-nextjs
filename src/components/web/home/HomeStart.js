import React from 'react'

const HomeStart = () => {
    return (
        <div className="container mx-auto pt-10 lg:px-0 px-5 lg:pt-20 text-center pb-5">
            <h6 className="text-blue-500 font-semibold text-base mb-1" data-aos="fade-up" data-aos-duration="400">SMS Solutions & Tailwind CSS</h6>
            <h1 className="text-2xl leading-tight md:text-[48px] font-semibold text-gray-800 max-w-[850px] mx-auto mb-6"
                data-aos="fade-up" data-aos-duration="800">Boost Your Business with SMS Solutions</h1>
            <p className="text-gray-500 max-w-[426px] mx-auto mb-[30px]" data-aos="fade-up" data-aos-duration="900">
                Automate and enhance customer interactions by integrating SMS capabilities. Our SMS service enables easy communication, alerts, notifications, and more.
            </p>
            <div className="flex justify-center" data-aos="fade-up" data-aos-duration="1000">
                <a href="#demo" target="_blank"
                    className="mr-4 px-7 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium">Voir la démo</a>
                <a target="_blank" href="https://themeforest.net/item/accomu-directory-listings-html-template/39971703"
                    className="px-7 py-3 text-gray-700 hover:bg-blue-25 font-medium shadow-front-1 border border-gray-300 rounded-full">
                    S{"'"}inscrire</a>
            </div>

            
        </div>
    )
}

export default HomeStart
