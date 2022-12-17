import React from "react";
import './App.css'


import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Aleatorio from './components/basicos/Aleatorio';
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuárioInfo from "./components/condicional/UsuárioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Counter from "./components/contador/Counter";
import Mega from "./components/mega/Mega";


export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">

                <Card title="#13 - Megasena" color="#fedcba">
                    <Mega />
                </Card>

                <Card title="#12 - Contador" color="#abcdef">
                    <Counter initialValue={10} />
                </Card>

                <Card title="#11 - Componente Controlado" color="#decefe">
                    <Input />
                </Card>

                <Card title="#10 - Comunicação Indireta" color="blue">
                    <IndiretaPai />
                </Card>

                <Card title="#09 - Comunicação Direta" color="brown">
                    <DiretaPai />
                </Card>

                <Card title="#08 - Renderização Condicional" color="purple">
                    <ParOuImpar numero={2} />
                    <UsuárioInfo usuario={{nome: "Alberto"}} />
                    <UsuárioInfo usuario={{name: "Alberto"}} />
                </Card>

                <Card title="#07 - Desafio Repetição" color="darkolivegreen">
                    <TabelaProdutos />
                </Card>

                <Card title="#06 - Repetição" color="cyan">
                    <ListaAlunos />
                </Card>

                <Card title="#05 - Componentes com Filhos" color="lightgreen">
                    <Familia lastName="Miranda">
                        <FamiliaMembro name="Pedro" />
                        <FamiliaMembro name="João" />
                        <FamiliaMembro name="Rosa" />
                    </Familia>
                </Card>

                <Card title="#04 - Desafio Aleatório" color="lightblue">
                    <Aleatorio min={1} max={20} />
                </Card>
            </div>
        </div>
    )
}