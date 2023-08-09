import React from 'react'
import styles from "./Botao.module.css"

export default function Botao({ children, tamanhoBotao }) {
    return (
        <button className={`
            ${styles.botaoPrincipal}
            ${styles[tamanhoBotao]}
        `}>
            {children}
        </button>
    )
}
