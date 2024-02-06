import styled from 'styled-components';
import fundo from 'assets/cards/gorjala.jpeg';


export const Main = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${fundo});
    background-size: cover;
    background-position: center;
    animation: animateBG 7s linear infinite;
    &>h1{
        position: absolute;
        bottom: 20px;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 4px;
        color: #fff;

        &>a{
        bottom: 20px;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 4px;
        color: #fff; 
        transition: 1s;
        &:hover{
            color: #000;
        }
    }
    }
    
    @keyframes animateBG {
        100% {
            filter: hue-rotate(360deg);
        }
    }
    @media (max-width: 1600px) {
    
    }
    @media (max-width: 1200px) {
        
    }
    @media (max-width: 992px) {
        
    }
    @media (max-width: 768px) {
        
    }
    @media (max-width: 480px) {
        backdrop-filter: blur(15px);
    }
`;

export const ContentCenter = styled.section`
    height: 95%;
    width: 95%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: right;
    align-items: center;
    @media (max-width: 768px) {
        border: 1px solid red;
        width: 100vw;
        height: 100vh;
    }
`;

export const ContentRight = styled.section`
     width: 30%;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     @media (max-width: 1200px) {
        width: 100%;
    }
`;

export const ContentLeft = styled.section`
    border: 1px solid yellow;
    position: relative;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1200px) {
        display: none;
    }
`;

export const MasterTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 32pt;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 3px;
`;