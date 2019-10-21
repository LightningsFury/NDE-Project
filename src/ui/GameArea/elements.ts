import styled from '@emotion/styled';

export const Initials = styled('h1')`
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2)
`

export const Input = styled('input')`
    margin-left: 10px;
    background-color: lightblue;
    padding: 3px;
    &:focus {
        background-color: cyan;
        border: none;
    }
`

export const Submit = styled('input')`
    border: none;
    border-radius: 5px;
    padding: 5px;
    background-color: aliceblue;
    color: black;
    margin-left: 5px;
`

export const Artist = styled('p')`
    color: mediumpurple;
    font-family: monospace;
`
