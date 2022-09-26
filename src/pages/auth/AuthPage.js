import { Button, Input, Card } from "../../components/UI"

export default function AuthPage() {
  return (
    <div>
      <h1>I am AuthPage</h1>

      <Card borderRadius={"5px"}>
        <Input label="username" placeholder="tsuki_cat" type="text" />
        <Input label="password" placeholder="meow" type="password" />
        <Button label="login" color="blue" />
      </Card>
    </div>
  )
}
