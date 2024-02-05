import Logo from 'components/Logo';
import { ContentCenter, ContentRight, Main} from './style';
import SignUp from 'components/SignUp';

function SignUpPage() {
  return (
    <Main>
      <ContentCenter>
        <ContentRight>
          <Logo />
          <SignUp />
        </ContentRight>
      </ContentCenter>
      <h1>Criado por <a href='https://www.linkedin.com/in/artphil/' target='_blank'  rel='noreferrer'>Arthur Phillip</a> e <a href='https://www.linkedin.com/in/renato-ferreira-01/' target='_blank' rel='noreferrer'>Renato Ferreira</a>
      </h1>
    </Main>
  );
}

export default SignUpPage;

