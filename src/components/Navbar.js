import React from "react";
import { Link } from "react-router-dom";
const NavBar = ()=> {
    return (
        <nav className="nav">
            <div className="nav__logo">
                MARINASPÁ
            </div>
            <div className="nav__links">
                <Link to="/">HOME</Link>
                <Link to="/tratamientos">Tratamientos</Link>
                <a href="d">HOME</a>
                <a href="dd">HOME</a>
                <a href="d">HOME</a>
                <a href="dd">HOME</a>
            </div>
        </nav>
    );
}
export default NavBar;