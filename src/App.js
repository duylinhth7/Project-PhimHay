import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutDefult from './layout/LayoutDefault';
import FilmHot from './components/FilmHot';
import FilmDetail from './pages/FilmDetail';
import FilmSeries from './pages/FIlmSeries';
import FilmMovies from './pages/FilmMovies';
import PlayFilm from './pages/PlayFilm';
import FilmHoatHinh from './pages/FilmHoatHinh';
import SearchFilmDetail from './pages/SearchFilmDetail';
import FilmSeriesPage from './pages/FIlmSeries/FilmSeriesPage';
import FilmHoatHinhPage from './pages/FilmHoatHinh/FilmHoatHinhPage';
import TvShowPage from './pages/TvShows/TvShowPage';
import PageMain from './components/PageMain';
import SpotlightMovie from './components/SpotlightMovie';
import FilmMoviesPage from './pages/FilmMovies/FIlmMoviesPage';
import FilmSeriesNav from './pages/FIlmSeries/FilmSeriesNav';

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<LayoutDefult />}>
            <Route path="/" element={<PageMain />} />
            <Route element={<SpotlightMovie />} />
            <Route element={<FilmHot />} />
            <Route path="/film-detail/:id" element={<FilmDetail />} />
            <Route element={<FilmSeries />} />
            <Route element={<FilmMovies />} />
            <Route element={<FilmSeriesNav />} />
            <Route path="/play-film/:id" element={<PlayFilm />} />
            <Route element={<FilmHoatHinh />} />
            <Route path="/search/:id" element={<SearchFilmDetail />} />
            <Route path="/filmSeries" element={<FilmSeriesPage />} />
            <Route path="/filmhoathinh" element={<FilmHoatHinhPage />} />
            <Route path="/filmMovies" element={<FilmMoviesPage />} />
            <Route path="/tvShow" element={<TvShowPage />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
