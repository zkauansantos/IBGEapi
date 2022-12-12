import { useEffect, useState } from "react";
import { getCountysForUF } from "../../services";
import { Select } from "./styles";

const SelectCounty = () => {
    const [countys, setCountys] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const statesList = await getCountysForUF('SP');
    
          setCountys(statesList);
        };
    
        fetchData();
      }, []);

      const handleSelectChange = (e) => {
        const stateSelected = e.target.value
    
        console.log(stateSelected)
      }

      return (
        <Select onChange={handleSelectChange}>
          <option >Selecione</option>
          {countys.map((countys, index) => {
            return <option key={index}> {countys.nome}</option>;
          })}
        </Select>
      );
}

export {SelectCounty}