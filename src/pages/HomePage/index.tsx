import { useLayoutEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import DefaultPage from 'components/DefaultPage';
import Deck from 'components/Deck';

import { GameContainer, GameHeader, GameStatus, HomeContainer, MenuButton, MenuContainer, OnlineContainer, OnlinePlayer, OnlineTitle } from './styles';

// Mock
const online = [
  'Jão',
  'Marcus',
  'Edu',
];


function HomePage() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!token) navigate('/login');
  }, [token]);

  return (
    <DefaultPage>
      <HomeContainer>
        <OnlineContainer>
          <OnlineTitle>Jogadores Online</OnlineTitle>
          {online.map((player, index) => (
            <OnlinePlayer key={index}>
              <p>{player}</p>
            </OnlinePlayer>
          ))}
        </OnlineContainer>
        <GameContainer>
          <GameHeader>
            <GameStatus>Level</GameStatus>
            <GameStatus>Moedas</GameStatus>
          </GameHeader>
          <Deck />
        </GameContainer>
        <MenuContainer>
          <MenuButton to={'#'}>Jogar</MenuButton>
          <MenuButton to={'/deck'}>Meus Decks</MenuButton>
          <MenuButton to={'#'}>Configuraçoes</MenuButton>
          <MenuButton to={'#'}>Loja</MenuButton>
          <MenuButton to={'#'} className='deck'>Mesclar Cards</MenuButton>
          <GameStatus>timestamp</GameStatus>
        </MenuContainer>
      </HomeContainer>
    </DefaultPage>
  );
}

export default HomePage;
