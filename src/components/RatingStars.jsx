import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import addStars from "../utils/addStars";

export default function RatingStars({ vote }) {

    const arrayStars = addStars(vote);

    return <>

        {arrayStars.map((elem, i) => <FontAwesomeIcon key={i} icon={elem} style={{color: "#FFD43B",}} />)}
    </>
}