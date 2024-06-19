import { Link } from "react-router-dom";
import { getCiudadesPorPais } from "../helpers/getCiudades";
import { ProvinceCard } from "./ProvinceCard";


export const CiudadList = ({country}) => {

    const ciudades =getCiudadesPorPais(country);
   
    return (
      <>
          <div className="row rows-cols-1 row-cols-md-3 g-3">
             { ciudades.map(province => (
                      <  ProvinceCard key={province.id} 
                                      {...province}
                       />             
              ))}
          </div>
      </>   
    )
}
