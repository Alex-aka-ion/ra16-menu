import {NavLink} from "react-router-dom";
import React from "react";

export default function Menu() {
    return (
        <nav className="menu">
            <NavLink className="menu__item" to="/" activeClassName="menu__item-active" exact={true}>Главная</NavLink>
            <NavLink className="menu__item" to="/drift" activeClassName="menu__item-active">Дрифт-такси</NavLink>
            <NavLink className="menu__item" to="/timeattack" activeClassName="menu__item-active">Time Attack</NavLink>
            <NavLink className="menu__item" to="/forza" activeClassName="menu__item-active">Forza Karting</NavLink>
        </nav>
    );
}
