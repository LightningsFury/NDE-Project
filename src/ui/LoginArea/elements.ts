import styled from '@emotion/styled';


export const MarginedInput = styled('input')`
    margin-left: 10px;
    background-color: lightblue;
    padding: 3px;
    border: none;
    &:focus {
        background-color: cyan;
        border: none;
    }
`

export const Submit = styled('button')`
    border: none;
    border-radius: 5px;
    padding: 5px;
    background-color: aliceblue;
    color: black;
`

export const LoginForm = styled('div')`
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 10px;
`