import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from 'pages/Inicio'
import Favoritos from 'pages/Favoritos'
import Player from 'pages/Player'
import NaoEncontrada from 'pages/NaoEncontrada'
import PaginaBase from 'pages/PaginaBase'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />} >
                    <Route index element={<Inicio />} ></Route>
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

// -> BrowserRouter
//Sinaliza que vão existir rotas.

// -> Routes
//Funciona como roteador, vai ser o responsável pela troca de rotas.

// -> Route
//Onde acontece a declaração das rotas que vão existir dentro do projeto.

// -> Página não Encontrada
//"*" é um seletor universal

//Rotas Aninhadas
//Cada rota que está sendo renderizada dentro da rota pai
//vai ser exibida dentro do "OUTLET" que existe na PaginaBase