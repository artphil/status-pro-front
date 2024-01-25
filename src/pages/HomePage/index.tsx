import { useLayoutEffect } from 'react';

import { useNavigate } from 'react-router';

import Logout from 'components/Logout';
import DefaultPage from 'components/DefaultPage';

function HomePage() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!token) navigate('/login');
  }, []);

  return (
    <DefaultPage>
      Usuario logado
      <Logout></Logout>
    </DefaultPage>
  );
}

export default HomePage;
