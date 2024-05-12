import { styled } from "styled-components"

export default function FilmBox({titulo, categoria, sinopse, avaliacaoGoogle, imdb, disponivelEm}) {
    return(
        <Filme>
            <span>{titulo}</span>
                <a><strong>Categoria:</strong> {categoria}</a>
                <a><strong>Sinopse:</strong> {sinopse}</a>
                <a><strong>Usuários Google:</strong> {avaliacaoGoogle}% gostaram</a>
                <a><strong>IMDb:</strong> {imdb}/10</a>
                <a><strong>Disponível em:</strong></a>
                <ul>  
                    {disponivelEm.map(disp => ( 
                        <a>- {disp}</a>
                    ))}
                </ul>
        </Filme>
    )
} 

const Filme = styled.div`
    width: 100%; 
    display: flex; 
    flex-direction: column;

    span { 
        font-size: 25px; 
        font-family: "Jersey 25 Charted", sans-serif;
        margin: 20px 0px 10px 0px;
    } 

    a { 
        font-size: 20px;
        margin-bottom: 8px;
        font-family: "Sedan SC", serif;
        font-weight: 400;
    } 

    ul { 
        display: flex; 
        flex-direction: column;
        margin: 0px 0px 20px 30px;
    }
`