import { useContext } from 'react';

//context
import MovieContext from '../contexts/MovieContext';
//components
import MovieCard from '../components/MovieCard';

export default function HomePage() {

    const moviesList = useContext(MovieContext);

    return <>
        <h1>Movies List</h1>
        <div className='movies-box'>
            {moviesList.map(movie => <MovieCard key={movie.id} id={movie.id} title={movie.title} director={movie.director} year={movie.release_year} />)}
        </div>
    </>
}