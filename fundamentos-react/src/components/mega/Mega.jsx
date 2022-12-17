import React from "react"
import { useState } from "react"

import "./Mega.css"


export default function Mega() {

    const [quantidadeNumeros, setQuantidadeNumeros] = useState(6)
    const [sena, setSena] = useState([])

    function renderResultado(numero) {
        console.log(numero);
        return (
            <div className="numeroResultado" key={numero}>{numero}</div>
        )
    }

    function handleQuantidadeChange(e) {
        const quantidade = e.target.value
        setQuantidadeNumeros(quantidade)
    }

    function gerarNumeros(qtde) {
        const numerosGerados = []
        do {
            const numeroGerado = Math.round(Math.random() * (60 - 1) + 1)
            if (!numerosGerados.includes(numeroGerado)) {
                numerosGerados.push(numeroGerado)
            }
        } while (numerosGerados.length < qtde)

        numerosGerados.sort((a, b) => a - b)
        setSena(prev => numerosGerados)
    }

    return (
        <div>
            <div className="resultado">
                    {sena.map(numero => renderResultado(numero))}
            </div>
            <div className="quantidade">
                <label htmlFor="quantidadeNumeros">Quantidade</label>
                <input
                    type="number"
                    id="quantidadeNumeros"
                    value={quantidadeNumeros}
                    onChange={handleQuantidadeChange}
                />
            </div>
            <button 
                onClick={_ => gerarNumeros(quantidadeNumeros)} 
                className="botao"
            >Gerar números</button>
        </div>
    )
}