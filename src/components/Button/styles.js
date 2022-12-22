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
  background-color: ${({ theme }) => theme.backgroundColor === '#e9f2f9' ? '#27435d' : '#e9f2f9'};
  color:  ${({ theme }) => theme.textColor === '#e9f2f9' ? '#27435d' : '#e9f2f9'};;
  font-weight: bold;
  transition: 0.3s ease-in-out;

  &:hover {
      background-color: #7fabd0;
  }

  &:disabled {
    background-color: #ccc;
    color: gray;
    cursor: initial;
  }

  @media screen and (max-width: 425px) {
    font-size: 12px ;
  }
`;
