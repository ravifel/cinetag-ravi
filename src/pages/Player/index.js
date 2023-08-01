import React, { useEffect, useState } from 'react'
import styles from './Player.module.css'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
// import NaoEncontrada from 'pages/NaoEncontrada'

export default function Player() {
    const { id } = useParams()
    const image_path = 'https://image.tmdb.org/t/p/w500'
    const [video, setVideo] = useState();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4339138048526f85ba50b87fb60be872&language=en-US&page=1`)
            .then(resposta => resposta.json())
            .then(dados => {

                // const { title, overview, poster_path, release_date } = dados

                const movie = {
                    id,
                    title: dados.title,
                    sinopse: dados.overview,
                    image: `${image_path}${dados.poster_path}`,
                    releaseDate: dados.release_date
                }

                setVideo(movie)
            })
    }, [id])
    //tem a dependencia do "ID"
    //toda vez que o "ID" for alterado, o "useEffect" vai ser chamado novamente
    //vai novamente fazer a requisição para a API
    //Se o ID mudar, vai ser preciso fazer uma nova requisição, pois deverá ser mostrada a página referente ao "ID"

    // if (!video) {
    //     return <NaoEncontrada />
    // }
    //se o vídeo não for encontrado, as páginas do Player não vão ser carregadas

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>{video.title}</h1>
            </Titulo>

            <section className={styles.container}>
                SINOPSE: {video.sinopse}
            </section>

            <section className={styles.container}>
                RELEASE DATE: {video.releaseDate}
            </section>

            <section className={styles.container}>
                <img
                    className={styles.image}
                    src={video.image}
                    alt={video.title}
                />
            </section>

            <section className={styles.container}>
                <button>Go Back</button>
            </section>

            <section className={styles.container}>
                {/* <iframe
                    width="100%"
                    height="100%"
                    src={video.image}
                    title={video.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe> */}
            </section>
        </>
    )
}




    // const parametros = useParams();
    //O "useParams" é um hook do React que pega o parametro que está na URL
    //O "ID" que foi passado no parametro da rota