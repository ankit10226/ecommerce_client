import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchFilteredProducts } from "../../../redux/slices/ProductSlice";
import Button from "../../UI/Button/Button"

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  console.log(products);

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const subCategories = searchParams.getAll("subCategory");
  const brands = searchParams.getAll("brand");

  const showProductDetail = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    console.log(id);
  };

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
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl text-teal-900 my-3">Products</h1>
        <span className="text-sm font-semibold text-teal-900">Total Products : {products.length}</span>
      </div>
      <hr className="mb-4 text-gray-300"/>
      <div className="w-full p-2 grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {products.map((value) => (
          <div
            key={value._id}
            className="shadow-lg rounded-lg border-1 border-gray-300 hover:border-gray-400 hover:transition ease-linear text-teal-900"
          >
            <div className="">
              <div className="h-74 overflow-hidden rounded-lg flex justify-center items-center mb-6 cursor-pointer">
                <img
                  src={value.image}
                  alt={`${value.title} image`}
                  data-id={value.id}
                  className="w-full h-auto transition-transform duration-300 ease-linear hover:scale-110"
                  onClick={showProductDetail}
                />
              </div>
              <hr className="m-4 text-gray-300"/>
              <div className="mx-4">
                <h1 className="font-semibold text-lg text-teal-900">{value.title}</h1>
                <div className="flex justify-between items-center py-1">
                  <p className="font-semibold text-teal-700">
                    {value.subCategory[0].toUpperCase() +
                      value.subCategory.slice(1)}
                  </p>
                  <p className="font-semibold text-teal-700">
                    {value.brand[0].toUpperCase() + value.brand.slice(1)}
                  </p>
                </div>
                <p className="font-semibold text-teal-700">
                   &#8377;{value.price}
                </p>
                <Button  type="button" className="bg-teal-900 text-white w-full my-2">
                  Add To Cart
                </Button> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
