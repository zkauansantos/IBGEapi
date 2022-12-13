import { Link } from "react-router-dom"
import { StyledButton } from "./styles"

export const Button = () => {
    return (
        <Link to="/details">
            <StyledButton> Mostrar microregiões e macroregiões </StyledButton>
        </Link>
    )
}