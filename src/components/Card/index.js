import React from 'react'
import styles from "./Card.module.css"
import iconeFavoritar from "./favoritar.png"
import iconeDesfavoritar from "./desfavoritar.png"
import { useFavoritoContext } from 'contextos/Favoritos'
import { Link } from 'react-router-dom'

export default function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    //Import do Favorito Context (lista de favoritos e a função de adicionar favorito)

    const ehFavorito = favorito.some((fav) => fav.id === id);
    //Checando se o card em questão está na lista de favoritos

    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    //Se o card não for Favorito, será exibido o ícone para Favoritar
    //Se o card for Favorito, será exibido o ícone para Desfavoritar

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt='Favoritar Filme'
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }}
            //ao clicar no ícone para favoritar, a função de adicionar favoritos foi ativada
            //foram enviados para a função o "id", "titulo" e a "capa" do card especifico
            />
        </div>
    )
}
