// import React from 'react'
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import "./dasboard.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-w-full">
      <div className="px-4">
        <div className="w-full mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <h1 className="text-3xl font-bold mb-10">
              Demo Dashboard development for the book inventory
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-stretch">
                <div className="text-gray-400 text-xs">
                  Members <br />
                  connected
                </div>
                <div className="h-100 border-l mx-4"></div>
                <div className="flex flex-nowrap -space-x-3">
                  <div className="h-9 w-9">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://ui-avatars.com/api/?background=random"
                    />
                  </div>
                  <div className="h-9 w-9">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://ui-avatars.com/api/?background=random"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="bi bi-chat-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                >
                  Open
                </button>
              </div>
            </div>

            <hr className="my-10" />

            <div className="grid grid-cols-2 gap-x-20">
              <div>
                <h2 className="text-2xl font-bold mb-4">Stats</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <div className="p-4 bg-green-100 rounded-xl">
                      <div className="font-bold text-xl text-gray-800 leading-none">
                        Good day, <br /> {user?.displayName || "User"}
                      </div>
                      <div className="mt-5">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition"
                        >
                          Start tracking
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                    <div className="font-bold text-2xl leading-none">20</div>
                    <div className="mt-2">Tasks finished</div>
                  </div>
                  <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                    <div className="font-bold text-2xl leading-none">5,5</div>
                    <div className="mt-2">Tracked hours</div>
                  </div>
                  <div className="col-span-2">
                    <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                      <div className="font-bold text-xl leading-none">
                        Your daily plan
                      </div>
                      <div className="mt-2">5 of 8 completed</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Your tasks today</h2>

                <div className="space-y-4">
                  <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                    <div className="flex justify-between">
                      <div className="text-gray-400 text-xs">Number 10</div>
                      <div className="text-gray-400 text-xs">4h</div>
                    </div>
                    <a
                      href="javascript:void(0)"
                      className="font-bold hover:text-yellow-800 hover:underline"
                    >
                      Blog and social posts
                    </a>
                    <div className="text-sm text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-gray-800 inline align-middle mr-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                      Deadline is today
                    </div>
                  </div>
                  <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                    <div className="flex justify-between">
                      <div className="text-gray-400 text-xs">Grace Aroma</div>
                      <div className="text-gray-400 text-xs">7d</div>
                    </div>
                    <a
                      href="javascript:void(0)"
                      className="font-bold hover:text-yellow-800 hover:underline"
                    >
                      New campaign review
                    </a>
                    <div className="text-sm text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-gray-800 inline align-middle mr-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                      New feedback
                    </div>
                  </div>
                  <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                    <div className="flex justify-between">
                      <div className="text-gray-400 text-xs">Petz App</div>
                      <div className="text-gray-400 text-xs">2h</div>
                    </div>
                    <a
                      href="javascript:void(0)"
                      className="font-bold hover:text-yellow-800 hover:underline"
                    >
                      Cross-platform and browser QA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-slate-600 mx-auto grid max-w-2xl grid-cols-2 gap-y-4 px-4 py-1 sm:my-10 sm:rounded-md sm:border sm:shadow">
        <div className="col-span-2 col-start-1 flex flex-col justify-between border-b py-3 sm:flex-row">
          <p className="font-medium">Overview</p>
          <select className="text-slate-500 hover:bg-slate-200 rounded-lg border-2 px-4 py-2 font-medium focus:outline-none focus:ring">
            <option value="last-month">Last Month</option>
            <option value="last-month">Last 2 Months</option>
            <option value="last-month">This Year</option>
          </select>
        </div>
        <div className="col-span-2 -mx-4 bg-gradient-to-t from-indigo-500 to-blue-500 px-4 py-8 sm:col-span-1 sm:mx-0 sm:rounded-xl sm:py-4">
          <p className="mb-4 font-medium text-indigo-100">Cases in pipeline</p>
          <div className="mb-6 flex max-w-xs">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-400 sm:mr-3 sm:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div className="px-4">
              <p className="mb-1 text-2xl font-black text-white">1844</p>
              <p className="font-medium text-indigo-100">$192,234.00</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col items-center px-4 py-1">
              <p className="text-lg font-medium text-white">232</p>
              <p className="text-xs font-medium text-indigo-100">Quote</p>
            </div>
            <div className="mb-1 flex flex-col items-center px-4 py-1 sm:mr-1 sm:mb-0">
              <p className="text-lg font-medium text-white">$140</p>
              <p className="text-xs font-medium text-indigo-100">CAC</p>
            </div>
            <div className="mb-1 flex flex-col items-center rounded-2xl bg-white px-4 py-1 sm:mr-1 sm:mb-0">
              <p className="text-lg font-medium text-indigo-500">21</p>
              <p className="text-xs font-medium text-indigo-500">Refunds</p>
            </div>
            <div className="flex flex-col items-center px-4 py-1">
              <p className="text-lg font-medium text-white">$44</p>
              <p className="text-xs font-medium text-indigo-100">PPC</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-4 py-4 sm:col-span-1 sm:gap-8 sm:px-4">
          <div className="">
            <p className="text-lg font-bold">32</p>
            <p className="text-slate-400 mb-2 font-medium">$230,000</p>
            <span className="bg-slate-200 text-slate-600 rounded-full px-2 py-0.5 text-xs font-medium">
              Drafts
            </span>
          </div>
          <div className="">
            <p className="text-lg font-bold">621</p>
            <p className="text-slate-400 mb-2 font-medium">$230,000</p>
            <span className="rounded-full bg-indigo-200 px-2 py-0.5 text-xs font-medium text-indigo-600">
              Prending Approval
            </span>
          </div>
          <div className="">
            <p className="text-lg font-bold">68</p>
            <p className="text-slate-400 mb-2 font-medium">$230,000</p>
            <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700">
              Sent to Clients
            </span>
          </div>
          <div className="">
            <p className="text-lg font-bold">970</p>
            <p className="text-slate-400 mb-2 font-medium">$230,000</p>
            <span className="rounded-full bg-green-200 px-2 py-0.5 text-xs font-medium text-green-600">
              Signing
            </span>
          </div>
        </div>
        <div className="col-span-2 col-start-1 grid grid-cols-2 gap-6 border-t py-4 sm:grid-cols-4 sm:px-4 sm:py-8">
          <div className="">
            <p className="text-slate-500 text-sm">Revenue</p>
            <p className="text-xl font-medium">$924,883</p>
          </div>
          <div className="">
            <p className="text-slate-500 text-sm">Liabilities</p>
            <p className="text-xl font-medium">$924,883</p>
          </div>
          <div className="">
            <p className="text-slate-500 text-sm">Profit</p>
            <p className="text-xl font-medium">$213,002</p>
          </div>
          <div className="">
            <p className="text-slate-500 text-sm">Target</p>
            <p className="text-xl font-medium">$150,000</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
