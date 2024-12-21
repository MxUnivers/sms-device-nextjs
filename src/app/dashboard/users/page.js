// src/app/dashboard/users.js
export default function Users() {
  return (
    <div
      class="dashboard-content transition-all duration-200 dark:bg-background lg:ml-64 ml-0 mt-20 min-h-[calc(100vh-80px)] p-7">
      <section class="dark:bg-background">
        <div class="container mx-auto">
          <div class="flex text-gray-400 text-sm items-center mb-4">
            <a href="#" class="font-medium text-gray-700 dark:text-gray-200"> Dashboard </a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
              stroke-width="2" class="w-3 h-3 mx-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
            </svg> <span>Purchase History </span>
          </div>
          <div class="bg-white shadow-front-2 dark:bg-foreground rounded-lg mb-7 overflow-hidden">
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table id="myTable" class="min-w-full">
                      <thead>
                        <tr class="">
                          <th scope="col"
                            class="text-base bg-gray-100 border-b border-gray-200 dark:border-gray-900 dark:bg-background items-center flex font-medium text-gray-700 dark:text-gray-100 px-6 py-3 text-left">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="mr-4" />
                            <label for="vehicle1" class="block"> Name </label>
                          </th>
                          <th scope="col"
                            class="text-base bg-gray-100 border-b border-gray-200 dark:border-gray-900 whitespace-nowrap dark:bg-background font-medium text-gray-700 dark:text-gray-100 px-6 py-3 text-left">
                            Package Name </th>
                          <th scope="col"
                            class="text-base bg-gray-100 border-b border-gray-200 dark:border-gray-900 whitespace-nowrap dark:bg-background font-medium text-gray-700 dark:text-gray-100 px-6 py-3 text-left">
                            Package Start Date </th>
                          <th scope="col"
                            class="text-base bg-gray-100 border-b border-gray-200 dark:border-gray-900 whitespace-nowrap dark:bg-background font-medium text-gray-700 dark:text-gray-100 px-6 py-3 text-left">
                            Package End Date </th>
                          <th scope="col"
                            class="text-base bg-gray-100 border-b border-gray-200 dark:border-gray-900 whitespace-nowrap dark:bg-background font-medium text-gray-700 dark:text-gray-100 px-6 pb-0 text-left">
                            Paid Amount </th>
                          <th scope="col"
                            class="text-base bg-gray-100 border-b border-gray-200 dark:border-gray-900 whitespace-nowrap dark:bg-background font-medium text-gray-700 dark:text-gray-100 px-6 text-left">
                            Action </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="align-middle hover:bg-gray-50 dark:hover:bg-background">
                          <td
                            class="border-b border-gray-200 dark:border-gray-900 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                            <div class="flex items-center mr-10">
                              <input type="checkbox" id="vehicle2" name="vehicle1" value="Bike" class="mr-4" />
                              <label for="vehicle2" class="flex items-center"><img
                                class="w-9 h-9 object-cover rounded-full mr-4 border border-white"
                                src="assets/img/faces/2.jpg" alt="" /> Gage Paquette </label>
                            </div>
                          </td>
                          <td
                            class="border-b border-gray-200 dark:border-gray-900 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                            Standard </td>
                          <td
                            class="border-b border-gray-200 dark:border-gray-900 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                            03 April, 2022 </td>
                          <td
                            class="border-b border-gray-200 dark:border-gray-900 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                            03 May, 2022 </td>
                          <td
                            class="border-b border-gray-200 dark:border-gray-900 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                            $150.25 </td>
                          <td
                            class="border-b border-gray-200 dark:border-gray-900 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                            <div class="flex items-center">
                              <button type="button"
                                class="border mr-2 border-gray-200 hover:bg-blue-500 dark:hover:border-blue-500 hover:text-white text-gray-700 dark:text-gray-300 dark:border-gray-800 rounded-full w-8 h-8 flex justify-center items-center">
                                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" class="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M15.4156 5.91563L12.0875 2.5875C11.7094 2.21069 11.2031 2 10.6719 2L6 2C4.89531 2 4 2.89531 4 4L4.0002 16C4.0002 17.1047 4.89552 18 6.0002 18H14C15.1047 18 16 17.1047 16 16V7.32812C16 6.79688 15.7906 6.29063 15.4156 5.91563ZM11 3.065C11.1399 3.11394 11.2708 3.18519 11.3788 3.2931L14.7069 6.62122C14.8156 6.72813 14.8875 6.85938 14.9344 7H11.5C11.225 7 11 6.775 11 6.5V3.065ZM15 16C15 16.5513 14.5513 17 14 17H6C5.44875 17 5 16.5513 5 16V4C5 3.44875 5.44875 3 6 3H10V6.5C10 7.32813 10.6719 8 11.5 8H15V16ZM7 10.5C7 10.775 7.225 11 7.5 11H12.5C12.775 11 13 10.775 13 10.5C13 10.225 12.775 10 12.5 10H7.5C7.225 10 7 10.225 7 10.5ZM12.5 12H7.5C7.225 12 7 12.225 7 12.5C7 12.775 7.225 13 7.5 13H12.5C12.7762 13 13 12.7761 13 12.5C13 12.2239 12.775 12 12.5 12ZM12.5 14H7.5C7.225 14 7 14.225 7 14.5C7 14.775 7.225 15 7.5 15H12.5C12.7762 15 13 14.7761 13 14.5C13 14.2239 12.775 14 12.5 14Z"
                                    fill="currentColor"></path>
                                </svg> </button>
                              <button type="button"
                                class="border mr-2 border-gray-200 hover:bg-blue-500 dark:hover:border-blue-500 hover:text-white text-gray-700 dark:text-gray-300 dark:border-gray-800 rounded-full w-8 h-8 flex justify-center items-center">
                                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" class="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M14.1767 2.5903C14.964 1.80323 16.2424 1.80323 17.0296 2.5903L17.4107 2.97163C18.1979 3.75885 18.1979 5.03604 17.4107 5.82326L10.4705 12.7603C10.206 13.0279 9.86907 13.1854 9.50065 13.2987L6.64776 13.9568C6.47772 13.9946 6.30138 13.9442 6.17857 13.8214C6.05577 13.6986 6.00538 13.5223 6.04317 13.3522L6.70129 10.4994C6.78631 10.1309 6.97209 9.794 7.23975 9.50116L14.1767 2.5903ZM16.3148 3.30289C15.9212 2.90928 15.2852 2.90928 14.8915 3.30289L14.0476 4.1449L15.8551 5.95236L16.6959 5.10846C17.0895 4.7158 17.0895 4.07783 16.6959 3.68422L16.3148 3.30289ZM7.68374 10.7261L7.20511 12.7949L9.24559 12.3163C9.45657 12.2753 9.62661 12.1809 9.75886 12.0203L15.1435 6.66401L13.336 4.8575L7.9514 10.2411C7.81914 10.3734 7.72468 10.5434 7.68374 10.7261ZM8.54969 3.89299C8.82679 3.89299 9.05351 4.11845 9.05351 4.39681C9.05351 4.67518 8.82679 4.90064 8.54969 4.90064H4.51911C3.68434 4.90064 3.00764 5.57765 3.00764 6.4121V15.4809C3.00764 16.3153 3.68434 16.9924 4.51911 16.9924H13.5879C14.4224 16.9924 15.0994 16.3153 15.0994 15.4809V11.4503C15.0994 11.1732 15.3261 10.9465 15.6032 10.9465C15.8803 10.9465 16.107 11.1732 16.107 11.4503V15.4809C16.107 16.8727 14.9797 18 13.5879 18H4.51911C3.12793 18 2 16.8727 2 15.4809V6.4121C2 5.02092 3.12793 3.89299 4.51911 3.89299H8.54969Z"
                                    fill="currentColor"></path>
                                </svg> </button>
                              <button type="button"
                                class="border mr-2 border-gray-200 hover:bg-blue-500 dark:hover:border-blue-500 hover:text-white text-gray-700 dark:text-gray-300 dark:border-gray-800 rounded-full w-8 h-8 flex justify-center items-center">
                                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" class="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M7.5 14.5C7.5 14.775 7.275 15 7 15C6.725 15 6.5 14.775 6.5 14.5V7.5C6.5 7.225 6.725 7 7 7C7.275 7 7.5 7.225 7.5 7.5V14.5ZM10.5 14.5C10.5 14.775 10.275 15 10 15C9.725 15 9.5 14.775 9.5 14.5V7.5C9.5 7.225 9.725 7 10 7C10.275 7 10.5 7.225 10.5 7.5V14.5ZM13.5 14.5C13.5 14.775 13.275 15 13 15C12.725 15 12.5 14.775 12.5 14.5V7.5C12.5 7.225 12.725 7 13 7C13.275 7 13.5 7.225 13.5 7.5V14.5ZM12.6906 2.705L13.5281 4H16.5C16.775 4 17 4.22375 17 4.5C17 4.77625 16.775 5 16.5 5H16V15.5C16 16.8813 14.8813 18 13.5 18H6.5C5.11937 18 4 16.8813 4 15.5V5H3.5C3.22387 5 3 4.77625 3 4.5C3 4.22375 3.22387 4 3.5 4H6.47187L7.28125 2.705C7.55625 2.26644 8.0375 2 8.55312 2H11.4469C11.9625 2 12.4438 2.26644 12.6906 2.705ZM7.65312 4H12.3469L11.8687 3.235C11.7781 3.08875 11.6187 3 11.4469 3H8.55312C8.38125 3 8.22187 3.08875 8.13125 3.235L7.65312 4ZM5 15.5C5 16.3281 5.67156 17 6.5 17H13.5C14.3281 17 15 16.3281 15 15.5V5H5V15.5Z"
                                    fill="currentColor"></path>
                                </svg> </button>
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
