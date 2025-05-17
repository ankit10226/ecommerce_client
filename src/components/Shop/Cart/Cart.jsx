import { ShoppingCart } from "lucide-react";
import React from "react";
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart); 
  console.log('cartItem',cartItems)

  const navigate = useNavigate(); 

  const handleShoppingCart = () => {
    navigate("/shop/shoppingCart");
  };
  return (
    <Button
      type="button"
      className="bg-red-400 text-white px-4 py-2 flex justify-between items-center"
      onClick={handleShoppingCart}
    >
      <ShoppingCart />
      <span className="ml-4 px-2 bg-white rounded-lg text-teal-800">{cartItems.length}</span>
    </Button>
  );
};

export default Cart;
