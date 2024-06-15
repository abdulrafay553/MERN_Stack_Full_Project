import { createContext, useContext, useState, useEffect } from "react";

// Create a context
const CartContext = createContext();

// Create a provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const [shippingCharge, setShippingCharge] = useState(10);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem._id === item._id
    );

    if (existingItemIndex !== -1) {
      // If item already exists, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // If item is not in the cart, add it
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item._id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // State for promo code and discount
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Function to handle promo code application
  const handleApplyPromoCode = () => {
    if (promoCode === "rafay123") {
      setDiscount(5);
    } else {
      alert("Invalid promo code..!!!");
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setDiscount(0);
  };

  const updateShippingCharge = (charge) => {
    // Calculate the difference in shipping charge
    const difference = charge - shippingCharge;
    setShippingCharge(charge);

    // Adjust total price based on the difference in shipping charge
    setCartItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        totalPrice: item.totalPrice + difference * item.quantity,
      }))
    );
  };

  // Make sure to provide all necessary values and functions in the value prop
  const value = {
    cartItems,
    addToCart,
    setCartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    shippingCharge,
    updateShippingCharge,
    discount,
    setPromoCode,
    promoCode,
    handleApplyPromoCode,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Create a custom hook to use the context
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
