// const idCounty = countySelected.length > 1 ? countySelected[0].id : countySelected.id;
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export const DetailsCounty = () => {

    const [infosCounty, setInfosCounty] = useState([]);
    const { countySelected } = useSelector(state => state.userSelections);


    useEffect(() => {
        const informationsIsArray = Array.isArray(countySelected);  
        setInfosCounty(informationsIsArray ? [...countySelected] : [countySelected]);


      }, [countySelected]);

    return (
        <div>
            <div>
                {infosCounty.map((index, position) => (
                    <p key={position}>
                        {index['regiao-imediata'].id}
                    </p>
                ))}
            </div>
        </div>
    );
}