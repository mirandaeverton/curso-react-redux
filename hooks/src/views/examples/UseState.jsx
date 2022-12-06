import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Initial..")

    function handleInputChange(e) {
        setName(e.target.value)
    }

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                        onClick={() => setCount(cur => cur - 1)} >-</button>
                    <button className="btn"
                        onClick={() => setCount(cur => cur + 1)} >+</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <input type="text" className="input" 
               value={name} 
               onChange={handleInputChange} />
        </div>
    )
}

export default UseState
