import React from 'react';

const DashboardInvoice = () => {
  return (
    <div className="dark:bg-foreground rounded-lg shadow-front-2 p-6 xl:col-span-4 lg:col-span-4 col-span-1">
    <div className="flex justify-between flex-wrap mb-8">
      <h6 className="text-base text-gray-700 dark:text-gray-100 font-semibold"> Invoices </h6>
      <a href="#"
        className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"> View
        All </a>
    </div>
    {/* !-- List 1 -->*/}
    <div className="flex justify-between items-start mb-0">
      <div className="flex items-start">
        <div className="bg-gray-100 dark:bg-background p-2 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
            stroke-width="2" className="w-5 h-5 dark:text-gray-400 text-gray-700">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
            </path>
          </svg>
        </div>
        <div className="mb-6">
          <p className="text-base font-medium dark:text-gray-300 text-gray-700 mb-2"> Professional Plan </p>
          <div className="flex md:items-center items-start flex-wrap md:flex-row flex-col">
            <div className=" bg-green-100 text-green-500  px-3 py-1 rounded mr-3 font-medium text-xs"> Paid </div>
            <div className="border-r border-gray-300 h-5 mr-3 md:block hidden"></div>
            <p className="text-gray-500 dark:text-gray-300 mr-3"> Order No: #25686 </p>
            <div className="border-r border-gray-300 h-5 mr-3 md:block hidden"></div>
            <p className="text-gray-500 dark:text-gray-300">22 March, 2022</p>
          </div>
        </div>
      </div>
      <button type="button"
        className="text-gray-500 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
          stroke-width="2" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
          </path>
        </svg>
      </button>
    </div>
    {/* <!-- List 2 -->*/}
    <div className="flex justify-between items-start mb-0">
      <div className="flex items-start">
        <div className="bg-gray-100 dark:bg-background p-2 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
            stroke-width="2" className="w-5 h-5 dark:text-gray-400 text-gray-700">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
            </path>
          </svg>
        </div>
        <div className="mb-6">
          <p className="text-base font-medium dark:text-gray-300 text-gray-700 mb-2"> Extended Plan </p>
          <div className="flex md:items-center items-start flex-wrap md:flex-row flex-col">
            <div className=" bg-red-100 text-red-500  px-3 py-1 rounded mr-3 font-medium text-xs"> Unpaid </div>
            <div className="border-r border-gray-300 h-5 mr-3 md:block hidden"></div>
            <p className="text-gray-500 dark:text-gray-300 mr-3"> Order No: #25686 </p>
            <div className="border-r border-gray-300 h-5 mr-3 md:block hidden"></div>
            <p className="text-gray-500 dark:text-gray-300">22 March, 2022</p>
          </div>
        </div>
      </div>
      <button type="button"
        className="text-gray-500 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
          stroke-width="2" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
          </path>
        </svg>
      </button>
    </div>
    {/* <!-- List 2 -->*/}
    <div className="flex justify-between items-start mb-0">
      <div className="flex items-start">
        <div className="bg-gray-100 dark:bg-background p-2 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
            stroke-width="2" className="w-5 h-5 dark:text-gray-400 text-gray-700">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
            </path>
          </svg>
        </div>
        <div className="mb-6">
          <p className="text-base font-medium dark:text-gray-300 text-gray-700 mb-2"> Basic Plan </p>
          <div className="flex md:items-center items-start flex-wrap md:flex-row flex-col">
            <div className=" bg-green-100 text-green-500  px-3 py-1 rounded mr-3 font-medium text-xs"> Paid </div>
            <div className="border-r border-gray-300 h-5 mr-3 md:block hidden"></div>
            <p className="text-gray-500 dark:text-gray-300 mr-3"> Order No: #25686 </p>
            <div className="border-r border-gray-300 h-5 mr-3 md:block hidden"></div>
            <p className="text-gray-500 dark:text-gray-300">22 March, 2022</p>
          </div>
        </div>
      </div>
      <button type="button"
        className="text-gray-500 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
          stroke-width="2" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
          </path>
        </svg>
      </button>
    </div>
    {/* <!-- List 2 -->*/}
    <div className="flex justify-between items-start mb-0">
      <div className="flex items-start">
        <div className="bg-gray-100 dark:bg-background p-2 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
            stroke-width="2" className="w-5 h-5 dark:text-gray-400 text-gray-700">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
            </path>
          </svg>
        </div>
        <div className="mb-6">
          <p className="text-base font-medium dark:text-gray-300 text-gray-700 mb-2"> Professional Plan </p>
          <div className="flex md:items-center items-start flex-wrap md:flex-row flex-col">
            <div className=" bg-green-100 text-green-500  px-3 py-1 rounded mr-3 font-medium text-xs"> Paid </div>
            <div className="border-r border-gray-300 h-5 mr-3 md:block hidden"></div>
            <p className="text-gray-500 dark:text-gray-300 mr-3"> Order No: #25686 </p>
            <div className="border-r border-gray-300 h-5 mr-3 md:block hidden"></div>
            <p className="text-gray-500 dark:text-gray-300">22 March, 2022</p>
          </div>
        </div>
      </div>
      <button type="button"
        className="text-gray-500 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
          stroke-width="2" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
          </path>
        </svg>
      </button>
    </div>
    {/* <!-- List 2 -->*/}
    <div className="flex justify-between items-start mb-0">
      <div className="flex items-start">
        <div className="bg-gray-100 dark:bg-background p-2 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
            stroke-width="2" className="w-5 h-5 dark:text-gray-400 text-gray-700">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
            </path>
          </svg>
        </div>
        <div className="mb-6">
          <p className="text-base font-medium dark:text-gray-300 text-gray-700 mb-2"> Extended Plan </p>
          <div className="flex md:items-center items-start flex-wrap md:flex-row flex-col">
            <div className=" bg-red-100 text-red-500  px-3 py-1 rounded mr-3 font-medium text-xs"> Unpaid </div>
            <div className="border-r border-gray-300 h-5 mr-3 md:block hidden"></div>
            <p className="text-gray-500 dark:text-gray-300 mr-3"> Order No: #25686 </p>
            <div className="border-r border-gray-300 h-5 mr-3 md:block hidden"></div>
            <p className="text-gray-500 dark:text-gray-300">22 March, 2022</p>
          </div>
        </div>
      </div>
      <button type="button"
        className="text-gray-500 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
          stroke-width="2" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
          </path>
        </svg>
      </button>
    </div>
  </div>
  );
}

export default DashboardInvoice;
