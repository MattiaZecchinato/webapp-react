import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from '../components-style/ReviewCard.module.css'

import addStars from "../utils/addStars";

export default function ReviewCard({ name, text, vote }) {

    const arrayStars = addStars(vote);

    return <>
        <div className={style.reviewBox}>
            <div className={style.bodyBox}>
                <p>{text}</p>
            </div>
            <div className={style.infoBox}>
                <p><span>Vote</span> {arrayStars.map((elem, i) => <FontAwesomeIcon key={i} icon={elem} style={{color: "#FFD43B",}} />)}</p>
                <p><em>By {name}</em></p>
            </div>
        </div>
    </>
}