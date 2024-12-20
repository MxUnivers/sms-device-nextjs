import React from 'react'

const DashbordAnalytics = () => {
    return (
        <div class="xl:col-span-5 lg:col-span-4 col-span-1">
            <div class="dark:bg-foreground rounded-lg shadow-front-2 p-6">
                <div class="flex justify-between items-center flex-wrap mb-8">
                    <h6 class="text-base text-gray-700 dark:text-gray-100 font-semibold"> Analytics </h6>
                    <select name="cars"
                        class="border border-gray-200 text-gray-400 dark:bg-foreground dark:border-gray-800 rounded-lg px-2 py-2 focus:outline-none">
                        <option value="volvo">Monthly</option>
                        <option value="saab">New York</option>
                        <option value="opel">Manhattan</option>
                        <option value="audi">Toronto</option>
                    </select>
                </div>
                <div id="chart"></div>
            </div>
        </div>
    )
}

export default DashbordAnalytics
