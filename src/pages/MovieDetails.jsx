import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

import MovieDetailsCard from "../components/MovieDetailsCard";
import ReviewCard from "../components/ReviewCard";
import FormReview from "../components/FormReview";
import RatingStars from "../components/RatingStars";

export default function MovieDetails() {

        const { id } = useParams();

        const [movie, setMovie] = useState([]);

        const uri = `http://127.0.0.1:3000/movies/${id}`

        function getMovie() {

            axios.get(uri)
                .then(res => {
                    console.log(res.data);
                    setMovie(res.data);
                })
                .catch(err => console.log(err))
        }

        useEffect(getMovie, []);

    return <>
        <div className="movie-det-container">

            <MovieDetailsCard movie={movie}/>

            <hr />
            
            <div className="heading-reviews">
                <h2>Our community reviews</h2>
                <p>Average: <RatingStars vote={movie.avg_vote} /></p>
            </div>
            <div className="box-reviews">
                {movie.reviews?.map(rev => <ReviewCard key={rev.id} name={rev.name} text={rev.text} vote={rev.vote} />)}
            </div>
            <div className="box-form">
                <FormReview uri={uri}/>
            </div>
        </div>
    </>
}