import { useContext } from "react"
import { Link } from "react-router-dom"

import AuthContext from "../../../context/auth-context"

import styles from "./NavBar.module.css"

export default function NavBar() {
  const ctx = useContext(AuthContext)

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

        <button className={styles.loginLogoutBtn}>hi</button>

        {ctx.isLoggedIn ? <div>login</div> : <div>log out</div>}
      </nav>
    </div>
  )
}
