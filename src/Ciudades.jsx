import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"

export const Ciudades = () => {
  return (
    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
  )
}
