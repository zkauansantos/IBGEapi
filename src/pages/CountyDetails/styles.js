import styled from "styled-components";
import mapaBrasil from '../../assets/imgs/mapaBrasil.png'


export const Header = styled.header`
  border-bottom: 1.5px solid #bcbcbc;
  display: flex;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 16px;
  
  h1 {
    text-align: center;
    font-size: 24px;
  }
`;

export const Container = styled.div`
  height: 80vh;
`;

export const DivImg = styled.div`
  background: url(${mapaBrasil}) center;
  border-radius: 50%;
  width: 479px;
  height: 453px;
  float: left;
  shape-outside: circle(50%);
`;

export const Content = styled.div`
`;

export const ContainerDetails = styled.div`
`;
