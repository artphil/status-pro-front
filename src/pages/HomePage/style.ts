import styled from 'styled-components';
import fundo from 'assets/backgrounds/backgroundLobby.jpeg';

export const LobbyContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${fundo});
    background-size: cover;
    background-position: top;
`;