import { useState, useContext } from "react"

import AuthContext from "../../context/auth-context"

import { Button, Input, Card } from "../../components/UI"

export default function AuthPage() {
  const [username, setUsername] = useState("hi!")
  const [password, setPassword] = useState("")

  const ctx = useContext(AuthContext)

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
        <Button label="login" color="blue" />
      </Card>
    </div>
  )
}
