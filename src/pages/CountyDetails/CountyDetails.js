import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  Container,
  DivImg,
  Header,
  ContainerDetails,
  ListOfCountyStates,
  BackToHome,
} from './styles';
import { changeCounty, changeState } from '../../store/Slice/slice';

export function CountyDetails() {
  const [infosCounty, setInfosCounty] = useState([]);
  const { countySelected } = useSelector((state) => state.userSelections);
  const countySelectedParsed = JSON.parse(localStorage.getItem('info'));
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const informationsIsArray = Array.isArray(countySelectedParsed);

      setInfosCounty(
        informationsIsArray
        ? [...countySelectedParsed]
        : [countySelectedParsed],
      );
    } catch {}

    return () => {
      dispatch(changeState(''));
      dispatch(changeCounty(''));
    };
  }, [countySelected]);

  return (
    <>
      <BackToHome>
        <Link to="/">
          <AiOutlineArrowLeft />
        </Link>
      </BackToHome>
      <Header>
        <h1>{infosCounty[0]?.nome}</h1>
      </Header>

      <ListOfCountyStates>
        {infosCounty.map((index) => (
          <li key={index.id}>
            <p>{index['regiao-imediata']['regiao-intermediaria'].UF.nome}</p>
          </li>
          ))}
      </ListOfCountyStates>

      <DivImg />

      <Container>
        <div>
          {infosCounty.map((index) => {
            const defaultPath = index.microrregiao.mesorregiao;
            const { nome: nameMicroregion } = index.microrregiao;
            const { nome: nameMesoregion } = defaultPath;
            const { nome: nameState } = defaultPath.UF;
            const { sigla: acronym } = defaultPath.UF;
            const { nome: region } = defaultPath.UF.regiao;

            return (
              <ContainerDetails key={index.id}>
                <h2>Microrregião : <span>{nameMicroregion}</span></h2>
                <strong>Mesorregião : <span>{nameMesoregion}</span></strong>
                <p> Estado : <span>{nameState} - {acronym}</span></p>
                <p> Região : <span>{region}</span></p>
              </ContainerDetails>
            );
              })}
        </div>
      </Container>
    </>
  );
}
