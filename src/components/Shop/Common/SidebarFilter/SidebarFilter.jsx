import React from "react";
import subCategoryList from "../../../../utils/Shop/subCategory";
import brandList from "../../../../utils/Shop/Brand"; 
import SidebarFilterList from "./SidebarFilterList";
import { useParams, useSearchParams } from "react-router-dom";

const SidebarFilter = () => {
  const [searchParams] = useSearchParams();
    const subCategory = searchParams.get('subCategory');
    const brand = searchParams.get('brand');
    
  return (
    <div className={`h-full w-1/6 shadow-2xl text-teal-900 pl-6 py-4`}>
      <h1 className="font-bold text-lg mb-4 underline">Filter</h1>
      <SidebarFilterList title="By Category" list={subCategoryList} selected={subCategory}/>
      <SidebarFilterList title="By Brand" list={brandList} selected={brand}/>
    </div>
  );
};

export default SidebarFilter;
