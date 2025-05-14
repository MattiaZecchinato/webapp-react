import { useState } from "react";
import axios from "axios";

//style
import style from '../components-style/FormReview.module.css';

export default function FormReview({ uri }) {

    const resetForm = {

        name: '',
        text: '',
        vote: 5
    };

    const uriAddReview = `${uri}/review`;

    const [form, setForm] = useState(resetForm);

    function addDataForm(e) {

        const { name, value } = e.target;

        setForm(prev => ({

            ...prev,
            [name]: value
        }));
    }

    function sendForm(e) {

        e.preventDefault();

        addReview();

        setForm(resetForm);
    }

    function addReview() {

        axios.post(uriAddReview, form)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.message))
    }

    return <>
        <h2 className={style.headingForm}>Add your review</h2>
        <form onSubmit={sendForm}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={form.name} onChange={addDataForm} required />

            <label htmlFor="text">Review</label>
            <textarea name="text" value={form.text} onChange={addDataForm} required />

            <label htmlFor="vote">Vote</label>
            <input type="number" name="vote" value={form.vote} onChange={addDataForm} min="1" max="5" />

            <button>Send</button>
        </form>
    </>
}