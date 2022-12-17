import React from 'react'

export default function Aleatorio(props) {
    const { min, max } = props
    const randomNumber = (min, max) => {
        const random = Math.random() * (max - min) + min;
        return random.toFixed(2)
    }
    return (
        <div>
            <h3>Aleatório</h3>
            <p>O número gerado entre {min} e {max} é <strong>{randomNumber(1, 10)}</strong></p>
        </div>
    )
}