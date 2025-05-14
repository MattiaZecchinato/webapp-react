import { faStar as fullStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

export default function addStars(vote) {
    
    const arrayStars = [];

    const maxStars = 5;

    const decimalPart = vote % 1;

    for(let i = 1; i <= vote; i++) {

        arrayStars.push(fullStar);
    }

    if(decimalPart >= 0.4) {

        arrayStars.push(faStarHalfStroke);
    }

    if(vote <= 4) {

        for(let i = Math.ceil(vote); i < maxStars; i++) {

            arrayStars.push(emptyStar);
        }
    }

    return arrayStars;
}