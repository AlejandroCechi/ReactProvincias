import { Routes, Route, Navigate } from 'react-router-dom'
import { ArgPages } from '../ciudades/pages/ArgPages'
import { BraPages } from '../ciudades/pages/BraPages'
import { LoginPage } from '../auth/pages/LoginPage'
import { CiudadesRoutes } from '../ciudades/routes/CiudadesRoutes'
import { PrivateRouter } from './PrivateRouter'

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path='login' element={<LoginPage />} />
        {/* <Route path='/*' element={<CiudadesRoutes />} /> */}
        <Route path='/*' element={<PrivateRouter><CiudadesRoutes /> </PrivateRouter>} />




      </Routes>
    </>
  )
}
