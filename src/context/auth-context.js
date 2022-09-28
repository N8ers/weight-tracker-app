import { createContext } from "react"

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (bool) => {},
})

export default AuthContext
