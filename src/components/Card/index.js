import React from 'react'
import styles from "./Card.module.css"
import iconeFavoritar from "./favoritar.png"
import iconeDesfavoritar from "./desfavoritar.png"
import { useFavoritoContext } from 'contextos/Favoritos'
import { Link } from 'react-router-dom'

export default function Card({ id, original_title, overview, poster_path }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    //Import do Favorito Context (lista de favoritos e a função de adicionar favorito)

    const ehFavorito = favorito.some((fav) => fav.id === id);
    //Checando se o card em questão está na lista de favoritos

    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    //Se o card não for Favorito, será exibido o ícone para Favoritar
    //Se o card for Favorito, será exibido o ícone para Desfavoritar

    return (
        <div className={styles.card}>
            <Link className={styles.link} to={`/${id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={original_title}
                    className={styles.capa}
                />
                <h2 className={styles.titulo}>{original_title}</h2>
                <p className={styles.descricao}>
                    {overview?.substring(0, 100)}...
                </p>
            </Link>
            <img src={icone}
                alt='Favoritar Filme'
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, original_title, overview, poster_path })
                }}
            //ao clicar no ícone para favoritar, a função de adicionar favoritos foi ativada
            //foram enviados para a função o "id", "titulo" e a "capa" do card especifico
            />
        </div>
    )
}
