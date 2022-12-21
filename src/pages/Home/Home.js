import { Button } from '../../components/Button';
import { SelectCounty } from '../../components/SelectCounty';
import { SelectState } from '../../components/SelectState';
import { Container, DivSelects } from './styles';

export function Home() {
  return (
    <Container>
      <div>
        <h1> Selecione seu estado e município</h1>
      </div>
      <DivSelects>
        <SelectState />
        <SelectCounty />
        <Button />
      </DivSelects>
    </Container>
  );
}
