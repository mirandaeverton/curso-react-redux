import React, { useReducer } from 'react'
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
        case "login":
            return { ...state, user: action.payload.user }
        default:
            return state
    }

}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

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
                <div>
                    <button className="btn"
                        onClick={() => dispatch({
                            type: "login",
                            payload: {
                                user: {
                                    name: "Everton"
                                }
                            }
                        })} >Login</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberPlus2' })} >+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
