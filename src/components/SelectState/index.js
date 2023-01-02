import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import GetDataAPIService from '../../services/GetDataAPIService';
import { changeCounty, changeState } from '../../store/Slice/slice';
import { Select } from '../Select';
import { ContainerSelect } from '../ContainerSelect';
import Spinner from '../Spinner';

function SelectState() {
  const [states, setStates] = useState([]);
  const [isLoadingStates, setIsLoadingStates] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoadingStates(true);
      async function fetchData() {
        try {
          const statesList = await GetDataAPIService.listStates();
          setStates(statesList);
        } catch { } finally {
          setIsLoadingStates(false);
        }
      }

      fetchData();
  }, []);

  function handleSelectChange(event) {
    if (event.target.value === '') dispatch(changeCounty(''));

    dispatch(changeState(event.target.value));
  }

  return (
    <ContainerSelect>
      <Select
        onChange={handleSelectChange}
        disabled={isLoadingStates}
      >
        <option value="">Selecione</option>
        {states.map((state) => (
          <option key={state.id} value={state.sigla}>
            {state.nome} - {state.sigla}
          </option>
        ))}
      </Select>
      { isLoadingStates && (
        <div className="loader">
          <Spinner size="10px" />
        </div>
      )}
    </ContainerSelect>

  );
}

export { SelectState };
