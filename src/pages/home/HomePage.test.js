import { render, screen } from "@testing-library/react"
import HomePage from "./HomePage"

test("renders text", () => {
  render(<HomePage />)
  const textElement = screen.getByText(/i am the homepage/i)
  expect(textElement).toBeInTheDocument()
})
