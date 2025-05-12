import {BrowserRouter, Routes, Route } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';

// layouts
import MainLayout from './layouts/MainLayout';
// pages
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import MovieContext from './contexts/MovieContext';

export default function App() {

  const [movies, setMovies] = useState([]);

  const uri = 'http://127.0.0.1:3000/movies';

  function moviesList() {

    axios.get(uri)
      .then(res => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch(err => console.log(err.message))
  }

  useEffect(moviesList, []);

  return (
    <>
      <MovieContext.Provider value={movies}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<HomePage />}/>
                <Route path='/:id' element={<MovieDetails />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieContext.Provider>
    </>
  )
}
