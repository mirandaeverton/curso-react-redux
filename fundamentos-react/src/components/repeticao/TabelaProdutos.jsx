import React from 'react'
import produtos from '../../data/produtos'

const TabelaProdutos = () => {
    const productsRows = produtos.map(produto => {
        return (
            <tr>
                <td>{produto.id}</td>
                <td >{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })
    return (
        <table border='1' style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome do Produto</th>
                    <th>Valor unitário</th>
                </tr>
            </thead>
            <tbody>
                {productsRows}
            </tbody>
        </table>
    )
}

export default TabelaProdutos