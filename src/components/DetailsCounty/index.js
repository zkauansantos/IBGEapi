import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDetailsToCounty } from "../../services";

export const DetailsCounty = () => {

    const [infosCounty, setInfosCounty] = useState([])
    const { countySelected } = useSelector( state => state.userSelections)

    useEffect(() => {
        const fetchData = async () => {
          if(countySelected === "") return
          const informations = await getDetailsToCounty(countySelected);

          setInfosCounty([informations]);
        };
    
        fetchData();
      }, [countySelected]);

    return (
        <div>
            {infosCounty.map((index) => {
                return (
                    <div key={index}>
                        {/* <p>{index.microrregiao.nome}</p> */}
                    </div>
                );
            })}
        </div>
    );
}