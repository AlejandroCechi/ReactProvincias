import { provincias } from "../data/ciudades";

export const getProvinceByName= (searchText='') => {
    if (searchText.length==0)
        return [];

        return provincias.filter(x => x.nombre.toLowerCase().includes(searchText.toLowerCase()));
}