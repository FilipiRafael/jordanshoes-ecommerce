import styled from 'styled-components';

export const Square = styled.div`
    width: 280px;
    height: 280px;
    background-color: #EBE9EA;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        width: 100%;
    }

    img {
        width: 250px;
    }
`