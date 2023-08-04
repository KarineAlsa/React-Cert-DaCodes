import React from "react";
import Stars from "./Stars";

interface Movie {
  id: number;
  title: string;
  overview: string;
  posters: string;
  date:string;
  genre: string;
  stars: number;
}

interface MoviesProps {
  movies: Movie[];
}

const Movies: React.FC<MoviesProps> = ({ movies }) => {

  return (
    <div className="mx-auto h-full px-16">
      <div className="grid gap-6 grid-cols-5 place-items-center">
        {movies.map((movie) => (
          <div key={movie.id} className="w-48 group">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                className="w-full"
                src={import.meta.env.VITE_IMAGE_URL + movie.posters}
                alt=""
              />
              <div className="absolute h-full w-full bg-[#5241eaa7] flex flex-col items-center pt-8 px-6 -top-0 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-white cursor-pointer">
                <h2 className="text-lg text-center">{movie.title} </h2>
                <h3 className="text-xs text-center">{movie.date} </h3>
                <h4 className="text-xs text-center ">{movie.genre} </h4>
                <p className="text-xs line-clamp-5 mb-10 ">{movie.overview}</p>
                <Stars stars={movie.stars} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Movies;
