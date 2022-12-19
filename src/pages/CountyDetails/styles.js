import styled from 'styled-components';
import mapaBrasil from '../../assets/imgs/mapaBrasil.png';

export const Header = styled.header`
  border-bottom: 1.5px solid ${({ theme }) => theme.textColor};
  display: flex;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 16px;

  > h1 {
    font-size: 27px;
    margin-right: 22px;
  }
`;

export const Container = styled.div`
  height: 80vh;
`;

export const DivImg = styled.div`
  background: url(${mapaBrasil}) center;
  width: 479px;
  height: 453px;
  border: 1px solid ${({ theme }) => theme.textColor};
`;

export const ContainerDetails = styled.div`
  margin-top: 16px;
  border: 1px solid ${({ theme }) => theme.textColor};
  padding: 15px;
`;
