import styled from 'styled-components';

export const ContainerButton = styled.div`
    margin-top: 16px;
    width: 100%;
    text-align: center;
`;

export const StyledButton = styled.button`
padding: 10px;
width: 80%;
border-radius: 15px 10px;
border: none;
background-color: #27435d;
color: white;
transition: 0.3s ease-in-out;

&:hover {
    background-color: #7fabd0;
}
`;
