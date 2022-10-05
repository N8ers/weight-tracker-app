import { render, screen } from "@testing-library/react"
import AddWeight from "./AddWeight"

test("WeightTable renders properly", () => {
  render(<AddWeight />)
  const buttonElement = screen.getByText(/add/i)
  expect(buttonElement).toBeInTheDocument()
})
