import React from 'react'

function Familia(props) {
    return (
        <>
            {props.children.map((child, i) => {
                return React.cloneElement(child, { ...props, key: i})
            })}
        </>
    )
}

export default Familia