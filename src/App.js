import { useEffect, useState } from "react";
import { getStatesForUF } from "./services";

function App() {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const statesList = await getStatesForUF();

      setStates(statesList);
    };

    fetchData();
  }, []);

  const handleSelectChange = (e) => {
    const stateSelected = e.target.value

    console.log(stateSelected)
  }

  return (
    <select onChange={handleSelectChange}>
      <option >Selecione</option>
      {states.map((state, index) => {
        return <option key={index}> {state.nome} - {state.sigla}</option>;
      })}
    </select>
  );
}

export default App;
