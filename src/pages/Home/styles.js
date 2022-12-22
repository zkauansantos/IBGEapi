import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  margin-top: 32px;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size:25px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 150px;

    h1 {
      font-size: 20px;
    }
  }
`;

export const DivSelects = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;
