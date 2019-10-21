import styled from '@emotion/styled';

export const MarginedInput = styled('input')`
    margin-left: 10px;
    background-color: lightblue;
    & :focus {
        background-color: cyan;
    }
`