import React from "react";

const SidebarFilterList = ({ title, list, selectedList = [], onChange }) => {
  const handleCheckboxChange = (id) => {
    onChange(id); 
  };

  return (
    <>
      <h1 className="font-bold text-md mb-2 underline">{title}</h1>
      <ul className="mb-4">
        {list.map((value) => (
          <li key={value.id} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              id={value.id}
              className="accent-teal-700"
              checked={selectedList.includes(value.id)}
              onChange={() => handleCheckboxChange(value.id)}
            />
            <label htmlFor={value.id} className="flex items-center gap-2 cursor-pointer">
              <span>{value.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarFilterList;

