import { NavLink } from "react-router";
import NavBar from "./NavBar";

import style from '../components-style/Header.module.css';

export default function Header() {

    return <div className={style.headerBox}>
            <NavLink to='/'><img src="logo.jpg" alt="logo" /></NavLink>
            <NavBar />
    </div>
}