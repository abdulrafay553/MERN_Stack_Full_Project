import { useEffect, useState } from "react";

// import icons from react icons
import { FaXmark, FaBarsStaggered, FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthProvider";
import { useCart } from "../../contexts/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  // const { user } = useContext(AuthContext);
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            {/* <FaTumblr className="inline-block" /> */}
            <img src="../src/assets/T-icon-2.png" alt="" className="w-8" />
            TopReads
          </Link>

          <ul className="md:flex space-x-12 hidden navitems">
            {navItems.map(({ link, path }) => (
              <Link
                key={link}
                to={path}
                className="link block text-base cursor-pointer uppercase text-black hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 lg:flex">
            <Link to={"/cart-page"}>
              <button
                type="button"
                className="hidden md:inline relative items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaCartArrowDown className="w-5" />
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                  {totalCartItems}
                </div>
              </button>
            </Link>
          </div>

          {/* menu btn, visible on mobile screen */}
          <div className="md:hidden">
            <Link to={"/cart-page"}>
              {/* <button className="mx-8"> */}
              <button
                type="button"
                className="mx-8 relative items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaCartArrowDown className="w-5" />
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                  {totalCartItems}
                </div>
              </button>
            </Link>
            &nbsp;
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <a
              href={path}
              key={link}
              onClick={toggleMenu}
              className="block  text-white hover:text-gray-500"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
