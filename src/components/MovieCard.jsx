import { NavLink } from "react-router";

import style from '../components-style/MovieCard.module.css';

export default function MovieCard({ id, title, director, year, image }) {

    const linkMovieDetails = `/${id}`;

    return <>
        <div className={style.card}>
            <div className={style.imgBox}>
                <img src={image} alt={title} className={style.img} />
            </div>
            <div className={style.detailsBox}>
                <p>{title}</p>
                <p>{director}</p>
                <p>{year}</p>
                <NavLink to={linkMovieDetails}>See More</NavLink>
            </div>
        </div>
    </>
}