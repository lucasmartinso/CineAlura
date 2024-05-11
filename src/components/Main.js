import { useState } from "react";
import { styled } from "styled-components"

export default function MainScreen() { 
    const [ perguntaUm, setPerguntaUm ] = useState(false);
    const [ prompt, setPrompt ] = useState(null);
    
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
    width: 130px;
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