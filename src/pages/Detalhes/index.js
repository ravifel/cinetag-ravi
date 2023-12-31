import React, { useEffect, useState } from 'react'
import styles from './Detalhes.module.css'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import { useParams, Link } from 'react-router-dom'
import Botao from 'components/Botao'
// import NaoEncontrada from 'pages/NaoEncontrada'

export default function Detalhes() {
    const { id } = useParams()
    const image_path = 'https://image.tmdb.org/t/p/w500'
    const [video, setVideo] = useState({});

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
            <Banner imagem="detalhes" />
            <Titulo>
                <h1>{video.title}</h1>
            </Titulo>
            <div className={styles.card}>

                <img
                    src={video.image}
                    alt={video.title}
                    className={styles.capa}
                />
                <div className={styles.detalhes}>
                    <p className={styles.descricao}>
                        <strong>Sinopse:</strong> {video.sinopse} <br />
                    </p>
                    <p className={styles.releaseDate}>
                        <strong>Release date:</strong> {video.releaseDate}
                    </p>

                    <section>
                        <Link to="/">
                            <Botao tamanhoBotao="lg" >Voltar</Botao>
                        </Link>
                    </section>
                </div>
            </div>
        </>
    )
}




    // const parametros = useParams();
    //O "useParams" é um hook do React que pega o parametro que está na URL
    //O "ID" que foi passado no parametro da rota