import { ReactNode, useState } from 'react';

import UserIcon from 'assets/icons/email.svg';
import Logout from 'components/Logout';

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
        Status PRO -  Design by Arthur and Renato
      </Footer>
    </Main>
  );
}

export default DefaultPage;


