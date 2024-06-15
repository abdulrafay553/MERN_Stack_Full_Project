import { Link, useLoaderData } from "react-router-dom";
import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
// import { useState } from "react";
import { useCart } from "../../contexts/CartContext";

const SignleBook = () => {
  const data = useLoaderData();
  const {
    _id,
    bookTitle,
    imageURL,
    bookDescription,
    Price,
    authorName,
    bookPDFURL,
    category,
  } = data;
  console.log(data);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const book = {
      _id,
      bookTitle,
      imageURL,
      bookDescription,
      Price,
      authorName,
      bookPDFURL,
      category,
      quantity: 1,
    };
    addToCart(book);
    alert("Item added to cart successfully!");
  };

  return (
    <div className="mt-20">
      <Banner>
        <div className=" z-50 flex justify-between w-full py-12 px-4 border-b border-gray-200 bg-amber-400">
          <div className="flex items-center mx-auto">
            <p className="flex items-center text-2xl font-normal text-black">
              <MdAnnouncement className="me-2 text-red-600" />
              <span className="text-4xl font-semibold">
                Book Name: {bookTitle}
              </span>
            </p>
          </div>
          <Banner.CollapseButton
            color="gray"
            className="border-0 bg-transparent px-0"
          >
            <HiX className="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
      </Banner>

      {/* book details */}
      <div className="">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-3/4 w-full mx-auto flex flex-wrap">
              <div className="grid mx-auto">
                <img
                  alt="Image"
                  // className="lg:w-96 w-96 lg:h-96 h-96 object-center rounded"
                  className="object-center rounded"
                  src={imageURL}
                  style={{ height: "50ex", width: "40ex" }}
                />
                <br />
                <hr />
                <br />
                <div>
                  <Link to={bookPDFURL} target="_blank">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
                    >
                      {" "}
                      Download PDF
                    </button>
                  </Link>
                </div>
                <div>
                  <Link>
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
                    >
                      {" "}
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 items-center justify-end">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      BOOK NAME
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {bookTitle}
                    </h1>
                  </div>

                  <div>
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      AUTHOR NAME
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {authorName}
                    </h1>
                  </div>
                </div>

                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed">{bookDescription}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex ml-6 items-center">
                    <h1 className="text-sm title-font text-gray-500 tracking-widest">
                      Category:{" "}
                      <span className="text-slate-950">{category}</span>
                    </h1>
                  </div>
                </div>
                <span className="title-font font-semibold text-2xl text-gray-900">
                  Price: ${Price}
                </span>
                <br />
                <br />
                <hr />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignleBook;
