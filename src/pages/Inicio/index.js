import React from 'react'
import Cabecalho from 'components/Cabecalho'
import Rodape from 'components/Rodape'
import Banner from 'components/Banner'

export default function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Rodape />
        </>
    )
}
