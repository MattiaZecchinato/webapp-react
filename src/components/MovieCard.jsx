import { NavLink } from "react-router";

export default function MovieCard({ id, title, director, year }) {

    const linkMovieDetails = `/${id}`;

    return <>
        <div className="card">
            <div className="img-box">
                <img src="" alt="movies" />
            </div>
            <div className="details-box">
                <p>{title}</p>
                <p>{director}</p>
                <p>{year}</p>
                <NavLink to={linkMovieDetails}>See More</NavLink>
            </div>
        </div>
    </>
}