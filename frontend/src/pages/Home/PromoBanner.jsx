// import React from 'react'
import { Link } from "react-router-dom";
import bookPic from "../../assets/awardbooks.png";

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-12">
        {/* picture */}
        <div>
          <img src={bookPic} alt="" className="w-96" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            2023 National Book Awards for Fiction Shortlist
          </h2>
          <Link to="/shop" className="block mt-8">
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
