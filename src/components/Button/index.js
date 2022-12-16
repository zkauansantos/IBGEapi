import { Link } from "react-router-dom"
import { StyledButton, ContainerButton } from "./styles"

export const Button = () => {
    return (
        <ContainerButton>
            <Link to="/details">
                <StyledButton> Mostrar microregiões e macroregiões </StyledButton>
            </Link>
        </ContainerButton>
    )
}