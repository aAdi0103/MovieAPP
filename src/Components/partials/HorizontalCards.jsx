import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data }) => {
  const [filter, setFilter] = useState("all");

  const handleSelectChange = (value) => {
    setFilter(value);
  };

  // Filter data based on the selected option
  const filteredData = data.filter((d) => {
    if (filter === "all") return true;
    if (filter === "movie" && d.media_type === "movie") return true;
    if (filter === "tv" && d.media_type === "tv") return true;
    return false;
  });

  return (
    <div className="w-full h-[40vh] p-5">
      <div className="mb-5 flex justify-between items-center bg-[#6556CD] p-3 rounded-lg">
        <h1 className="text-2xl font-semibold text-zinc-200">Trending</h1>
        <Dropdown onSelectChange={handleSelectChange} />
      </div>
      <div className="w-full flex overflow-x-auto space-x-4">
        {filteredData.map((d, i) => (
          <div key={i} className="text-white bg-zinc-700 min-w-[16vw] h-[55vh] rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-[35vh] w-full object-cover mb-5"
              src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`}
              alt=""
            />
            <h1 className="text-2xl font-extrabold text-white ml-3">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="text-zinc-300 ml-3 text-xs">
              {d.overview.slice(0, 100)}
              <Link to="#" className="text-blue-400 ml-3">more ...</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;