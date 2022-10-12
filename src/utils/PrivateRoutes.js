import { Outlet, Navigate } from "react-router-dom"
import { useContext } from "react"

import AuthContext from "../context/auth-context"

const PrivateRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext)

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" />
}

export default PrivateRoutes
