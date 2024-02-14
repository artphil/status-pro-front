import styled from 'styled-components';


export const CardContainer = styled.div`
  border: 2px solid black;
  background: rgb(100,100,100);
  overflow:hidden;
  height: 500px;
  width: 320px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.280);
  animation: move-up6 3s ease-in infinite alternate-reverse;

  &.gold{
    background: linear-gradient(153deg, #C18700, #D8A309, #EABF14, #EAD355, #F7F18B, #EABF14, #EAD355, #F7F18B);  
  }

  &.silver {
    background: linear-gradient(153deg, #3F3F3D, #63645D, #858885, #A7A9A8, #C8CAC7, #858885, #A7A9A8, #C8CAC7);  
  }

  &.bronze {
    background: linear-gradient(153deg, #3E2B01, #503B00, #836600, #C1A132, #FDF198, #836600, #C1A132, #FDF198);  
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  width: 95%;
  background-color: rgba(255, 255, 255,.3);
  border: 1px solid rgba(255, 255, 255,.3);
  border-radius: 5px;
`;

export const TopoTitle = styled.span`
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-left: 1rem;
  font-family: 'Poppins', sans-serif;
`;

export const CardSerie = styled.span`
  background-color: rgba(23,23,23,.8);
  padding: .6rem;
  border-radius: 40px;
  font-family: 'Poppins', sans-serif;
  color: #fff ;
  font-weight: 500;
`;

export const ContainerInside = styled.div`
  width: 93%;
  height: 93%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;


export const CardImage = styled.div`
  overflow:hidden;
  border-radius: 20px;
  border: 3px solid black;
  width: 90%;
  height: 50%;
  position: relative;
  &>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`;

export const Status = styled.div`
  border: 1px solid white;
  width: 80%;
  border: 1px solid rgba(255, 255, 255,.3);
  background-color: rgba(255, 255, 255,.3);
  display: flex;
  justify-content: space-between;
  &>span{
    font-family: 'Poppins', sans-serif;
    margin-left: 15px;
    margin-right: 15px;
  }
  > * {
      &:last-child {
         font-weight: 600;
      }
    }
`;