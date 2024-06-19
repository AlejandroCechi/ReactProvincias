import { useState } from 'react';
import { useForm} from '../../hooks/useForm'
import { ProvinceCard } from '../components/ProvinceCard';
import { getProvinceByName } from '../helpers/getProvinciesByName';

export const SearchPages = () => {
 
    const { searchText,onInputChange} = useForm({searchText: ''})
    const [provincias, setProvincias] = useState([]);


    const onHandleSubmit = (event) => {
      event.preventDefault();
      setProvincias(getProvinceByName(searchText));
    }

  return (
    <>
        <h1>Busqueda</h1>
        <hr/>
        <div className="row">

        <div className="col-5">
        <h4>Buscar</h4>
        <hr/>
        <form>
            <input type="text"
                    className="form-control"
                    name="searchText"
                    value={searchText}
                    onChange={onInputChange}>
            </input>
            <button className="btn btn-primary mt-3" onClick={onHandleSubmit}>
                Buscar
            </button>
        </form>
        </div>
        <div className="col-5">
        <h4>Resultados</h4>
        <hr/>
        { (searchText.length==0)?        <div className="alert alert-primary"> Buscar una ciudad</div>

         : (provincias.length==0)?       <div className="alert alert-danger"> no hay ciudades</div>
        : ''
        }

        {
          provincias.map(x => (<ProvinceCard key={x.id} {...x} />)) 
        }
        
           
        </div>
       </div>
    </>
  )
}
