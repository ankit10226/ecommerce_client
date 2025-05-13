import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const ProductDetails = () => {
  const {products} = useSelector((state)=>state.product);

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const subCategories = searchParams.getAll("subCategory");
  const brands = searchParams.getAll("brand");

  useEffect(() => {
    const filters = {
      category,
      subCategories,
      brands,
    };
    console.log(products);
  }, [category, subCategories, brands]);

  return (
    <div className="w-4/5 overflow-y-auto">
      <h1 className="font-bold text-2xl text-teal-900 underline">Products</h1>
    </div>
  );
};

export default ProductDetails;
