import { useSelector } from "react-redux";
import { Button } from "../Button";
import { SelectCounty } from "../SelectCounty";
import { SelectState } from "../SelectState";
import { Container, DivSelects } from "./styles";

const ContainerSelects = () => {
  const { stateSelected } = useSelector((state) => state.userSelections);
  const { countySelected } = useSelector((state) => state.userSelections);

  return (
    <Container>
      <div>
        <h2> Selecione seu estado e município</h2>
      </div>
      <DivSelects>
        <SelectState />
        <SelectCounty />
      </DivSelects>
      {stateSelected && countySelected ? <Button /> : <></>}
    </Container>
  );
};

export { ContainerSelects };
