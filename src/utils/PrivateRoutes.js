import { Outlet, Navigate } from "react-router-dom"

// video explainer
// https://www.youtube.com/watch?v=2k8NleFjG7I

const PrivateRoutes = () => {
  // replace "auth" with context api check
  let auth = false

  return auth ? <Outlet /> : <Navigate to="/auth" />
}

export default PrivateRoutes
