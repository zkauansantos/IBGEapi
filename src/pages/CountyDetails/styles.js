import styled from 'styled-components';
import mapaBrasil from '../../assets/imgs/mapaBrasil.png';

export const Header = styled.header`
  padding: 0px 15px;
  border-bottom: 1.5px solid ${({ theme }) => theme.textColor};
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  margin-top: 16px;
  width: 100%;
  justify-content: space-between;

  > h1 {
    margin-right: 22px;
  }

  h1 {
    font-size: 27px;
    text-align: center;
  }

  @media screen and (max-width: 450px) {
    width: 95%;
  }
`;

export const Container = styled.div`
  margin-bottom: 150px;
  width: 100%;

  @media screen and (max-width: 450px) {
    width: 95%;
  }
`;

export const DivImg = styled.div`
  background: url(${mapaBrasil}) center;
  background-size: cover;
  width: 95%;
  height: 453px;
  border: 1px solid ${({ theme }) => theme.textColor};

  @media screen and (max-width: 450px){
    height: 350px ;
  }
`;

export const ContainerDetails = styled.div`
  margin-top: 16px;
  border: 1px solid ${({ theme }) => theme.textColor};
  padding: 16px;
`;
