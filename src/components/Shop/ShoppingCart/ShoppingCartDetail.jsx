import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShoppingCartModal } from "../../../redux/slices/CartSlice";
import Button from "../../UI/Button/Button";
import { Trash2 } from "lucide-react";

const ShoppingCartDetail = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state)=>state.cart);
  const [cartQty,setCartQty] = useState([]);

  const handleQtyClick = (type,id) =>{
    console.log(type,id);
  }

  const handleCartItemDelete = (e) =>{
    console.log(e.target.id)
  }
  
  useEffect(()=>{
    if(cartItems.length > 0){ 
      for (const key in cartItems) {
        if (Object.prototype.hasOwnProperty.call(cartItems, key)) {
          const element = cartItems[key];
          // let newCartQty = {...cartData,element._id:element.cartQty};
          setCartQty((state)=>({
            ...state,
            [element._id]:element.cartQty
          }))
        }
      }
    }
  },[cartItems,setCartQty]);
  console.log(cartQty,' CART QTY')
  return (
    <>
      <div>
      {
        cartItems.map((value)=>(
          <div className="flex justify-between mx-4 my-2 text-gray-900" key={value._id}>
            <div className="left flex">
                <div className="h-20 w-16 overflow-hidden rounded-md flex justify-center items-center cursor-pointer">
                <img
                  src={value.image}
                  alt={`${value.title} image`} 
                  className="w-full h-auto transition-transform duration-300 ease-linear hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-around items-start ml-2">
                <p className="text-sm font-semibold">{value.title}</p>
                <div>
                  <Button className="border border-gray-200" onClick={()=>handleQtyClick('minus',value._id)}>-</Button>
                  <span className="text-md font-semibold mx-2">{value.cartQty}</span>
                  <Button className="border border-gray-200" onClick={()=>handleQtyClick('add',value._id)}>+</Button>
                </div>
              </div>
            </div>
            <div className="right flex flex-col justify-around items-end">
              <p className="text-sm font-semibold">&#8377;{value.price}</p>
              <Button>
                <Trash2 size={20} id={value._id} onClick={handleCartItemDelete}/>
              </Button>
            </div>
        </div>
        ))
      }
      </div>
      <hr className="my-4 text-gray-300" />
      <div className="flex justify-end ">
        <Button
          type="button"
          className="bg-red-400 text-white mr-2"
          onClick={() => dispatch(toggleShoppingCartModal())}
        >
          Close
        </Button>
        <Button type="button" className="bg-gray-800 text-white">
          Checkout
        </Button>
      </div>
    </>
  );
};

export default ShoppingCartDetail;
