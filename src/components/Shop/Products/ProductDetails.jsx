import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchFilteredProducts } from "../../../redux/slices/ProductSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  console.log(products);

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
    dispatch(fetchFilteredProducts(filters));
  }, [searchParams.toString()]);

  return (
    <div className="w-4/5 overflow-y-auto my-2 mx-4">
      <h1 className="font-bold text-2xl text-teal-900 underline">Products</h1>
      <div className="w-full p-2 grid lg:grid-cols-2 gap-4 md:grid-cols-1">
        {products.map((value) => (
          <div
            key={value._id}
            className="shadow-lg rounded-lg border-1 border-gray-300 hover:border-gray-400 hover:transition ease-linear text-teal-900"
          >
            <div className="flex h-50">
              <div className="w-1/3 overflow-hidden rounded-lg flex justify-center items-center">
                <img
                  src={value.image}
                  alt={`${value.title} image`}
                  className="w-full h-auto transition-transform duration-300 ease-linear hover:scale-110"
                />
              </div>
              <div className="w-2/3 overflow-y-scroll p-2">
                <div className="flex">
                  <h1 className="font-bold w-1/3">Category</h1>
                  <p className="pl-2 w-2/3 font-semibold text-teal-700">
                    {value.category[0].toUpperCase() + value.category.slice(1)}
                  </p>
                </div>
                <div className="flex">
                  <h1 className="font-bold w-1/3">Sub Category</h1>
                  <p className="pl-2 w-2/3 font-semibold text-teal-700">
                    {value.subCategory[0].toUpperCase() +
                      value.subCategory.slice(1)}
                  </p>
                </div>
                <div className="flex">
                  <h1 className="font-bold w-1/3">Brand</h1>
                  <p className="pl-2 w-2/3 font-semibold text-teal-700">
                    {value.brand[0].toUpperCase() + value.brand.slice(1)}
                  </p>
                </div>
                <div className="flex">
                  <h1 className="font-bold w-1/3">Title</h1>
                  <p className="pl-2 w-2/3 font-semibold text-teal-700">
                    {value.title}
                  </p>
                </div>
                <div className="flex">
                  <h1 className="font-bold w-1/3">Price</h1>
                  <p className="pl-2 w-2/3 font-semibold text-teal-700">
                    {value.price}
                  </p>
                </div>
                <div className="flex">
                  <h1 className="font-bold w-1/3">Quantity</h1>
                  <p className="pl-2 w-2/3 font-semibold text-teal-700">
                    {value.quantity}
                  </p>
                </div>
                <div className="flex">
                  <h1 className="font-bold w-1/3">Description</h1>
                  <p className="pl-2 w-2/3 font-semibold text-teal-700">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
