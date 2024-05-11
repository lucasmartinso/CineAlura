import { useState } from "react";
import { styled } from "styled-components"

export default function MainScreen() { 
    const [ perguntaUm, setPerguntaUm ] = useState(true);
    const [ prompt, setPrompt ] = useState(null);

    const filmes = [
        {
            "titulo": "Missão: Impossível - Efeito Fallout (2018)",
            "categoria": "Filme",
            "sinopse": "Quando uma missão da IMF descontroladamente resulta em desastre, Ethan Hunt e sua equipe são forçados a correr contra o tempo após serem acusados de traição.",
            "disponivelEm": ["Amazon Prime Video"],
            "avaliacaoGoogle": 95,
            "imdb": 7.9
        },
        {
            "titulo": "John Wick: Capítulo 3 - Parabellum (2019)",
            "categoria": "Filme",
            "sinopse": "John Wick, o assassino mais temido do mundo, está em fuga depois de violar uma regra central: tirar uma vida dentro dos limites do Hotel Continental.",
            "disponivelEm": ["Netflix", "Star+"],
            "avaliacaoGoogle": 90,
            "imdb": 8.2
        },
        {
            "titulo": "Extraction (2020)",
            "categoria": "Filme",
            "sinopse": "Um jovem mercenário é enviado à Índia para resgatar o filho sequestrado de um senhor do crime.",
            "disponivelEm": ["Netflix"],
            "avaliacaoGoogle": 89,
            "imdb": 8.5
        },
        {
            "titulo": "Top Gun: Maverick (2022)",
            "categoria": "Filme",
            "sinopse": "Após mais de trinta anos de serviço, Pete \"Maverick\" Mitchell continua sendo um dos principais aviadores da Marinha. Atrevido como sempre, Maverick está testando os limites como um piloto de teste, evitando o avanço da classificação e se esquivando do fantasma de seu passado.",
            "disponivelEm": ["Cinema", "Amazon Prime Video"],
            "avaliacaoGoogle": 96,
            "imdb": 8.6
        }
    ]    
    
    return( 
        <Container>
            <p>CineAlura</p>
            <Caixa>
                <Titulo> 
                    <a>Partiu escolher aquele filminho ou série de forma descomplicada?🍿😁​​ </a>
                    <Linha>.</Linha>
                    <Introdução>
                        <h>Qual gênero de filme/série você tá afim de assistir hoje?🎥​🎬</h>
                    </Introdução>
                </Titulo>
                <Germinai>
                    <Filme>
                        <span>{filmes[0].titulo}</span>
                        <a><strong>Categoria:</strong> {filmes[0].categoria}</a>
                        <a><strong>Sinopse:</strong> {filmes[0].sinopse}</a>
                        <a><strong>Usuários Google:</strong> {filmes[0].avaliacaoGoogle}% gostaram</a>
                        <a><strong>IMDb:</strong> {filmes[0].imdb}/10</a>
                        <a><strong>Disponível em:</strong></a>
                        <ul>  
                            {filmes[1].disponivelEm.map(disp => ( 
                                <a>- {disp}</a>
                            ))}
                        </ul>
                    </Filme>
                    <Filme>
                        <span>{filmes[0].titulo}</span>
                        <a><strong>Categoria:</strong> {filmes[0].categoria}</a>
                        <a><strong>Sinopse:</strong> {filmes[0].sinopse}</a>
                        <a><strong>Usuários Google:</strong> {filmes[0].avaliacaoGoogle}% gostaram</a>
                        <a><strong>IMDb:</strong> {filmes[0].imdb}/10</a>
                        <a><strong>Disponível em:</strong></a>
                        <ul>  
                            {filmes[1].disponivelEm.map(disp => ( 
                                <a>- {disp}</a>
                            ))}
                        </ul>
                    </Filme>
                </Germinai>
                <Perguntas>
                    <Pergunta>
                        <textarea
                            type="text"
                            placeholder="Digite aqui gênero ou tipo de filme você quer pro seu rolê..."
                            value={prompt}
                            onChange={(event) => setPrompt(event.target.value)}
                            maxLength={100}
                            required
                        />
                    </Pergunta>
                    { perguntaUm ? (
                        <Caixinhhas>
                            <Caixinha>Ação</Caixinha>
                            <Caixinha>Ação</Caixinha>
                        </Caixinhhas>
                    ) : (
                        <Caixinhhas>
                            <Caixinha>Ação</Caixinha>
                            <Caixinha>Aventura</Caixinha>
                            <Caixinha>Suspense</Caixinha>
                        </Caixinhhas>
                    ) }
                </Perguntas>
            </Caixa>
        </Container>
    )
} 

const Container = styled.div`
    width: 100%; 
    position: fixed;
    left: 0;
    top: 0;
    height: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    flex-direction: column;

    p { 
        font-family: "Oi", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 40px;
        display: flex; 
        align-items: center;
        margin-bottom: 4px;
    }
`
const Caixa = styled.div`
    width: 80%; 
    height: 80%; 
    background-color: white;
    border: 7px solid #302F2F;
    border-radius: 30px;
    padding: 20px;
`
const Titulo = styled.div`
    width: 100%; 
    text-align: center;

    a { 
        font-weight: 600;
        font-size: 30px;
        margin-bottom: 10px;
    } 
`
const Linha = styled.div`
    width: 100%; 
    height: 1px; 
    border: 2px dashed  #302F2F;
    margin: 20px 0px 30px 0px;
`
const Introdução = styled.div`
    width: 100%;
    text-align: left;

    h { 
        font-family: "Kavoon", serif;
        font-size: 20px;
    }
`
const Germinai = styled.div`
    width: 100%; 
    height: 330px;
    overflow-y: scroll;
    margin: 30px 0px;
`
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
const Perguntas = styled.div`
    width: 100%; 
    height: 
`
const Pergunta = styled.div`
    width: 100%; 
    height: 100px;
    border-radius: 20px;
    background-color: white; 
    border: 3px solid black;

    textarea { 
        width: 100%; 
        height: 100%; 
        padding: 15px;
        border-radius: 20px;
        border: none;
        font-family: "Syne", sans-serif;
        font-size: 20px;
    }
`
const Caixinhhas = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: space-around;
`
const Caixinha = styled.div`
    width: ${props => props.perguntaUm ? ("40%") : ("30%")};
    height: 60px; 
    display: flex;
    justify-content: center; 
    align-items: center;
    font-color: black;
    border: 1px solid black; 
    border-radius: 12px; 
    transition: background-color 2s, color 1s;
    font-size: 20px;
    font-weight: 800px;

    &:hover,
    &:focus { 
        cursor: pointer;
        transform: scale(0.98);
        background-color: black;
        color: white;
    }
`