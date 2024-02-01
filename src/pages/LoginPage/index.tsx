import Login from 'components/Login';

import { ContentLeft, ContentRight, Main } from './style';
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (token) navigate('/');
  }, [token]);

  return (
    <Main>
      <ContentLeft></ContentLeft>
      <ContentRight>
        <Login />
      </ContentRight>
    </Main>
  );
}

export default LoginPage;

