import { useParams } from "react-router";

export default function MovieDetails() {

        const { id } = useParams();

        console.log(`use params con id:${id}`)

    return <>
        <p>id:{id}</p>
    </>
}