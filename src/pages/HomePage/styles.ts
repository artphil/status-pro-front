import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

export const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 ${props => props.theme.device.computer.padding};

  @media screen and (max-width: ${props => props.theme.device.mobile.size}) {
    padding:  ${props => props.theme.device.mobile.padding};
    flex-direction: column-reverse;
    margin-top: 5rem;
  }
`;

export const OnlineContainer = styled.div`
  background-color: rgba(255,255,255,0.3);
  margin: 2rem 0;
  width: 20%;
  height: auto;
  padding: 1rem;
  border-radius: 1rem;
  @media screen and (max-width: ${props => props.theme.device.mobile.size}) {
    width: 100%;
  }
`;

export const OnlineTitle = styled.h3`
  width: auto;
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.color.background};
`;

export const OnlinePlayer = styled.div`
  height: 3rem;
  padding: 1rem;
  border-radius: .5rem;
  margin: 0.5rem 0;
  background-color: ${props => props.theme.color.variant1.main};
  
  p {
    margin: 0;
    color: ${props => props.theme.color.variant1.contrastText};
  }
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 2rem;

  @media screen and (max-width: ${props => props.theme.device.mobile.size}) {
    width: 100%;
    order: 1;
  }
`;

export const GameHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: ${props => props.theme.device.mobile.size}) {
  justify-content: start;
  }
`;

export const GameStatus = styled.div`
  background-color: ${props => props.theme.color.background};
  width: 6rem;
  padding: .5rem;
  border-radius: .5rem;
`;


export const Card = styled.div`

`;


export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  width: 20%;
  height: auto;
  padding: 1rem;

  @media screen and (max-width: ${props => props.theme.device.mobile.size}) {
    width: 100%;
  }
`;

export const MenuButton = styled(Link)`
  height: 3rem;
  padding: 1rem;
  width: 100%;
  background-color: ${props => props.theme.color.variant2.main};
  color: ${props => props.theme.color.variant2.contrastText};
  border: none;
  border-radius: 1.5rem;
  text-decoration: none;
  text-align: center;

  &.deck {
    background-color: ${props => props.theme.color.variant4.main};
    color: ${props => props.theme.color.variant4.contrastText};
    margin-top: auto;
    font-weight: bold;
    order: 1;

    @media screen and (max-width: ${props => props.theme.device.mobile.size}) {
      order: 0;
    }
  }
`;