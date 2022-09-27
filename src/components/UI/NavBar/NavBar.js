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
        <div className={styles.grid}>
          <div className={styles.title}>Weight Tracker</div>
          <div>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/auth">
              Auth
            </Link>
          </div>
          <div>{isLoggedIn ? logInButton : logOutButton}</div>
        </div>
      </nav>
    </div>
  )
}
