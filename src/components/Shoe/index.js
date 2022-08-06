import { Square } from './styles';

const Shoe = ({ image }) => {
    return (
        <Square>
            <img src={image} alt="Jordan Shoe" />
        </Square>
    )
}

export default Shoe;