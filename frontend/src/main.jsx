// import React from "react";
// import ReactDOM from "react-dom/client";
// // import App from "./App.jsx";
// import "./index.css";
// import router from "./routers/router.jsx";
// import { RouterProvider } from "react-router-dom";
// import AuthProvider from "./contexts/AuthProvider.jsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SingleBook from "./pages/shared/SignleBook.jsx";
// import CartPage from "./pages/cart/cartpage.jsx";
// import { CartProvider } from "./contexts/CartContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <CartProvider>
//       <AuthProvider>
//         <RouterProvider router={router}></RouterProvider>
//       </AuthProvider>
//     </CartProvider>
//   </React.StrictMode>
// );

// const App = () => {
//   return (
//     <Router>
//       <Routes>
// <Route path="/cart-page" component={CartPage} />
// <Route path="/single-book" component={SingleBook} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import SingleBook from "./pages/shared/SignleBook.jsx";
import CartPage from "./pages/cart/cartpage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import ReactDOM from "react-dom/client";
import router from "./routers/router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <AuthProvider>
        <RouterProvider router={router}>
          <Router>
            <Routes>
              <Route path="/cart-page" component={CartPage} />
              <Route path="/single-book" component={SingleBook} />
            </Routes>
          </Router>
        </RouterProvider>
      </AuthProvider>
    </CartProvider>
  </React.StrictMode>
);
