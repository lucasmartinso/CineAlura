import { useState, useEffect } from "react";
import { styled } from "styled-components"
import FilmBox from "../subpages/Filmes.js"
import { RotatingSquare } from "react-loader-spinner";
import axios from "axios";

export default function MainScreen() { 
    const [ perguntaUm, setPerguntaUm ] = useState(false);
    const [ prompt, setPrompt ] = useState(null);
    const [ selecionaCaixa, setSelecionaCaixa ] = useState([]);
    const [ carregamento, setCarrgamento ] = useState(false);
    let generos = [
        "Ação",
        "Suspense", 
        "Comédia", 
        "Terror", 
        "Aventura", 
        "Drama", 
        "Romance", 
        "Documentario", 
        "Comédia Romantica",
        "Sitcom"
    ]

    useEffect(async () => {
        generos = generos.sort(() => Math.random() - 0.5);
        setSelecionaCaixa(generos.slice(0,3))
    },[]);
    
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
    
    console.log(carregamento);

    async function chamaIA(tipo, box) {
        console.log("AQUI");
        setCarrgamento(true);
        console.log(carregamento);
        setPerguntaUm(true);
        if(tipo === "opcoes") setPrompt(box);
        if(tipo === "texto" && (!prompt || prompt==='')) setPrompt("qualquer um")
    
        const response = await axios.get('http://127.0.0.1:5000');
        //setFilmes(response);
        setTimeout(() => {
            setCarrgamento(false);    
        }, 3000);
        setPrompt(null);
    }   

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
                { !carregamento ? (
                    <>
                    <Germinai>
                        {filmes.map(filme => (
                            <FilmBox 
                                titulo = {filme.titulo} 
                                categoria = {filme.categoria} 
                                sinopse = {filme.sinopse} 
                                avaliacaoGoogle = {filme.avaliacaoGoogle} 
                                imdb = {filme.imdb}
                                disponivelEm = {filme.disponivelEm}
                            />
                        ))}
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
                            <ion-icon name="play-circle" onClick={() => chamaIA('texto',null)}></ion-icon>
                        </Pergunta> 
                        { perguntaUm ? (
                            <Caixinhhas>
                                <Caixinha onClick={() => chamaIA('opcoes','mais indicacoes')}>Mais sugestões como essa!!</Caixinha>
                                <Caixinha>Acertou na mosca!!</Caixinha>
                            </Caixinhhas>
                        ) : (
                            <Caixinhhas> 
                                {selecionaCaixa.map(box => (
                                    <Caixinha onClick={() => chamaIA('opcoes',box)}>{box}</Caixinha>
                                ))}
                            </Caixinhhas>
                        ) }
                    </Perguntas>
                    </>
                ) : (
                    <Ajuste>
                        <RotatingSquare
                            visible={true}
                            height="200"
                            width="200"
                            color="black"
                            ariaLabel="rotating-square-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </Ajuste>
                    )}
                
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
    height: 82%; 
    background-color: white;
    border: 7px solid #302F2F;
    border-radius: 30px;
    padding: 20px;
`
const Ajuste = styled.div`
    width: 100%; 
    height: 75%;
    display: flex; 
    justify-content: center;
    align-items: center;
`
const Titulo = styled.div`
    width: 100%; 
    text-align: center;

    a { 
        font-weight: 600;
        font-size: 35px;
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
    text-align: center;

    h { 
        font-family: "Kavoon", serif;
        font-size: 23px;
    }
`
const Germinai = styled.div`
    width: 100%; 
    height: 330px;
    overflow-y: scroll;
    margin: 30px 0px;
`
const Perguntas = styled.div`
    width: 100%; 
`
const Pergunta = styled.div`
    width: 100%; 
    height: 100px;
    border-radius: 20px;
    background-color: white; 
    border: 3px solid black;
    display: flex;

    textarea { 
        width: 90%; 
        height: 100%; 
        padding: 15px;
        border-radius: 20px;
        border: none;
        font-family: "Syne", sans-serif;
        font-size: 20px;
    }

    ion-icon{ 
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 20px 0px 0px 5px;
        transition: background 2s, color 1s, width 1s, height 1s;

        &:hover,
        &:focus { 
            cursor: pointer;
            transform: scale(0.98);
            background-color: black;
            color: white;
            width: 55px;
            height: 55px;
        }
    }
`
const Caixinhhas = styled.div`
    width: 100%;
    display: flex;
    margin: 15px 0px 5px;
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
    text-align: center;

    &:hover,
    &:focus { 
        cursor: pointer;
        transform: scale(0.98);
        background-color: black;
        color: white;
    }
`