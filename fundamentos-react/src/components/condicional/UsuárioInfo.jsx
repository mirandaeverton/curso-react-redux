import React from 'react'
import If from './If'

export default (props) => {
    const usuario = props.usuario
  return (
    <div>
        <If test={usuario && usuario.nome}>
            <span>Seja bem-vindo <strong>{usuario.nome}</strong></span>
        </If>
    </div>
  )
}
