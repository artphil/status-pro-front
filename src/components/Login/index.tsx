import { useNavigate } from 'react-router-dom';

import { useLogin } from 'hooks/userHooks';

import { ReactComponent as EmailIco } from 'assets/icons/email.svg';
import { ReactComponent as PassIco } from 'assets/icons/pass.svg';

import { ErrorMessage, ButtonNormal, ButtonWarm, ButtonGroup, FormContainer, InputField, FormTitle } from './stlyle';


function Login() {
  const { onSubmit, errors, register } = useLogin();

  const navigate = useNavigate();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
    navigate('/');
  }

  return (
    <FormContainer onSubmit={event => submit(event)}>
      <FormTitle>Login</FormTitle>
      <InputField>
        <EmailIco />

        <input type="text" placeholder="Usuário" {...register('username')}
        />
      </InputField>
      <ErrorMessage>{errors.username?.message ?? ''}</ErrorMessage>

      <InputField>
        <PassIco />
        <input type="password" placeholder="Senha" {...register('password')} />
      </InputField>
      <ErrorMessage>{errors.password?.message ?? ''}</ErrorMessage>

      <ButtonGroup>
        <ButtonNormal type='submit'>Entrar</ButtonNormal>
        <ButtonNormal onClick={() => navigate('/signup')} >Cadastro</ButtonNormal>
        <ButtonWarm onClick={() => alert('Serviço não implementado')} >Recuperar senha</ButtonWarm>
      </ButtonGroup>
    </FormContainer>
  );
}

export default Login;