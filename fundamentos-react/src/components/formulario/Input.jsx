import React from "react";
import { useState } from "react";

export default function Input(props) {

    const [value, setValue] = useState('Initial')

    function handleChange(e) {
        setValue(e.target.value)
    }

    return (
        <div>
            <h2>{value}</h2>
            <input value={value} onChange={handleChange} style={{
                fontSize: '1.4rem'
            }} />
            <input value={value} readOnly style={{
                fontSize: '1.4rem'
            }} />
            <input value={undefined} style={{
                fontSize: '1.4rem'
            }} />
        </div>
    )
}