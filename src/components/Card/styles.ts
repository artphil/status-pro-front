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
    background: linear-gradient(153deg, rgba(218,165,32,1) 0%,
                                      rgba(184,134,13,1) 12%, 
                                      rgba(208,185,127,1) 41%, 
                                      rgba(218,165,32,1) 100%);
  }

  &.silver {
    background: linear-gradient(153deg, rgba(192,192,192,1) 0%,
                                        rgba(161,160,158,1) 12%, 
                                        rgba(231,229,227,1) 41%, 
                                        rgba(192,192,192,1) 100%);
  }

  &.cooper {
    background: linear-gradient(153deg, rgba(123,76,30,1) 0%,
                                    rgba(205,106,9,1) 12%, 
                                    rgba(205,127,50,1) 41%, 
                                    rgba(123,76,30,1) 100%);
  }


  &:hover{
    transform: scale(1.04) rotate(1deg);
  }
  @keyframes move-up6 {
  to {
    transform: translateY(-10px);
  }
  }
  @keyframes move-down1 {
    to {
      transform: translateY(10px);
    }
  }
`;

export const CardSerie = styled.div`
  background-color: rgba(23,23,23,.8);
  padding: 5px;
  border-radius: 40px;
  position: absolute;
  top: 2.5%;
  right: 8%;
  z-index: 1;
  &>span{
    font-family: 'Poppins', sans-serif;
    color: #fff ;
    font-weight: 500;
  }
`;

export const ContainerInside = styled.div`
  width: 93%;
  height: 93%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  @keyframes shine { 
    0% {transform:translateX(-100%) translateY(-100%) rotate(30deg);}
    80% {transform:translateX(-100%) translateY(-100%) rotate(30deg);}
  	100% {transform:translateX(100%) translateY(100%) rotate(30deg);}
  }
  
  &:hover{
    &::after {
      content:'';
      top:0;
      transform:translateX(100%) rotate(30deg);
      width:300%;
      height:300%;
      position: absolute;
      z-index:1;
      animation: shine 3s infinite ease-in;
      background:
        linear-gradient( to right, 
          rgba(255,255,255,0) 0%,
          rgba(255,255,255,0.8) 50%,
          rgba(128,186,232,0) 99%,
          rgba(128,186,232,0) 100%);
    }
  }
`;

export const TopoTitle = styled.div`
  border: 1px solid rgba(255, 255, 255,.3);
  background-color: rgba(255, 255, 255,.3);
  width: 95%;
  height: 25px;
  border-radius: 5px;
  text-align: left;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  &>span{
    font-family: 'Poppins', sans-serif;
    margin-left: 15px;
  }
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

export const Information = styled.div`
  position: absolute;
  bottom: 0%;
  right: 5%;
  cursor: pointer;
  &>span{
    font-family: 'Vollkorn', serif;
    font-size: 22pt;
    font-weight: 700;
    color: red;
  }
`;