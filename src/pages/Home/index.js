import { Fragment } from 'react';
import { Discount, Logo, Banner, Overlay, Highlights, ProductsList, ContainerProducts, Footer } from './styles';
import Shoe from '../../components/Shoe';

const Home = () => {

    const shoesList = [
        {
            image: '/images/1.svg'
        },
        {
            image: '/images/2.svg'
        },
        {
            image: '/images/3.svg'
        },
        {
            image: '/images/4.svg'
        },
        {
            image: '/images/5.svg'
        },
        {
            image: '/images/6.svg'
        },
        {
            image: '/images/7.svg'
        },
        {
            image: '/images/8.svg'
        },
    ];

    return (
        <Fragment>
            <Discount>Ganhe R$ 10,00 de desconto no frete</Discount>
            <Logo>
                <h1>JordanShoes</h1>
            </Logo>
            <Banner>
                <Overlay />
                <h2>A melhor loja de Jordan</h2>
                <span>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</span>
            </Banner>
            <Highlights>
                <h3>Destaques</h3>
                <span>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</span>
            </Highlights>
            <ContainerProducts>
                <ProductsList>
                    {shoesList.map((shoe) => (
                        <Shoe image={shoe.image} alt="Jordan Shoe" />
                    ))}
                </ProductsList>
            </ContainerProducts>
            <Footer>
                <h5>Todos os direitos reservados.</h5>
            </Footer>
        </Fragment>
    )
}

export default Home;