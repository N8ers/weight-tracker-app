import { render, screen } from "@testing-library/react"
import Input from "./Input"

test("Button renders with just label", () => {
  render(<Input label="cat name" placeholder="tsuki" />)
  const textElement = screen.getByText(/cat name/i)
  expect(textElement).toBeInTheDocument()
})
