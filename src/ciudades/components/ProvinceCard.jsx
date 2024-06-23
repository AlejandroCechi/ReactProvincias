import { Link } from "react-router-dom";

const ProvinceName = (name, complete) => {
    if (complete == name)
        return <>  </>;
    return  <>{name} </>
}

const ProvinceNames = ({name, complete}) => {
    if (complete == name)
        return <>  </>;
    return <p> {name} </p>
}


export const ProvinceCard = ({id,
    nombre,
    nombre_completo,
    fuente,
    categoria,
    centroide,
    iso_id,
    iso_nombre}) => {
        
    return  (
    <div className="card">
    <div className="row no-gutters">
        <div className="col-4">
            <img className="card-img full-size-img" src={`/src/assets/city/${id.toLowerCase()}.jpg`} alt={nombre}></img>

       </div>
       <div className="col-8">
        <div className="card-body">
            <h5>{nombre} </h5>
            <p className="card-text"> { (nombre != nombre_completo) && nombre_completo}</p>
            <p className="card-text"> { ProvinceName(nombre, nombre_completo) }</p>
            <ProvinceNames name={nombre} complete={nombre_completo}/>

            <p className="card-text">
                <small className="text-muted">{JSON.stringify(centroide)}</small>
            </p>
            <Link to={`/province/${id}`}>
                Mas..
            </Link>
        </div>
       </div>
    </div>
</div> )}  
