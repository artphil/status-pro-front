import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as EmailIco } from 'assets/icons/email.svg';
import { ReactComponent as PassIco } from 'assets/icons/pass.svg';
import { ReactComponent as UserIco } from 'assets/icons/user.svg';

export const EmailIcon = styled(EmailIco)`
    position: absolute;
    right: 8px;
    top: 10px;
    color: #fff;
    width: 20px;
    height: 20px;
`;
export const PassIcon = styled(PassIco)`
    position: absolute;
    right: 8px;
    top: 10px;
    color: #fff;
    width: 20px;
    height: 20px;
`;
export const UserIcon = styled(UserIco)`
    position: absolute;
    right: 8px;
    top: 10px;
    color: #fff;
    width: 20px;
    height: 20px;
`;

export const Container = styled.div`
    position: relative;
    width: 400px;
    height: 500px;
    background: transparent;
    border: 2px solid rgba(255,255,255, .5);
    border-radius: 20px;
    margin: 20px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(15px);
    box-shadow: -10px 10px 5px rgba(0,0,0, .3);
    @media (max-width: 768px) {
        width: 100%;
        height: 100vh;
        border: none;
        border-radius: 0;
    }
`;

export const LoginContainer = styled.form`
    position: relative;
    height: 470px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 480px) {
        width: 100%;
        height: 100vh;
        border: none;
        border-radius: 0;
    }
`;

export const LoginTitle = styled.h2`
    font-size: 2em;
    color: #fff;
    text-align: center;
`;
export const LoginField = styled.div`
    position: relative;
    width: 310px;
    border-bottom: 2px solid #fff;
    
    &>input{
        width: 100%;
        height: 50px;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1em;
        color: #fff;
        padding: 0 35px 0 5px;
        &::placeholder{
            color: rgba(255,255,255, .7);
        }
    }
`;

export const LoginButton = styled.button`
    width: 100%;
    height: 40px;
    background: ${(props) => props.disabled ? '#ddd' : '#fff'};
    border: none;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 1em;
    color: ${(props) => props.disabled ? '#aeaeae' : '#000'};
    font-weight: 500;
    margin: 15px 0 10px;
    &:hover{
            background: #eee;
    }
`;



export const StyledLink = styled(Link)`
    font-size: .9em;
    color: #fff;
    text-align: center;
    margin: 15px 0 10px;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;