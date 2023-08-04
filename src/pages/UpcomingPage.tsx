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


export default function UpcomingPage() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState<Movie[]>([]);

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/upcoming',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`  
    }
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
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
  }, []);

  const handleTop = () => {
    navigate('/top_rated_movies');
  };
  const handlePopular = () => {
    navigate('/popular_movies');
  };
  const handleNow = () => {
    navigate('/now_playing_movies');
  };
  const handleUpcoming = () => {
    navigate('/upcoming_movies');
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
            className="px-6 rounded-xl text-white text-sm bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] "
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
            className="py-1 px-6 rounded-xl text-white text-sm bg-[#563ff0]"
          >
            <p>Upcoming</p>
          </button>
        </div>
        <h2 className="text-white text-3xl mb-8 mt-10">
          Upcoming
        </h2>
        <div className="h-screen mb-[35rem]">
        <Movies movies={movies} />
        </div>
        <div>
          </div>
      </main>
      <Footer></Footer>
    </>
  );
}
