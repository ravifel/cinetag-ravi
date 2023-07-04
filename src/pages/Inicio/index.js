import React from 'react'
import Cabecalho from 'components/Cabecalho'
import Rodape from 'components/Rodape'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'

export default function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card id="1" titulo="card 1" capa="https://avatars.githubusercontent.com/u/63370425?s=400&u=4d1c0f773daed75685e3e5e101086908394f1603&v=4" />
            <Rodape />
        </>
    )
}
