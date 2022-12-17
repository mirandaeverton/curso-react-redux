import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'

export default function Menu(props) {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/params/123">Params #01</Link>
                    </li>
                    <li>
                        <Link to="/params/coisa-linda">Params #02</Link>
                    </li>
                    <li>
                        <Link exact to="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}