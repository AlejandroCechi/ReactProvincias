import { provincias } from "../data/ciudades"


export const getCiudadesPorPais =(country)  => {
    if (country == null)
        throw new Error('el pais no puede ser nulo')

    return provincias.filter(provincia =>provincia.iso_id.includes(country));
} 