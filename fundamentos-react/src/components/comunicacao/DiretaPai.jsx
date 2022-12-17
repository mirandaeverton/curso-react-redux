import React from 'react'
import DiretaFilho from './DiretaFilho'

const DiretaPai = () => {
  return (
    <div>
        <DiretaFilho nome="Everton" idade={32} nerd={true} />
        <DiretaFilho nome="Emily" idade={22} nerd={false} />
    </div>
    
  )
}

export default DiretaPai