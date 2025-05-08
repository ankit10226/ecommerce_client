import { ShoppingCart } from 'lucide-react';
import React from 'react';
import Button from '../../UI/Button/Button';

const Cart = () => {
  return (
    <Button type="button" className="bg-red-400 text-white px-4 py-2 flex justify-between items-center">
      <ShoppingCart />
      <span className='ml-4 px-2 bg-white rounded-lg text-teal-800'>0</span>
    </Button>
  );
};

export default Cart;
