import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    const merge = (s1, s2) => {
        let length = s1.length > s2.length ? s1.length : s2.length
        let result = ""

        for(let i=0; i<length; i++) {
            if(s1[i] !== undefined) result += s1[i]
            if(s2[i] !== undefined) result += s2[i]
        }
        return result
    }

    useEffect(() => {
        count.current++
        myInput2.current.focus()
    },[value1])

    useEffect(() => {
        count.current++
        myInput1.current.focus()
    },[value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: {merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input type="text" className="input"
                ref={myInput1}
                value={value1}
                onChange={e => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
                <input type="text" className="input"
                    ref={myInput2}
                    value={value2}
                    onChange={e => setValue2(e.target.value)} />
        </div>
    )
}

export default UseRef
