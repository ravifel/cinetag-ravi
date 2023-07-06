import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from 'pages/Inicio'
import Favoritos from 'pages/Favoritos'
import Cabecalho from 'components/Cabecalho'
import Rodape from 'components/Rodape'
import Container from 'components/Container'
import FavoritosProvider from 'contextos/Favoritos'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />} ></Route>
                        <Route path="/favoritos" element={<Favoritos />} />
                    </Routes>
                </FavoritosProvider>
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


//"FavoritosProvider"
// -> Está fazendo com que o contexto abranja as páginas da aplicação
// -> As rota vão ser abranjidas dentro desse contexto
// -> O valor vai ficar sendo compartilhado entre as 2 rotas