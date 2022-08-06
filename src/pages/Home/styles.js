import styled from 'styled-components';

export const Discount = styled.div`
    width: 100vw;
    height: 4rem;
    background-color: #181818;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-weight: 300;
    font-size: 1rem;
`

export const Logo = styled.div`
    width: 100vw;
    height: 4rem;
    background-color: #F9F9F9;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: #181818;
        font-weight: 700;
        font-size: 1.5rem;
    }
`

export const Banner = styled.div`
    position: relative;
    width: 100%;
    height: 360px;
    background-image: url('/images/banner.svg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: 800px) {
        background-image: url('/images/banner-mobile.svg');
    }

    h2, span {
        margin-left: 100px;
        color: #F9F9F9;
        z-index: 1;

        @media screen and (max-width: 800px) {
            margin-left: 2rem;
        }
    }

    h2 {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 1rem;

        @media screen and (max-width: 800px) {
            font-size: 1.5rem;
        }
    }

    span {
        font-weight: 300;
        font-size: 1rem;
        width: 40%;

        @media screen and (max-width: 800px) {
            width: 80%;
        }
    }
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #000;
    opacity: 0.5;
` 

export const Highlights = styled.div`
    width: 100%;
    margin: 4rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        text-align: center;
    }

    h3 {
        font-weight: 500;
        font-size: 2rem;
        color: #181818;
        margin-bottom: 0.5rem;
    }

    span {
        font-weight: 300;
        font-size: 1.2rem;
        color: #474747;

        @media screen and (max-width: 800px) {
            font-size: 1rem;
        }
    }
`

export const ContainerProducts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6rem;
`

export const ProductsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    width: 80%;
    row-gap: 2rem;
    column-gap: 0.5rem;
`

export const Footer = styled.footer`
    width: 100%;
    height: 4rem;
    background-color: #181818;
    color: #F9F9F9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 300;
`