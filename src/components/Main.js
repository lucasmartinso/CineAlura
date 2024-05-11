//import styled from "styled-components";

import { styled } from "styled-components"

export default function MainScreen() { 
    return( 
        <Container>
            <p>CineAlura</p>
            <Caixa>
                <Tittle> 

                </Tittle>
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
`
const Tittle = styled.div`
    width: 100%; 

`