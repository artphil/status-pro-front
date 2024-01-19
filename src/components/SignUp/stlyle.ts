import styled from "styled-components";


export const LoginContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 2rem;
    background-color: var(--color-variant-1);
    border-radius: 25px;
    box-shadow: inset -2px -5px 20px rgb(5, 5, 5);
`

export const LoginTitle = styled.h2`
    text-align: center;
    margin: 2em;
    color: rgb(255, 255, 255);
    font-size: 2em;
`
export const LoginField = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: var(--color-variant-5);
    background-color: var(--color-variant-1);
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
    
    svg {
        height: 1.3em;
        width: 1.3em;
        fill: var(--color-variant-5);
    }


    input {
        background: none;
        border: none;
        outline: none;
        width: 100%;
        color: var(--color-variant-5);
    }

`
export const LoginButtons = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2.5em;
    margin-bottom: 3em;
`
export const LoginButtonNormal = styled.button`
    padding: 0.5em 1.1em;
    padding-right: 1.1em;
    border-radius: 5px;
    margin: 0.5em;
    width: 40%;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: var(--color-variant-2);
    color: var(--color-variant-3);
    
    &:hover {
        background-color: var(--color-variant-5);
        color: var(--color-variant-3);
    }
    
`
export const LoginButtonWarm = styled.button`
    width: 84%;
    margin-bottom: 3em;
    padding: 0.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: var(--color-variant-2);
    color: var(--color-variant-3);
  
    &:hover {
        background-color: var(--color-variant-4);
        color: var(--color-variant-5);
    }
`