import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Movies from "../components/Movies";

interface Movie {
  id: number;
  title: string;
  overview: string;
  posters: string;
  stars: number;
}

export default function PopularPage() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);


  const handleNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (page < lastPage) {
        setPage(page + 1)
    }

}
const handlePrevious = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (page >= 2) {
        setPage(page - 1)
    }
}

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: {language: 'en-US', page: `${page}`},
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setLastPage(response.data.total_pages);
        const newData = response.data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          posters: movie.poster_path,
          stars: movie.vote_average,
        }));
        setMovies(newData);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, [page]);

  const handleTop = () => {
    navigate("/top_rated_movies");
  };
  const handlePopular = () => {
    navigate("/popular_movies");
  };
  const handleNow = () => {
    navigate("/now_playing_movies");
  };
  const handleUpcoming = () => {
    navigate("/upcoming_movies");
  };

  return (
    <>
      <Nav></Nav>
      <main className="mx-16">
        <div className="flex justify-start space-x-3 mt-16 mb-4">
          <button
            onClick={handleNow}
            className="px-6 rounded-xl text-white text-sm bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] "
          >
            <p>Now playing</p>
          </button>
          <button
            onClick={handlePopular}
            className="py-1 px-6 rounded-xl text-white text-sm bg-[#563ff0]"
          >
            <p>Popular</p>
          </button>
          <button
            onClick={handleTop}
            className="px-6 rounded-xl text-white text-sm bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] "
          >
            <p>Top rated</p>
          </button>
          <button
            onClick={handleUpcoming}
            className="px-6 rounded-xl text-white text-sm bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] "
          >
            <p>Upcoming</p>
          </button>
        </div>
        <h2 className="text-white text-3xl mb-8 mt-10">Popular</h2>
        <div className="h-screen mb-44">
          <Movies movies={movies} />
        </div>
        <div className="w-full p-16">
            <div className="flex items-center mt-12 justify-center text-white">
                <a
                    onClick={handlePrevious}
                    className={`py-2 px-4 text-xl  rounded-full ${page === 1 ? "bg-[#2924aa] cursor-not-allowed" : "bg-[#5141EA] cursor-pointer"}`}>
                    {"<"}
                </a>
                <p
                    className="px-4 cursor-text items-center text-xl ">
                    {`${page}  / ${lastPage}`}
                </p>
                <a
                    onClick={handleNext}
                    className={`py-2 px-4 text-xl rounded-full ${page === lastPage ? "bg-[#2924aa] cursor-not-allowed" : "bg-[#5141EA] cursor-pointer"}`}>
                    {">"}
                </a>
            </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
