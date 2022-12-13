import { Button } from "../Button";
import { SelectCounty } from "../SelectCounty";
import { SelectState } from "../SelectState";
import { Container, DivSelects } from "./styles";

const ContainerSelects = () => {
    return (
        <Container>
            <div>
                <h2> Selecione seu estado e município</h2>
            </div>
            <DivSelects>
                <SelectState/>
                <SelectCounty/>
            </DivSelects>
            <Button/>
        </Container>
    );
}

export { ContainerSelects }