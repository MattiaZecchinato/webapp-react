import { NavLink } from "react-router";
import NavBar from "./NavBar";

export default function Header() {

    return <header>
            <NavLink to='/'><img src="logo.jpg" alt="logo" /></NavLink>
            <NavBar />
    </header>
}