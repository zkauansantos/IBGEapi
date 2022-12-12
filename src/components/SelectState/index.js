import { useEffect, useState } from "react";
import { getStatesForUF } from "../../services";
import { Select } from "./styles";


const SelectState = () => {
    const [states, setStates] = useState([]);
    const [stateSelected, setStateSelected] = useState();

    useEffect(() => {
        const fetchData = async () => {
          const statesList = await getStatesForUF();
    
          setStates(statesList);
        };
    
        fetchData();
      }, []);

      const handleSelectChange = (e) => {
        setStateSelected(e.target.value)  
      }

      return (
        <Select onChange={handleSelectChange}>
          <option >Selecione</option>
          {states.map((state, index) => {
            return <option key={index}> {state.nome}</option>;
          })}
        </Select>
      );
}

export {SelectState}