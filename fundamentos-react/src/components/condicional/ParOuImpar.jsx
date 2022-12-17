import React from 'react'

const ParOuImpar = (props) => {
    const isEven = props.numero % 2 === 0

  return (
    <div>
        {
            isEven ?
                <span>O número {props.numero} é PAR!</span> :
                <span>O número {props.numero} é IMPAR!</span>
        }
    </div>
  )
}

export default ParOuImpar