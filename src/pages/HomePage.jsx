import moviesList from '../data/moviesDemo.json';
import MovieCard from '../components/MovieCard';

export default function HomePage() {

    return <>
        <h1>Movies List</h1>
        <div className='movies-box'>
            {moviesList.map(movie => <MovieCard id={movie.id} title={movie.title} director={movie.director} />)}
        </div>
    </>
}