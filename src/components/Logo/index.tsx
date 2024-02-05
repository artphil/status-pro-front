import styled from 'styled-components';

function Logo() {
  return (
    <LogoContainer>
      <TopContainer>
        <h2>THE CARD GAME</h2>
      </TopContainer>
      <h1>Status PRO</h1>
      <BarBotton />
    </LogoContainer>
  );
}

export default Logo;


const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  &>h1{
    font-family: 'Poppins', sans-serif;
    font-size: 34pt;
    color: white;
    margin: -5px;
  }
  @media (max-width: 768px) {
    position: absolute;
    z-index: 1;
    top: 50px;
  }
`;

const TopContainer = styled.div`
  width: 90%;
  height: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;

  &>h2{
    font-family: 'Poppins', sans-serif;
    font-size: 10pt;
    color: #000;
    margin: -1px;
  }
`;

const BarBotton = styled.div`
  width: 90%;
  height: 12px;
  background-color: #fff;
`;