import { render, screen } from "@testing-library/react"
import Button from "./Button"

test("Button renders with just label", () => {
  render(<Button label="hi there" color="pink" />)
  const textElement = screen.getByText(/hi there/i)
  expect(textElement).toBeInTheDocument()
})
