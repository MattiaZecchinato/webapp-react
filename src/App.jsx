import {BrowserRouter, Routes, Route } from 'react-router';

import MainLayout from './assets/layouts/MainLayout';
import HomePage from './assets/pages/HomePage';
import MovieDetails from './assets/pages/MovieDetails';


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<HomePage />}/>
            <Route path='/:id' element={<MovieDetails />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
