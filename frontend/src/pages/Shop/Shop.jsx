import { useContext, useEffect, useState } from "react";
import { Card, Pagination, Spinner } from "flowbite-react";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Shop.css";
import { Link } from "react-router-dom";

export default function Shop() {
  const { loading } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(8);

  const onPageChange = (page) => setCurrentPage(page);

  // fetching data
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [loading]);

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    book.bookTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // loader
  if (loading) {
    return (
      <div className="text-center mt-28">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  return (
    <div className="my-28 px-4 lg:px-24 md:px-24 xs xs1">
      <h2 className="text-3xl font-bold text-center mb-16 z-40">
        All Books are Available Here
      </h2>
      <input
        type="text"
        placeholder="SEARCH BY NAME "
        className="mb-4 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
        {currentBooks.map((book) => (
          <Link
            to={`/book/${book._id}`}
            key={book._id}
            className="cursor-pointer"
          >
            <Card key={book._id} className="h-full flex flex-col">
              <img src={book.imageURL} alt="" style={{ height: "25em" }} />
              <div className="flex flex-col flex-grow">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                  <p className="truncate">{book.bookTitle}</p>
                </h5>
                <div className="flex-grow">
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-justify line-clamp-4">
                    {book.bookDescription}
                  </p>
                </div>
                <button className="mt-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2">
                  Buy Now
                </button>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-center text-center mt-8">
        <Pagination
          currentPage={currentPage}
          layout="pagination"
          nextLabel="Next"
          onPageChange={onPageChange}
          previousLabel="Previous"
          showIcons
          totalPages={Math.ceil(filteredBooks.length / booksPerPage)}
        />
      </div>
    </div>
  );
}
