import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountysForUF } from "../../services";
import { changeCounty } from "../../store/Slice/slice";
import { Select } from "./styles";

export const SelectCounty = () => {
    const [countys, setCountys] = useState([]);
    const dispatch = useDispatch();
    const  { stateSelected } = useSelector(state => state.userSelections)

    useEffect(() => {
        const fetchData = async () => {
          const statesList = await getCountysForUF(stateSelected);
    
          setCountys(statesList);
        };
    
        fetchData();
      }, [stateSelected]);

      const handleSelectChange = (e) => {
        if (e.target.value === '') return

        dispatch(changeCounty(e.target.value));
      }

      return (
        <Select onChange={handleSelectChange}>
          <option>Selecione</option>
          {countys.map((countys, index) => {
            return <option key={index}> {countys.nome}</option>;
          })}
        </Select>
      );
}
