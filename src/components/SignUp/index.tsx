import { useNavigate } from 'react-router';

import { useSignUp } from 'hooks/userHooks';

import { ReactComponent as EmailIco } from 'assets/icons/email.svg';
import { ReactComponent as PassIco } from 'assets/icons/pass.svg';
import { ReactComponent as UserIco } from 'assets/icons/user.svg';

import { ButtonNormal, ButtonGroup, FormContainer, InputField, FormTitle, ErrorMessage } from '../Login/stlyle';


function SignUp() {
  const { onSubmit, errors, register } = useSignUp();

  const navigate = useNavigate();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
    navigate('/');
  }

  return (
    <FormContainer onSubmit={event => submit(event)}>
      <FormTitle>Cadastro</FormTitle>

      <InputField>
        <UserIco />
        <input type="text" placeholder="Nome" {...register('name')} />
      </InputField>
      <ErrorMessage>{errors.name?.message ?? ''}</ErrorMessage>

      <InputField>
        <EmailIco />
        <input type="text" placeholder="Email" {...register('username')} />
      </InputField>
      <ErrorMessage>{errors.username?.message ?? ''}</ErrorMessage>

      <InputField>
        <PassIco />
        <input type="password" placeholder="Senha" {...register('password1')} />
      </InputField>
      <ErrorMessage>{errors.password1?.message ?? ''}</ErrorMessage>

      <InputField>
        <PassIco />
        <input type="password" placeholder="Repetir a senha" {...register('password2')} />
      </InputField>
      <ErrorMessage>{errors.password2?.message ?? ''}</ErrorMessage>

      <ButtonGroup>
        <ButtonNormal type="submit" >Enviar</ButtonNormal>
        <ButtonNormal onClick={() => navigate('/login')} >Fazer login</ButtonNormal>
      </ButtonGroup>
    </FormContainer>
  );
}

export default SignUp;