import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getStatesForUF } from "../../services";
import { changeState } from "../../store/Slice/slice";
import { Select } from "../Select";


const SelectState = () => {
    const [states, setStates] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
          const statesList = await getStatesForUF();
    
          setStates(statesList);
        };
    
        fetchData();
      }, []);

      const handleSelectChange = (e) => {
        dispatch(changeState(e.target.value))
      }

      return (
        <Select onChange={handleSelectChange}>
          <option>Selecione</option>
          {states.map((state, index) => {
            return <option key={index} value={state.sigla}> {state.nome} - {state.sigla}</option>;
          })}
        </Select>
      );
}

export {SelectState}