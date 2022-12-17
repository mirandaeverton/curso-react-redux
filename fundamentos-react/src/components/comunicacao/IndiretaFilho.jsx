import React from 'react'

function IndiretaFilho(props) {
    const quemEOPai = props.quemEOPai
    return (
        <>
            <div>IndiretaFilho</div>
            <button onClick={_ => quemEOPai("Sidnei", 59, true)} >
                Quem é o pai?
            </button>
        </>
    )
}

export default IndiretaFilho