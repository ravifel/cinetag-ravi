import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from 'pages/Inicio'
import Favoritos from 'pages/Favoritos'
import Cabecalho from 'components/Cabecalho'
import Rodape from 'components/Rodape'
import Container from 'components/Container'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio />} ></Route>
                    <Route path="/favoritos" element={<Favoritos />} />
                </Routes>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

//BrowserRouter
// -> Sinaliza que vão existir rotas.
//Routes
// -> Funciona como roteador, vai ser o responsável pela troca de rotas.
//Route
// -> Onde acontece a declaração das rotas que vão existir dentro do projeto.