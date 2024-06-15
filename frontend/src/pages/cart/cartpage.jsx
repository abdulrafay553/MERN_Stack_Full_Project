import { useState } from "react";
import { Spinner } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import Cart from "./cart";
// import { loadStripe } from "@stripe/stripe-js";

const CartPage = () => {
  const { loading } = useContext(AuthContext);
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    updateShippingCharge,
    shippingCharge,
    discount,
    setPromoCode,
    handleApplyPromoCode,
    promoCode,
  } = useCart();

  console.log(cartItems);

  // State to track selected shipping option
  const [selectedShippingOption, setSelectedShippingOption] =
    useState("Standard shipping");

  // Function to handle change in shipping option
  const handleShippingOptionChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedShippingOption(selectedOption);

    // Update shipping charge based on selected option
    if (selectedOption === "Standard shipping") {
      updateShippingCharge(10);
    } else if (selectedOption === "Fast shipping") {
      updateShippingCharge(20);
    }
  };

  const totalItems = cartItems.reduce(
    (total, book) => total + book.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, book) => total + book.Price * book.quantity,
    0
  );

  const handleDecreaseQuantity = (bookId) => {
    decreaseQuantity(bookId);
  };

  const handleRemoveItem = (bookId) => {
    removeFromCart(bookId);
  };

  const handleIncreaseQuantity = (bookId) => {
    increaseQuantity(bookId);
  };

  // loader
  if (loading) {
    return (
      <div className="text-center mt-28">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto mt-10">
        <div className="flex flex-col md:flex-row shadow-md my-10">
          <div className="w-full md:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{totalItems} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {/* <div className="overflow-y-scroll h-3/6"> */}
            {cartItems.map((book) => (
              <div
                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                key={book._id}
              >
                <div className="flex w-full md:w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={book.imageURL} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{book.bookTitle}</span>
                    <span className="text-red-500 text-xs">
                      {book.authorName}
                    </span>
                    <a
                      href="#"
                      onClick={() => handleRemoveItem(book._id)}
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div className="flex justify-center w-full md:w-1/5 mt-4 md:mt-0">
                  <svg
                    className="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    onClick={() => handleDecreaseQuantity(book._id)}
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  <input
                    className="mx-2 border text-center w-14"
                    type="text"
                    value={book.quantity}
                    readOnly
                  />
                  <svg
                    className="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    onClick={() => handleIncreaseQuantity(book._id)}
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center w-full md:w-1/5 mt-4 md:mt-0 font-semibold text-sm">
                  ${book.Price}
                </span>
                <span className="text-center w-full md:w-1/5 mt-4 md:mt-0 font-semibold text-sm">
                  ${book.Price * book.quantity}
                </span>
              </div>
            ))}
            {/* </div> */}
            <Link
              to="/shop"
              className="flex font-semibold text-indigo-600 text-sm mt-10 justify-center"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-full md:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {totalItems}
              </span>
              <span className="font-semibold text-sm">${totalPrice}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select
                className="block p-2 text-gray-600 w-full text-sm"
                onChange={handleShippingOptionChange}
                value={selectedShippingOption}
              >
                <option value="Standard shipping">
                  Standard shipping - $10.00
                </option>
                <option value="Fast shipping">Fast shipping - $20.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
            </div>
            <Link to="">
              <button
                type="button"
                onClick={handleApplyPromoCode}
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
              >
                Apply
              </button>
            </Link>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${totalPrice + shippingCharge - discount}</span>
              </div>

              <Link to="/Cart">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
