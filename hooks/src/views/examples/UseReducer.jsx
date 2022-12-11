import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const initialState = {
    cart: [],
    products: [],
    user: {},
    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case "numberPlus2":
            return { ...state, number: state.number + 2 }
        case "numberTimes7":
            return { ...state, number: state.number * 7 }
        case "numberDividedBy25":
            return { ...state, number: state.number / 25 }
        case "numberParseInt":
            return { ...state, number: parseInt(state.number) }
        case "numberPlusN":
            return { ...state, number: state.number + action.payload.n }
        case "login":
            return { ...state, user: action.payload.user }
        default:
            return state
    }

}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [n, setN] = useState(0)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{
                    state.user.name ? state.user.name : "Por favor, faça login!"
                }</span>
                <span className="text">{state.number}</span>
                <button className="btn"
                    onClick={() => dispatch({
                        type: "login",
                        payload: {
                            user: {
                                name: "Everton"
                            }
                        }
                    })} >Login</button>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberPlus2' })} >+2</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberTimes7' })} >x7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberDividedBy25' })} >/25</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberParseInt' })} >Int</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberPlusN', payload: { n: parseInt(n) } })} >+{n}</button>
                    <input type="number" value={n} onChange={e => setN(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default UseReducer
