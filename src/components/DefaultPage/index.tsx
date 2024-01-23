import { ReactNode, useState } from "react";

import UserIcon from "assets/icons/email.svg";
import Logout from "components/Logout";

import { Footer, Header, Main, MenuButton, MenuContainer, MenuItem } from "./styles";


function UserMenu() {
  return (
    <MenuContainer>
      <MenuItem>op</MenuItem>
      <MenuItem><Logout /></MenuItem>
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
        Default Page
        <MenuButton
          className={menuOpened ? "active" : ""}
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


