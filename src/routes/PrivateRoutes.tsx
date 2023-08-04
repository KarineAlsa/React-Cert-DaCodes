import { Navigate, Route, Routes } from 'react-router-dom';
import NowPlayingPage from '../pages/NowPlayingPage';
import PopularPage from '../pages/PopularPage';
import TopRatedPage from '../pages/TopRatedPage';
import UpcomingPage from '../pages/UpcomingPage';

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path='/now_playing_movies' element={<NowPlayingPage />} />
            <Route path='/popular_movies' element={<PopularPage />} />
            <Route path='/top_rated_movies' element={<TopRatedPage />} />
            <Route path='/upcoming_movies' element={<UpcomingPage />} />
            <Route path='/*' element={<Navigate to='/now_playing_movies' replace />} />
        </Routes>
    );
};