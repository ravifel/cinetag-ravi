import React from 'react'
import styles from './Favoritos.module.css'
import Banner from 'components/Banner'
import videos from 'json/db.json'
import Card from 'components/Card'
import Titulo from 'components/Titulo'

export default function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}
