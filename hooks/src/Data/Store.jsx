import React, { useState } from "react";

const initialState = {
    number: 1234,
    text: "Context API + Hooks"
}

export const AppContext = React.createContext()

export default function Store(props) {
    const [state, setState] = useState(initialState)

    function update(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return(
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => update('number', n),
            setText: t => update('text', t)
        }}>
            {props.children}
        </AppContext.Provider>
    )
}