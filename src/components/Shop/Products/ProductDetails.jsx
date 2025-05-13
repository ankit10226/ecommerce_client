import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

const ProductDetails = () => { 
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
      console.log(category,'    categoryyyyyyy');
    }, [category])
    
  return (
    <div className="w-5/6 overflow-y-auto px-4 py-2">
        <h1 className="font-bold text-2xl text-teal-900 underline">
            Products
        </h1>
    </div>
  )
}

export default ProductDetails