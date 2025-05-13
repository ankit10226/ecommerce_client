import { Footprints, Shirt, StretchVertical } from "lucide-react";

const subCategoryList = [
  {
    id:'shirts',
    name:'Shirt',
    logo: <Shirt />,
    navigate: '/shop/products?subCategory=shirts'
  },
  {
    id:'jeans',
    name:'Jeans',
    logo: <StretchVertical />,
    navigate: '/shop/products?subCategory=jeans'
  },
  {
    id:'shoes',
    name:'Shoes',
    logo: <Footprints />,
    navigate: '/shop/products?subCategory=shoes'
  },
  {
    id:'tshirts',
    name:'T-Shirts',
    logo: <Shirt />,
    navigate: '/shop/products?subCategory=tshirts'
  },
] 

export default subCategoryList;