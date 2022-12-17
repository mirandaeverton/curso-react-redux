import React from "react";
import { useParams } from "react-router-dom";

export default function Params(props) {
    const { id } = useParams()
    return (
        <div className="Params">
            <h1>Com Parâmetros</h1>
            <p>Valor: <strong>{id}</strong>!</p>
        </div>
    )
}