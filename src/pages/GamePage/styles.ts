import { styled } from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: top;
`;
// background-image: url(${fundo});


export const GameContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const Card = styled.div`
    width: fit-content;
    scale: 0.8;
`;