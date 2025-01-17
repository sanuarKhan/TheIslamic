import React, { useState } from "react";
import FilteringBer from "./FilteringBer.jsx";

const ParentComponent = () => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (filters) => {
    console.log("Filters applied:", filters);
    // Fetch filtered data based on `filters` object
    // Example: You can send a request to an API or filter a local dataset
    // setFilteredData(yourFilteredData);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <FilteringBer onFilter={handleFilter} />
      {/* Display filtered data */}
      <div className="mt-6 ">
        {filteredData.length > 0 ? (
          <ul className="flex justify-between w-screen gap-5">
            {filteredData.map((item, index) => (
              <li key={index}>{JSON.stringify(item)}</li>
            ))}
          </ul>
        ) : (
          <p className="hidden">No data available</p>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
