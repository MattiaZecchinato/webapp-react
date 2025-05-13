import style from '../components-style/ReviewCard.module.css'

export default function ReviewCard({ name, text, vote }) {

    return <>
        <div className={style.reviewBox}>
            <div className={style.bodyBox}>
                <p>{text}</p>
            </div>
            <div className={style.infoBox}>
                <p><span>Vote</span> {vote}</p>
                <p><em>By {name}</em></p>
            </div>
        </div>
    </>
}