import style from '../components-style/MovieDetailsCard.module.css';

export default function MovieDetailsCard({ movie }) {

    return <>
        <div className={style.boxDet}>
            <div className={style.movieBoxDet}>
                <div className={style.imgBoxDet}>
                    <img src={movie.imagePath} alt={movie.title} />
                </div>
                <div className={style.detailsBoxDet}>
                    <h1>{movie.title}</h1>
                    <p><em>By {movie.director}</em></p>
                    <p>{movie.abstract}</p>
                </div>
            </div>
        </div>
    </>
}