import { useContext } from "react"
import { Link } from "react-router-dom"

import AuthContext from "../../../context/auth-context"

import Button from "../Button/Button"

import styles from "./NavBar.module.css"

export default function NavBar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  const handleLogin = (bool) => setIsLoggedIn(bool)

  const logInButton = (
    <Button onClick={() => handleLogin(false)} label="login" color="yellow" />
  )
  const logOutButton = (
    <Button onClick={() => handleLogin(true)} label="logout" color="blue" />
  )

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

        {isLoggedIn ? <div>Sign In</div> : <div>Sign Out</div>}
        {isLoggedIn ? logInButton : logOutButton}
      </nav>
    </div>
  )
}
