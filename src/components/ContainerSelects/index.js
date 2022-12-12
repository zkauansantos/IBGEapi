import { SelectCounty } from "../SelectCounty";
import { SelectState } from "../SelectState";
import { Container, DivSelects} from "./styles";

const ContainerSelects = () => {
    return (
        <Container>
            <div>
                <h2> Selecione seu estado e municipio</h2>
            </div>
            <DivSelects>
                <SelectState/>
                <SelectCounty/>
            </DivSelects>
            <button> Mostrar microregiões e macroregiões </button>
        </Container>
    );
}

export { ContainerSelects }