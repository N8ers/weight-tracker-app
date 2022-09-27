import { useContext } from "react"
import { Link } from "react-router-dom"

import AuthContext from "../../../context/auth-context"

import styles from "./NavBar.module.css"

export default function NavBar() {
  const { authenticated, setAuthenticated } = useContext(AuthContext)

  const handleLogin = () => setAuthenticated(true)
  const handleLogout = () => setAuthenticated(false)

  return (
    <div className={styles.wrapper}>
      <nav>
        <h1>Weight Tracker</h1>

        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/auth">
          Auth
        </Link>

        {authenticated ? <div>logged in</div> : <div>logged out</div>}

        <button onClick={handleLogin}>login</button>
        <button onClick={handleLogout}>logout</button>
      </nav>
    </div>
  )
}
