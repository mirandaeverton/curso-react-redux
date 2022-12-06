import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [isEven, setIsEven] = useState(false)

    function calcFatorial(number) {
        if(number < 0) return -1
        if(number == 0) return 1
        return calcFatorial(number - 1) * number
    }

    function handleNumberChange(e) {
        setNumber(e.target.value)
    }

    useEffect(() => {
        setFatorial(calcFatorial(number))
        if(number%2 === 0) {
            setIsEven(true)
        }else {
            setIsEven(false)
        }
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div>
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial}</span>
            </div>

            <div className="center">
                <input type="number" className="input"
                    value={number}
                    onChange={handleNumberChange} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div>
                <span className="text">Status: </span>
                <span className="text red">{isEven ? "PAR" : "ÍMPAR"}</span>
            </div>
        </div>
    )
}

export default UseEffect
