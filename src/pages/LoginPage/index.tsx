import Login from 'components/Login';
import Logo from 'components/Logo';
import { Main, ContentCenter, ContentRight } from 'pages/SignUpPage/style';
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
      <ContentCenter>
        <ContentRight>
          <Logo />
          <Login />
        </ContentRight>
      </ContentCenter>
      <h1>Criado por <a href='https://www.linkedin.com/in/artphil/' target='_blank' rel='noreferrer'>Arthur Phillip</a> e <a href='https://www.linkedin.com/in/renato-ferreira-01/' target='_blank' rel='noreferrer'>Renato Ferreira</a></h1>
    </Main>
  );
}

export default LoginPage;

