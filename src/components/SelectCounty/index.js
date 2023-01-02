import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetDataAPIService from '../../services/GetDataAPIService';
import { changeCounty } from '../../store/Slice/slice';
import { ContainerSelect } from '../ContainerSelect';
import { Select } from '../Select';
import Spinner from '../Spinner';

export function SelectCounty() {
  const [countys, setCountys] = useState([]);
  const [isLoadingCountys, setIsLoadingCountys] = useState(true);
  const { stateSelected } = useSelector((state) => state.userSelections);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statesList = await GetDataAPIService.listCountysForUF(stateSelected);

        setCountys(statesList);
      } catch {} finally {
        setIsLoadingCountys(false);
      }
    };

    fetchData();
  }, [stateSelected]);

  async function handleSelectChange(event) {
    if (event.target.value === '') {
      dispatch(changeCounty(''));
      return;
    }
    const { value } = event.target;
    const valueNoAccent = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const valueWithHyphen = valueNoAccent.split(' ').join('-');
    const informations = await GetDataAPIService.listDetailsToCounty(valueWithHyphen);

    dispatch(changeCounty(informations));
    localStorage.setItem('info', JSON.stringify(informations));
  }

  return (
    <ContainerSelect>
      <Select
        onChange={handleSelectChange}
        disabled={isLoadingCountys}
      >
        <option value="">Selecione</option>
        {countys.map((county) => (
          <option key={county.id}>{county.nome}</option>
      ))}
        ;
      </Select>
      {isLoadingCountys && (
        <div className="loader">
          <Spinner size="10px" />
        </div>
      )}
    </ContainerSelect>

  );
}
