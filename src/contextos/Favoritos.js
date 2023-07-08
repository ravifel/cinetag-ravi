import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext(); //criação do contexto
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


export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);
    // semelhando ao "useContext" para ser usado no contexto de Favoritos.
    // retorna os valores que vão ser passados no Provider.

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)
        //variavel para verificar se o favorito é repetido.
        //recebe um metodo de Array "some"
        //vai ocorrer a busca por um favorito com o mesmo "id" do favorito que estamos tentando adicionar

        let novaLista = [...favorito];
        //nova lista, que vai receber a lista antiga

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
            //se o favorito não for repetido, ele vai ser acrescentado na nova lista
            //favoritoRepetido = false
            //depois vai ser usado o gerenciador de estado "setFavorito()" para adicionar a nova lista de favoritos atualizada
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1);
        return setFavorito(novaLista);
        //se o favorito for repetido e não entrar na condicional
        //vai acontecer um "splice", vai tirar algum elemento da lista
        //esse elemento que ele vai encontrar vai ser a partir do "indexOf"
        //ele vai procurar algum elemento d alista que tenha o valor do novo favorito e vai remover ele
        //por fim ele vai retornar um "setFavorito()" com a nova lista, sem o elemento que foi removido

    }
    //função que vai possibilitar a adição de Favoritos.



    return {
        favorito,
        adicionarFavorito
        //aqui está sendo retornado o favorito, para conseguir consultar a lista de Favoritos
        //também está sendo retornada a função de "adicionarFavorito"
    }
}

// criação de um HOOK Personalizado (se inicia usando o "use")
// Para criar funcionalidades nesse contexto