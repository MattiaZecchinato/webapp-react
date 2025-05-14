import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from '../components-style/MovieCard.module.css';

import addStars from "../utils/addStars";

export default function MovieCard({ movie }) {

    const linkMovieDetails = `/${movie.id}`;

    const arrayStars = addStars(movie.avg_vote);

    return <>
        <div className={style.card}>
            <div className={style.imgBox}>
                <img src={movie.imagePath} alt={movie.title} className={style.img} />
            </div>
            <div className={style.detailsBox}>
                <h3>{movie.title}</h3>
                <p>Author: <span>{movie.director}</span></p>
                <p>Reviews average vote: {arrayStars.map((elem, i) => <FontAwesomeIcon key={i} icon={elem} style={{color: "#FFD43B",}} />)}</p>
                <p>{movie.abstract}</p>
                <NavLink to={linkMovieDetails}>See More</NavLink>
            </div>
        </div>
    </>
}