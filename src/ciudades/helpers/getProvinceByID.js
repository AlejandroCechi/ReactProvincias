import { provincias } from "../data/ciudades"

export const getProvinceByID =(id)  => {
    return provincias.find(provincia =>provincia.id ==id);
} 