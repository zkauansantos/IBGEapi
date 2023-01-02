import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import GetDataAPIService from '../../services/GetDataAPIService';
import { changeCounty, changeState } from '../../store/Slice/slice';
import { Select } from '../Select';

function SelectState() {
  const [states, setStates] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
      async function fetchData() {
        try {
          const statesList = await GetDataAPIService.listStates();
          setStates(statesList);
        } catch { }
      }

      fetchData();
  }, []);

  function handleSelectChange(event) {
    if (event.target.value === '') dispatch(changeCounty(''));

    dispatch(changeState(event.target.value));
  }

  return (
    <Select onChange={handleSelectChange}>
      <option value="">Selecione</option>
      {states.map((state) => (
        <option key={state.id} value={state.sigla}>
          {state.nome} - {state.sigla}
        </option>
        ))}
    </Select>
  );
}

export { SelectState };
