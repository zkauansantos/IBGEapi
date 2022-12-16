import styled from "styled-components";

export const StyledButton = styled.button`
padding: 10px 15px;
border: none;
border-radius: 10px;
background-color: #27435d;
color: white;
transition: 0.3s ease-in-out;
width: 100%;

&:hover {
    background-color: #7fabd0;
}
`;

export const ContainerButton = styled.div`
    margin-top: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;