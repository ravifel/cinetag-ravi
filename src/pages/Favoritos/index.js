import React from 'react'
import styles from './Favoritos.module.css'
import Banner from 'components/Banner'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import { useFavoritoContext } from 'contextos/Favoritos'

export default function Favoritos() {
    const { favorito } = useFavoritoContext();
    //"useFavoritoContext()" é uma função externa do arquivo context

    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}
