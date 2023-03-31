import React, { useState } from "react";

export default function Pagination(props) {
  let PageCount = 20;
  const [page, setPage] = useState(4);
  return (
    <div className="flex gap-2">
      <div
        className={`w-8 h-8 border border-blue-900 rounded-full flex items-center justify-center text-2xl  text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer ${
          page == 1 && "hidden"
        }`}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        {"<"}
      </div>
      <div className="w-8 h-8 border border-blue-900 rounded-full flex items-center justify-center text-2xl  text-blue-900 cursor-default">
        {page}
      </div>
      <div
        className={`w-8 h-8 border border-blue-900 rounded-full flex items-center justify-center text-2xl  text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer ${
          page == PageCount && "hidden"
        }`}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        {">"}
      </div>
    </div>
  );
}
