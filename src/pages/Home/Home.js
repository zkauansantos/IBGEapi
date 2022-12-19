import { useSelector } from 'react-redux';
import { Button } from '../../components/Button';
import { SelectCounty } from '../../components/SelectCounty';
import { SelectState } from '../../components/SelectState';
import { Container, DivSelects } from './styles';

export function Home() {
  const { stateSelected } = useSelector((state) => state.userSelections);
  const { countySelected } = useSelector((state) => state.userSelections);

  return (
    <Container>
      <div>
        <h1> Selecione seu estado e município</h1>
      </div>
      <DivSelects>
        <SelectState />
        <SelectCounty />
        {stateSelected && countySelected ? <Button /> : <> </>}
      </DivSelects>
    </Container>
  );
}
