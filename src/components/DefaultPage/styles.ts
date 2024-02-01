import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem ${props => props.theme.device.computer.padding};
  height: 3rem;
  background-color: ${props => props.theme.color.variant1.main};
  color: ${props => props.theme.color.variant1.contrastText};

  @media screen and (max-width: ${props => props.theme.device.mobile.size}) {
    padding: 0.5rem ${props => props.theme.device.mobile.padding};
  }
`;

export const MenuButton = styled.button`
  position: relative;
  z-index: 2;
  top: 1rem;
  width: 4rem;
  height: 4rem;
  background-color: ${props => props.theme.color.background};
  border: 1px solid ${props => props.theme.color.variant2.main};
  border-radius: 2rem;
  box-shadow: 3px 1.5px 1.5px black;
  transition: 0.5s;
  
  &.active {
    z-index: 2;
    scale: 1.4;
    translate: 0 1rem;

    @media screen and (max-width: ${props => props.theme.device.mobile.size}) {
      scale: 1.1;
      translate: -0.5rem 0.5rem;
    }
  }

  img {
    text-align: center;
    width: 100%;
  }
`;

export const Footer = styled.footer`
  padding: 0.5rem ${props => props.theme.device.computer.padding};
  height: 2rem;
  background-color: ${props => props.theme.color.background};
  text-align: center;
  
  @media screen and (max-width: ${props => props.theme.device.mobile.size}) {
    padding: 0.5rem ${props => props.theme.device.mobile.padding};
  }
`;

export const MenuContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${props => props.theme.color.variant1.main};
  width: 20%;
  padding: 3rem 0;
  list-style-type: none;
  border-radius: 1rem 0 0 1rem;

  @media screen and (max-width: ${props => props.theme.device.mobile.size}) {
    width: 100%;
    border-radius: 0 0 1rem 1rem;
  }
`;

export const MenuLink = styled(Link)`
  width: 100%;
  padding: 1rem 2rem;
  color: ${props => props.theme.color.variant2.contrastText};
  font-size: ${props => props.theme.font.default};
  font-weight: 700;
  text-decoration: none;

  &.logout {
    margin-top: 3rem;
    background-color: ${props => props.theme.color.variant4.main};
    color: ${props => props.theme.color.variant4.contrastText};
  }

  &:hover {
    background-color: ${props => props.theme.color.variant2.main};
  }
`;