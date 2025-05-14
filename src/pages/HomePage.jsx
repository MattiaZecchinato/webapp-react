import { useContext } from 'react';

//context
import MovieContext from '../contexts/MovieContext';
//components
import MovieCard from '../components/MovieCard';

export default function HomePage() {

    const moviesList = useContext(MovieContext);

    return <>
        <div className='home-page-box'>
            <h1>Movies List</h1>
            <div className='movies-box'>
                {moviesList.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    </>
}