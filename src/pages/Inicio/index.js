import React, { useEffect, useState } from 'react'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
import styles from './Inicio.module.css'
// import apiKey from 'config/key.js'

export default function Inicio() {
    const [videos, setVideos] = useState([]);
    //criação de uma variavel de videos
    //setVideos responsavel por atualizar o estado

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4339138048526f85ba50b87fb60be872&language=en-US&page=1`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados.results)
            })
    }, [])

    // -> useEffect
    //Realiza açõe sapós a renderização da página. 
    //Requisições sãoi funções assincronas do JavaScript. Pois ela pode demorar um pouco mais do que a renderização da página

    // -> fetch
    //é a criação da requisição para a API
    //foram pegos os dados de retorno e converstidos para JSON
    //depois os dados da lista foram enviados para o "setVideos()"
    //que por fim fez a atualização dos estados dos videos

    // -> , []
    //é responsável por fazer que a requisição seja feita só uma vez

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} poster_path_start={`https://image.tmdb.org/t/p/w500${video.poster_path}`} key={video.id} />
                })}
            </section>
        </>
    )
}
