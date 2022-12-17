import React from 'react'
import './Card.css'

function Card(props) {
    const cardStyle = {
        backgroundColor: props.color || 'rgb(211, 211, 211, .3)',
        boxShadow: `1px 1px 5px 3px ${props.color}` || '1px 1px 5px 3px lightgray'
    }
    return (
        <div className='Card' style={cardStyle}>
            <div className='Title'>
                <h2>
                    {props.title}
                </h2>
            </div>
            <div className='Content'>{props.children}</div>
        </div>
    )
}

export default Card