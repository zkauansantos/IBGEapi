import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetDataAPIService from '../../services/GetDataAPIService';
import { changeCounty } from '../../store/Slice/slice';
import { Select } from '../Select';

export function SelectCounty() {
  const [countys, setCountys] = useState([]);
  const { stateSelected } = useSelector((state) => state.userSelections);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const statesList = await GetDataAPIService.listCountysForUF(stateSelected);

      setCountys(statesList);
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
    <Select onChange={handleSelectChange}>
      <option value="">Selecione</option>
      {countys.map((county) => (
        <option key={county.id}>{county.nome}</option>
      ))}
      ;
    </Select>
  );
}
