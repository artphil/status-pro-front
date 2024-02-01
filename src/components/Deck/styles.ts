import styled from 'styled-components';


export const DeckContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20rem
`;

export const CardsContainer = styled.div`
  margin-top: 30%; 
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s ease-in-out;

  &.active {
    margin-top: 10%; 
    transform: scale(.5);
  }

  &:hover #c1 {
    transform: translateX(-250px) rotate(-10deg);
  }

  &:hover #c2 {
    transform: translateX(-200px) rotate(-10deg);
  }

  &:hover #c3 {
    transform: translateX(-150px) rotate(-10deg);
  }

  &:hover #c4 {
    transform: translateX(-100px) rotate(-10deg);
  }

  &:hover #c5 {
    transform: translateX(-50px) rotate(-10deg);
  }

  &:hover #c6 {
    transform: translateX(0px) rotate(-10deg);
  }

  &:hover #c7 {
    transform: translateX(50px) rotate(-10deg);
  }

  &:hover #c8 {
    transform: translateX(100px) rotate(-10deg);
  }

  &:hover #c9 {
    transform: translateX(150px) rotate(-10deg);
  }

  &:hover #c10 {
    transform: translateX(200px) rotate(-10deg);
  }

`;

export const CardMotion = styled.div`
  width: 190px;
  height: 254px;
  background: rgba(211, 211, 211, 0.199);
  position: absolute;
  transition: .3s ease-in-out;
  cursor: pointer;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.3);

  &#c1:hover {
    transform: translate(-250px, -100px) rotate(0deg) !important;
  }

  &#c2:hover {
    transform: translate(-200px, -100px) rotate(0deg) !important;
  }

  &#c3:hover {
    transform: translate(-150px, -100px) rotate(0deg) !important;
  }

  &#c4:hover {
    transform: translate(-100px, -100px) rotate(0deg) !important;
  }

  &#c5:hover {
    transform: translate(-50px, -100px) rotate(0deg) !important;
  }

  &#c6:hover {
    transform: translate(0px, -100px) rotate(0deg) !important;
  }

  &#c7:hover {
    transform: translate(50px, -100px) rotate(0deg) !important;
  }

  &#c8:hover {
    transform: translate(100px, -100px) rotate(0deg) !important;
  }

  &#c9:hover {
    transform: translate(150px, -100px) rotate(0deg) !important;
  }

  &#c10:hover {
    transform: translate(200px, -100px) rotate(0deg) !important;
  }
`;

export const CardDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardDescription = styled.div`
  background-color: ${props => props.theme.color.background};
  border-radius: 20px;
  padding: 2rem;
  width: 40%;
`;

export const CardClose = styled.button`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-color: ${props => props.theme.color.variant4.main};
  color: ${props => props.theme.color.variant4.contrastText};
  border: none;
  border-radius: 1rem;
`;
