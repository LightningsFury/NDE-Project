import styled from '@emotion/styled';

export const MarginedInput = styled('input')`
    margin-left: 10px;
    background-color: lightblue;
    padding: 3px;
    border: none;
    &:focus {
        background-color: green;
    }
`

export const Submit = styled('button')`
    border: none;
    border-radius: 5px;
    padding: 5px;
    background-color: aliceblue;
    color: black;
`