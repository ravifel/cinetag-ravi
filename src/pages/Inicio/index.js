import React from 'react'
import Cabecalho from 'components/Cabecalho'
import Rodape from 'components/Rodape'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
import videos from 'json/db.json'
import styles from './Inicio.module.css'

export default function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
            <Rodape />
        </>
    )
}
