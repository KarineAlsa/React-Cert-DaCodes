import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

export default function NowPlayingPage() {
  const navigate = useNavigate();

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
            className="py-1 px-6 rounded-xl text-white text-sm bg-[#563ff0]"
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
            className="px-6 rounded-xl text-white text-sm bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] "
          >
            <p>Upcoming</p>
          </button>
        </div>
        {/* <Dock/> */}
        <h2 className="text-white text-xl font-poppinsBold text-center md:text-start md:mx-16 mb-8">
          Now Playing
        </h2>
        {/* <Movies movies={movies} /> */}
        <div>{/* <Pagination/> */}</div>
      </main>
      <Footer></Footer>
    </>
  );
}
