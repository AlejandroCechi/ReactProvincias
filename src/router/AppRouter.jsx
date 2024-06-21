import { Routes, Route, Navigate } from 'react-router-dom'
import { ArgPages } from '../ciudades/pages/ArgPages'
import { BraPages } from '../ciudades/pages/BraPages'
import { LoginPage } from '../auth/pages/LoginPage'
import { CiudadesRoutes } from '../ciudades/routes/CiudadesRoutes'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
  return (
    <>
      <Routes>

        {/*<Route path='login' element={<LoginPage />} />*/}
        {/* <Route path='/*' element={<CiudadesRoutes />} /> */}
        <Route path='login' element={<PublicRouter><LoginPage /> </PublicRouter>} />

        <Route path='/*' element={<PrivateRouter><CiudadesRoutes /> </PrivateRouter>} />




      </Routes>
    </>
  )
}
