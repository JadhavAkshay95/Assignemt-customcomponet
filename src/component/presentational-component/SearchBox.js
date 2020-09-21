import React, { useEffect, useState } from "react";

const SearchBox = ({ filterData }) => {
  const [search, setSearch] = useState();

  useEffect(() => {
    filterData(search);
  }, [search]);

  const searchHandler = ($event) => {
    setSearch($event.target.value);
  };

  return (
    <>
      <div>
        <input
          placeholder="search by name"
          value={search}
          onChange={searchHandler}
        />
      </div>
    </>
  );
};
export default SearchBox;
