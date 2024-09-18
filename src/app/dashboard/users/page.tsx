import React from "react";

const page = () => {
  return (
    <div>
      <>
        
          <div className="card bg-white dark:bg-gray-800 rounded-xl shadow">
          <div className="table_card_titiel py-4 px-8 flex   gap-y-4 gap-x-3 flex-wrap justify-between items-center border-b border-gray-200 z-10 sticky top-0 bg-white dark:bg-gray-800 rounded-tr-xl">
              <div className="title">
                <h4 className="text-black dark:text-white text-[1.4rem] font-bold">
                  Users
                </h4>
                <h5 className="text-gray-600 dark:text-gray-100 text-[0.9rem] font-normal">
                  Add usres, edit and more.
                </h5>
              </div>

              <div className="buttons flex justify-center items-center gap-3">
                <button className="text-[1rem] text-nowrap text-black dark:text-white dark:border-gray-500  font-medium border boder-black rounded-xl py-[10px] px-5">
                  View more
                </button>
                <button className="text-[1rem] text-nowrap text-white bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 font-medium border-none rounded-xl py-[10px] px-5">
                  + Add New Usre
                </button>
              </div>
            </div>

            <div className="table_box min-h-[500px] overflow-auto" id="parent">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 w-full">
                <thead className="bg-gray-50 dark:bg-gray-700 ">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                    >
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr>
                    <td
                      scope="col"
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                    >
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      Chetan
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      19
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      Tepla
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
                      <div className="dropmenu z-0 bg-gray-600 ms-auto rounded-lg h-8 w-8 flex justify-center items-center relative cursor-pointer [&_ul]:hover:flex [&_ul]:hover:animate-[showfade_0.2s_1]">
                        <i className="ti ti-brand-juejin text-white dark:text-white"></i>
                        <ul
                          id="child"
                          className="list-none z-3 absolute hidden hover:flex top-[50%] translate-y-[-50%] divide-x border-t dark:border-gray-400 end-full bg-white rounded-md shadow dark:bg-gray-700 divide-y divide-gray-200 dark:divide-neutral-700 overflow-hidden"
                        >
                          <li className="text-[0.93rem] text-normal text-black dark:text-white flex justify-start gap-2 items-center hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 px-2 py-3">
                            {" "}
                            <i className="ti ti-info-square-rounded text-[1.2rem]"></i>{" "}
                            <span>View Data</span>
                          </li>
                          <li className="text-[0.93rem] text-normal text-black dark:text-white flex justify-start gap-2 items-center hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 px-2 py-3">
                            {" "}
                            <i className="ti ti-edit-off text-[1.2rem]"></i>{" "}
                            <span>Edit</span>
                          </li>
                          <li className="text-[0.93rem] text-normal text-black dark:text-white flex justify-start gap-2 items-center hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 px-2 py-3">
                            {" "}
                            <i className="ti ti-trash text-[1.2rem]"></i>{" "}
                            <span>Delete</span>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
       
      </>
    </div>
  );
};

export default page;
