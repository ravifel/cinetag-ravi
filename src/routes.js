import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from 'pages/Inicio'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

//BrowserRouter
// -> Sinaliza que vão existir rotas.
//Routes
// -> Funciona como roteador, vai ser o responsável pela troca de rotas.
//Route
// -> Onde acontece a declaração das rotas que vão existir dentro do projeto.