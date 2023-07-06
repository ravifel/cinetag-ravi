import { createContext, useState } from "react";

export const FavoritosContext = createContext(); //função para criar contexto
FavoritosContext.displayName = "Favoritos"; //definir um nome para o contexto

//essa função vai fornecer o contexto quando ele for utilizado
export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]); //criação de estado gerenciavel

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}


//criação de um contexto para conseguir compartilhar globalmente alguns estados