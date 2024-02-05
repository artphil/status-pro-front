import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router';
import Logout from 'components/Logout';
import { LobbyContainer } from './style';

function HomePage() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  console.log('token', token); 

  useLayoutEffect(() => {
    if (!token) navigate('login');
  }, []);

  return (
    <LobbyContainer>
        Usuario logado
      <Logout></Logout>
    </LobbyContainer>
  );
}

export default HomePage;
