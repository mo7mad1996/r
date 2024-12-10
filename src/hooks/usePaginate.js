import React, { useState } from "react";

const usePaginate = ({ itemsPerPage, items }) => {
  const [page, setPage] = useState(1);
  //   const itemsPerPage = 20;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);

  return {
    page,
    setPage,
    totalPages,
    displayedItems,
  };
};

export default usePaginate;
