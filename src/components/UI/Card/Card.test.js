import { render, screen } from "@testing-library/react"
import Card from "./Card"

test("Button renders child component", () => {
  render(
    <Card>
      <div>I am child!</div>
    </Card>
  )
  const textElement = screen.getByText(/i am child!/i)
  expect(textElement).toBeInTheDocument()
})
