import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import AuthContext from "../../context/auth-context"

import { Button, Input, Card } from "../../components/UI"

export default function AuthPage() {
  const [username, setUsername] = useState("tsuki_cat")
  const [password, setPassword] = useState("meow1")
  const navigate = useNavigate()

  const { setIsLoggedIn, setUser } = useContext(AuthContext)

  const attemptLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const responseBody = await response.json()
      setIsLoggedIn(true)
      setUser(responseBody)
      navigate("/")
    } catch (error) {
      console.log("error: ", error)
      alert("NO ENTRY: auth failed.")
    }
  }

  return (
    <div>
      <h1>I am AuthPage</h1>

      <Card borderRadius={"5px"}>
        <Input
          label="username"
          placeholder="tsuki_cat"
          type="text"
          value={username}
          updateValue={(newValue) => setUsername(newValue)}
        />
        <Input
          label="password"
          placeholder="meow"
          type="password"
          value={password}
          updateValue={(newValue) => setPassword(newValue)}
        />
        <Button label="login" color="blue" onClick={attemptLogin} />
      </Card>
    </div>
  )
}
