import enumerator from '../../assets/imgs/men-enumerator.png';
import { Container } from './styles';

function Header() {
    return (
      <Container>
        <img src={enumerator} alt="logo" width="100" />
      </Container>
    );
}

export { Header };
