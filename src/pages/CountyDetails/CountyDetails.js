import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, DivImg, Content, Header, ContainerDetails } from "./styles";


export const CountyDetails = () => {
    const [infosCounty, setInfosCounty] = useState([]);
    const { countySelected } = useSelector((state) => state.userSelections);
    const countySelectedParsed = JSON.parse(localStorage.getItem("info"));
  
    useEffect(
      () => {
        const informationsIsArray = Array.isArray(countySelectedParsed);
        setInfosCounty(
          informationsIsArray
            ? [...(countySelectedParsed || countySelected)]
            : [countySelectedParsed || countySelected]
        );
      }, // eslint-disable-next-line
      [countySelected]
    );
  
    return (
      <>
        <Header>
          {infosCounty.map((index) => (
            <h1 key={index.id}>
              {index["regiao-imediata"]["regiao-intermediaria"]["UF"].nome}
            </h1>
          ))}
        </Header>
        <Container>
          <DivImg/>
          <Content>      
              {infosCounty.map((index) => { 
                const defaultPath = index.microrregiao.mesorregiao;
                const { nome : nameMicroregion } = index.microrregiao;
                const { nome : nameMesoregion} = defaultPath;
                const { nome : nameState} = defaultPath['UF'];
                const { sigla : acronym} = defaultPath['UF'];
                const { nome : region} = defaultPath['UF'].regiao;
                
                return (
                  <ContainerDetails key={index.id}>
                    <h2>Microrregião : <span>{nameMicroregion}</span></h2>
                    <strong>Mesorregião: {nameMesoregion}</strong>
                    <p> Estado : {nameState} - {acronym}</p>
                    <p> Região : {region}</p>
                  </ContainerDetails>
                )
              })}
          </Content>
        </Container>
      </>
    );
}