import { ReactNode, useState } from 'react';

import UserIcon from 'assets/icons/email.svg';

import { Footer, Header, Main, MenuButton, MenuContainer, MenuLink } from './styles';


function UserMenu() {
  return (
    <MenuContainer>
      <MenuLink to={'#'}>Perfil</MenuLink>
      <MenuLink to={'/logout'} className='logout'>Logout</MenuLink>
    </MenuContainer>
  );
}

interface Props {
  children: ReactNode
}

function DefaultPage(props: Props) {
  const { children } = props;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <Main>
      <Header>
        <h2>Status Pro</h2>
        <MenuButton
          className={menuOpened ? 'active' : ''}
          onClick={() => setMenuOpened(!menuOpened)}
        // onBlur={() => setMenuOpened(false)}
        ><img src={UserIcon} alt="menu" />
        </MenuButton>
        {menuOpened && <UserMenu />}
      </Header>

      {children}

      <Footer>
        <h2>Criado por <a href='https://www.linkedin.com/in/artphil/' target='_blank' rel='noreferrer'>Arthur Phillip</a> e <a href='https://www.linkedin.com/in/renato-ferreira-01/' target='_blank' rel='noreferrer'>Renato Ferreira</a></h2>
      </Footer>
    </Main>
  );
}

export default DefaultPage;


