import React from 'react'
import Cabecalho from 'components/Cabecalho'
import Container from 'components/Container'
import FavoritosProvider from 'contextos/Favoritos'
import { Outlet } from 'react-router-dom'
import Rodape from 'components/Rodape'

export default function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}


// --> OUTLET
//É um componente do react-router-dom
//Possibilita que criemos uma Rota pai e o "OUTLET" dentro dela,
//que serão todas as rotas a serem encaixadas dentro da rota pai

//As rotas filhas vão ser renderizadas dentro do OUTLET

//"FavoritosProvider"
// -> Está fazendo com que o contexto abranja as páginas da aplicação
// -> As rota vão ser abranjidas dentro desse contexto
// -> O valor vai ficar sendo compartilhado entre as 2 rotas