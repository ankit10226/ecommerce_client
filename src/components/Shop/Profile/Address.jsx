import React from "react";
import Button from "../../UI/Button/Button";

const Address = () => {
  return (
    <div className="border border-gray-300 rounded-md p-2">
      {/* <AddAddressModal /> */}
      <div className="h-fit">
        <div className="flex justify-between items-center p-2">  
          <Button
            className="bg-teal-900 text-white"
            // onClick={() => dispatch(toggleProductModal({ type: "addModal" }))}
          >
            Add New Address
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Address;
