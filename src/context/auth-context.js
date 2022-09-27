import { createContext } from "react"

const AuthContext = createContext({
  isLoggedIn: false,
})

export default AuthContext

// context has 2 parts
// provide it - all components wrapped by it should have access
// consume it - hook into/listen to it
