import React from 'react'

const AddAddressModal = () => {
  if(!isProductModalVisible) return null;
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-40" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <div className="bg-white p-4 lg:w-1/4 md:w-1/2 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleFormSubmit}>
        {
          modalType === 'addModal' && 
          <Input
            type="file"
            name="file"
            id="file"
            className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-teal-50 file:text-teal-700
            hover:file:bg-teal-100
            mb-4 cursor-pointer"
            onChange={handleFileSelect}
          /> 
        
        }
        { (!imageUrl && error.imageUrlError) && <p className='text-red-400 font-light text-sm'>{`Please upload product image!`}</p>}
        {(imageUrl && modalType === 'addModal') && (
          <div className="mb-4 flex justify-center">
            <img src={imageUrl} alt="Uploaded" className="w-1/4 h-auto rounded shadow" />
          </div>
        )}
        <Select
          name="category"
          id="category"
          placeholder="Select Category"
          options={categoryList}
          value={formData.category}
          onChange={handleInputChange}
        />
        { error.category && <p className='text-red-400 font-light text-sm'>{`This field is required!`}</p>}
        <Select
          name="subCategory"
          id="subCategory"
          placeholder="Select Sub Category"
          options={subCategoryList}
          value={formData.subCategory}
          onChange={handleInputChange}
        />
        { error.subCategory && <p className='text-red-400 font-light text-sm'>{`This field is required!`}</p>}
        <Select
          name="brand"
          id="brand"
          placeholder="Select Brand"
          options={brandList}
          value={formData.brand}
          onChange={handleInputChange}
        />
        { error.brand && <p className='text-red-400 font-light text-sm'>{`This field is required!`}</p>}
        <Input
            type="text"
            name="title"
            id="title"
            label="Title"
            className={`${error.title ? 'border-2 border-red-400' : 'mb-4'}`}
            value={formData.title}
            onChange={handleInputChange}
          />
          { error.title && <p className='text-red-400 font-light text-sm'>{`This field is required!`}</p>}
        <Input
            type="number"
            name="price"
            id="price"
            label="Price"
            className={`${error.price ? 'border-2 border-red-400' : 'mb-4'}`}
            value={formData.price}
            onChange={handleInputChange}
          />
          { error.price && <p className='text-red-400 font-light text-sm'>{`This field is required!`}</p>}
        <Input
            type="number"
            name="quantity"
            id="quantity"
            label="Quantity"
            className={`${error.quantity ? 'border-2 border-red-400' : 'mb-4'}`}
            value={formData.quantity}
            onChange={handleInputChange}
          />
          { error.quantity && <p className='text-red-400 font-light text-sm'>{`This field is required!`}</p>}
        <TextArea
            type="number"
            name="description"
            id="description"
            label="Description"
            className={`${error.description ? 'border-2 border-red-400' : 'mb-4'}`}
            value={formData.description}
            onChange={handleInputChange}
          />
          
          { error.description && <p className='text-red-400 font-light text-sm'>{`This field is required!`}</p>}
          <div className='flex justify-end '>
            <Button type="button" className="bg-teal-500 text-white mr-2" onClick={() => dispatch(toggleProductModal())}>
              Close
            </Button> 
            <Button type="submit" className="bg-teal-500 text-white">
              Submit
            </Button> 
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default AddAddressModal