import React, { useEffect, useState } from 'react'
import styles from './Player.module.css'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrada from 'pages/NaoEncontrada'

export default function Player() {
    const [video, setVideo] = useState();

    const parametros = useParams();
    //O "useParams" é um hook do React que pega o parametro que está na URL
    //O "ID" que foi passado no parametro da rota

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [])

    if (!video) {
        return <NaoEncontrada />
    }
    //se o vídeo não for encontrado, as páginas do Player não vão ser carregadas

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>

            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </section>
        </>
    )
}
