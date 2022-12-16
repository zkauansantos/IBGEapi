import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountysForUF, getDetailsToCounty } from "../../services";
import { changeCounty } from "../../store/Slice/slice";
import { Select } from "../Select";

export const SelectCounty = () => {
  const [countys, setCountys] = useState([]);
  const dispatch = useDispatch();
  const { stateSelected } = useSelector((state) => state.userSelections);

  useEffect(() => {
    const fetchData = async () => {
      const statesList = await getCountysForUF(stateSelected);

      setCountys(statesList);
    };

    fetchData();
  }, [stateSelected]);

  const handleSelectChange = async (e) => {
    if (e.target.value === " ") return;
    const value = e.target.value;
    const valueNoAccent = value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const valueWithHyphen = valueNoAccent.split(" ").join("-");

    const informations = await getDetailsToCounty(valueWithHyphen);
    dispatch(changeCounty(informations));
    localStorage.setItem("info", JSON.stringify(informations));
  };

  return (
    <Select onChange={handleSelectChange}>
      <option value=" ">Selecione</option>
      {countys.map((countys, index) => (
        <option key={index}> {countys.nome}</option>
      ))}
      ;
    </Select>
  );
};
