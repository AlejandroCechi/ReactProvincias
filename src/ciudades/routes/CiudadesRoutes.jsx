import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { ArgPages } from "../pages/ArgPages"
import { BraPages } from "../pages/BraPages"
import { SearchPages } from '../pages/SearchPages';
import { ProvinciaPages } from "../pages/ProvinciaPages";

export const CiudadesRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Routes>
            <Route path='arg' element ={<ArgPages/>} />
            <Route path='bra' element = { <BraPages/>} />
            <Route path='search' element = { <SearchPages/>} />
            <Route path="province/:id" element = { <ProvinciaPages/>} />
    </Routes>      
    </div>
  </>
  )
}
