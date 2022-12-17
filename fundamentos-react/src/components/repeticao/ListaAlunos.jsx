import React from 'react'
import alunos from '../../data/alunos'


const ListaAlunos = props => {
    const alunosList = alunos.map(aluno => {
        return <li key={aluno.id}>{aluno.id}: {aluno.nome} - {aluno.nota}</li>
    })
    return (
        <ul style={{
            listStyle: 'none',
            paddingLeft: '0px'
        }}>
            {alunosList}
        </ul>
    )

}

export default ListaAlunos