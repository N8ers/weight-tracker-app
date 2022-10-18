import { createContext } from "react"

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (bool) => {},
  user: {},
  setUser: (data) => {},
})

export default AuthContext
