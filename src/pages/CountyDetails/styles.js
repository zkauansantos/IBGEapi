import styled from 'styled-components';
import brazilMap from '../../assets/imgs/brazilMap.png';
import brazilFlag from '../../assets/imgs/brazilFlag.jpg';

export const BackToHome = styled.div`
  position: absolute;
  left: 0px;
  top: 40px;

  a {
    text-decoration:none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.textColor === '#e9f2f9' ? '#FED049' : '#6892DF'};

    ::after{
      content: 'Voltar';
      margin-left: 3px;
    }
  }

  @media screen and (max-width: 550px) {
    left: 15px;
  }
`;

export const Header = styled.header`
  padding: 0px 15px;
  border-bottom: 1.5px solid ${({ theme }) => theme.textColor};
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
  margin-top: 16px;
  width: 100%;
  justify-content: center;
  gap: 10px;

  h1 {
    font-size: 27px;
    text-align: center;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.textColor === '#e9f2f9' ? '#FED049' : '#6892DF'};
  }

  @media screen and (max-width: 450px) {
    width: 95%;

    h1 {
      font-size: 24px;
    }
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
  background: url(${brazilMap}) center;
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


  @media screen and (max-width:450px) {
    h2 {
     font-size: 18px;
    }

    strong {
      font-size: 14px;
    }
   }
`;

export const ListOfCountyStates = styled.ul`
  display: flex;
  align-items: center;
  justify-content:center;
  list-style: square outside url(${brazilFlag});
  gap: 30px;
  margin-left: 16px;
  padding: 6px;

  @media screen and (max-width: 340px ) {
    flex-wrap: wrap;
    gap: 25px;
  }
`;
