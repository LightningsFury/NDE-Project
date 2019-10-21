import styled from '@emotion/styled';

interface InputProps {
    outlined: boolean;
}

export const MarginedInput = styled('input')<InputProps>`
    margin-left: 10px;
    background-color: lightblue;
    padding: 3px;
    border: ${({outlined: InputProps}) => outlined ? '5px solid red' : 'none'};
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