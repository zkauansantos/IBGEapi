import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledButton, ContainerButton } from './styles';

export function Button() {
  const { stateSelected } = useSelector((state) => state.userSelections);
  const { countySelected } = useSelector((state) => state.userSelections);
  const isSelectsValids = (stateSelected && countySelected);
  console.log(countySelected);

    return (
      <ContainerButton>
        <Link to="/details">
          <StyledButton disabled={!isSelectsValids}> Mostrar microrregiões e macrorregiões
          </StyledButton>
        </Link>
      </ContainerButton>
    );
}
