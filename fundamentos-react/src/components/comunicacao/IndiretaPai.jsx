import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

function IndiretaPai() {

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function oPaiE(nome, idade, nerd) {
       setNome(nome)
       setIdade(idade)
       setNerd(nerd)
    }
    return (
        <>
            <span>Meu pai é o {nome}. Ele tem {idade} anos e {nerd ? "é" : "não é"} nerd. </span>
            <IndiretaFilho quemEOPai={oPaiE} />
        </>
    )
}

export default IndiretaPai