import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getProvinceByID } from "../helpers/getProvinceByID";
import { useMemo } from "react";

export const ProvinciaPages = () => {
  
  
  const params = useParams();
  const province = useMemo( () => getProvinceByID(params.id), [params.id]);
  const navigate = useNavigate();

  const onNavigateBack= () =>{
    navigate(-1);
  }

  if (province.length ==0) 
  {
    return <Navigate to="/arg"></Navigate>
     
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/${province.id}.jpg`} alt={ province.id} />
      </div>
      <div className="col-8">
      <h3>{ province.nombre } </h3> 
        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item"> <b>Pais:</b> {province.pais}</li>
          <li className="list-group-item"> <b>Poblacion:</b> {province.poblacion}</li> */}
        </ul>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
          </button>
      </div>
    </div>
  )
}
