import styled from "styled-components";


export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0.04em 2em;
    background-color:  ${props => props.theme.color.variant1.main};
    border-radius: 25px;
    transition: .4s ease-in-out;

    &:hover {
        transform: scale(1.05);
        border: 1px solid black;
    }
`;

export const FormTitle = styled.h2`
    text-align: center;
    margin: 2em;
    color: rgb(255, 255, 255);
    font-size: 2em;
`;
export const InputField = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: ${props => props.theme.color.variant1.contrastText};
    background-color: ${props => props.theme.color.variant1.main};
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
    
    svg {
        height: 1.3em;
        width: 1.3em;
        fill: ${props => props.theme.color.variant5.main};
    }


    input {
        background: none;
        border: none;
        outline: none;
        width: 100%;
        color: ${props => props.theme.color.variant1.contrastText};
    }

`;
export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2.5em;
    margin-bottom: 3em;
`;
export const ButtonNormal = styled.button`
    padding: 0.5em 1.1em;
    padding-right: 1.1em;
    border-radius: 5px;
    margin: 0.5em;
    width: 40%;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: ${props => props.theme.color.variant2.main};
    color: ${props => props.theme.color.variant2.contrastText};
    
    &:hover {
        background-color: ${props => props.theme.color.variant5.main};
        color: ${props => props.theme.color.variant5.contrastText};
    }
    
`;
export const ButtonWarm = styled.button`
    width: 84%;
    margin-bottom: 3em;
    padding: 0.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: ${props => props.theme.color.variant2.main};
        color: ${props => props.theme.color.variant2.contrastText};
  
    &:hover {
        background-color: ${props => props.theme.color.variant4.main};
        color: ${props => props.theme.color.variant4.contrastText};
    }
`;

export const ErrorMessage = styled.p`
    font-size: ${props => props.theme.font.small};
    color: ${props => props.theme.color.variant4.main};
    font-weight: 700;
`;