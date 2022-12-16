import { Link } from 'react-router-dom';
import { StyledButton, ContainerButton } from './styles';

export function Button() {
    return (
      <ContainerButton>
        <Link to="/details">
          <StyledButton> Mostrar microregiões e macroregiões </StyledButton>
        </Link>
      </ContainerButton>
    );
}
