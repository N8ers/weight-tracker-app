import { useState, useContext } from "react"

import AuthContext from "../../context/auth-context"

import { Button, Input, Card } from "../../components/UI"

export default function AuthPage() {
  const [username, setUsername] = useState("hi!")
  const [password, setPassword] = useState("")

  const { setIsLoggedIn } = useContext(AuthContext)

  const attemptLogin = () => {
    if (username === "n8" && password === "123") {
      setIsLoggedIn(true)
    } else {
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
