// const idCounty = countySelected.length > 1 ? countySelected[0].id : countySelected.id;
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, DivImg, Content } from "./styles";
import mapa from "../../assets/imgs/mapa.png";

export const DetailsCounty = () => {
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

  console.log(infosCounty);

  // MICRORREGIAO, MESORREGIAO, UF, REGIAO DO MUNICIPIO
  return (
    <>
      <header>
        {infosCounty.map((index) => (
          <h1 key={index.id} style={{ marginLeft: "55px", marginTop: 25 }}>
            {index["regiao-imediata"]["regiao-intermediaria"]["UF"].nome}
          </h1>
        ))}
      </header>
      <Container>
        <DivImg>
          <img src={mapa} alt="mapa" />
        </DivImg>
        <Content>
          {infosCounty.map((index) => (
            <p key={index.id}></p>
          ))}
        </Content>
      </Container>
    </>
  );
};
