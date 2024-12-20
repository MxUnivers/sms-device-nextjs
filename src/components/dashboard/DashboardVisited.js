import React from 'react';

const DashboardVisited = () => {
    return (
        <div class="xl:col-span-8">
            <div class="bg-white shadow-front-2 dark:bg-foreground rounded-lg mb-7">
                <div class="flex justify-between items-center mb-7 p-6 border-b border-gray-200 dark:border-gray-800">
                    <h4 class="text-gray-700 dark:text-gray-300 text-xl font-semibold"> Most Visited Listings </h4>
                    <a href="#"
                        class="text-base text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500">
                        View All </a>
                </div>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table id="myTable-no-search" class="min-w-full">
                                    <thead class="">
                                        <tr class="">
                                            <th scope="col"
                                                class="text-base font-medium text-gray-700 dark:text-gray-100 px-6 py-2 text-left"> List
                                                Title </th>
                                            <th scope="col"
                                                class="text-base font-medium text-gray-700 dark:text-gray-100 px-6 py-2 text-left">
                                                Category </th>
                                            <th scope="col"
                                                class="text-base font-medium text-gray-700 dark:text-gray-100 px-6 py-2 text-left">
                                                Status </th>
                                            <th scope="col"
                                                class="text-base font-medium text-gray-700 dark:text-gray-100 px-6 py-2 text-left">
                                                Views </th>
                                            <th scope="col"
                                                class="text-base font-medium text-gray-700 dark:text-gray-100 px-6 pb-2 text-left">
                                                Action </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td
                                                class="whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300  bg-gray-50 dark:bg-background  px-6 py-5">
                                                <div class="flex items-center mr-10">
                                                    <img class="w-16 h-14 object-cover rounded mr-4 border border-white"
                                                        src="assets/img/Image/landing-page-image/building-2.jpg" alt="" /> Liam Ancor -
                                                    Physics Trinee
                                                </div>
                                            </td>
                                            <td
                                                class="whitespace-nowrap align-middle text-sm font-medium text-gray-500 dark:text-gray-300  bg-gray-50 dark:bg-background  px-6 py-5">
                                                Coaching </td>
                                            <td
                                                class="whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300  bg-gray-50 dark:bg-background  px-6 py-5">
                                                <div
                                                    class="text-xs font-medium  bg-green-100 text-green-500    px-3 py-1 rounded mr-3 inline-block">
                                                    Active

                                                </div>
                                            </td>
                                            <td
                                                class="whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-300  bg-gray-50 dark:bg-background  px-6 py-5">
                                                250K+ </td>
                                            <td
                                                class="whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-300  bg-gray-50 dark:bg-background  px-6 py-5">
                                                <button type="button"
                                                    class="text-gray-500 hover:text-blue-500 dark:text-gray-200 hover:dark:text-blue-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24"
                                                        stroke="currentColor" stroke-width="2" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                                                        </path>
                                                    </svg>
                                                </button>
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
    );
}

export default DashboardVisited;
