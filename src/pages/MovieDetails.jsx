import { useParams } from "react-router";
import { useContext } from "react";

//context
import MovieContext from "../contexts/MovieContext";

export default function MovieDetails() {

        const { id } = useParams();

        const movies = useContext(MovieContext);

        const currentMovie = movies.find(movie => movie.id === parseInt(id));

        console.log(currentMovie);

    return <>
        <div className="box-det">
            <h1>{currentMovie.title}</h1>
            <div className="movie-box-det">
                <div className="img-box-det">
                    <img src={currentMovie.imagePath} alt={currentMovie.title} />
                </div>
                <div className="details-box-det">
                    <p>Director: {currentMovie.director}</p>
                    <p>Genre: {currentMovie.genre}</p>
                    <p>Year: {currentMovie.release_year}</p>
                    <p>Description: {currentMovie.abstract}</p>
                    <p>Average vote: {currentMovie.avg_vote}</p>
                </div>
            </div>
        </div>
    </>
}