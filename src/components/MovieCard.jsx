import { NavLink } from "react-router";

import style from '../components-style/MovieCard.module.css';

export default function MovieCard({ movie }) {

    const linkMovieDetails = `/${movie.id}`;

    return <>
        <div className={style.card}>
            <div className={style.imgBox}>
                <img src={movie.imagePath} alt={movie.title} className={style.img} />
            </div>
            <div className={style.detailsBox}>
                <h3>{movie.title}</h3>
                <p>Author: <span>{movie.director}</span></p>
                <p>Reviews average vote: {movie.avg_vote}</p>
                <p>{movie.abstract}</p>
                <NavLink to={linkMovieDetails}>See More</NavLink>
            </div>
        </div>
    </>
}