import {Link} from 'react-router-dom'
const Cards = ({ Trending, lastElementRef }) => {
    // console.log(Trending)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Trending.map((d, i) => (
          <div
            key={i}
            ref={i === Trending.length - 1 ? lastElementRef : null} // Attach the ref to the last element
            className="text-white bg-zinc-700 min-w-[16vw] h-[55vh] rounded-lg shadow-lg overflow-hidden"
          >
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
    );
  };
  
  export default Cards;
  