import styled from 'styled-components';


export const Main = styled.main`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const ContentLeft = styled.section`
    background-color: ${props => props.theme.color.variant2.main};
    width: 60%;
    border-radius: 0 50px 50px 0;

    @media screen and (max-width: ${props => props.theme.device.mobile.size}) {
        display: none;
    }
`;

export const ContentRight = styled.section`
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: ${props => props.theme.device.mobile.size}) {
            width: 100%;
    }
`;

