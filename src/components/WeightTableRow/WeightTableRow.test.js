import { render, screen } from "@testing-library/react"
import WeightTableRow from "./WeightTableRow"

test("WeightTableRow renders properly", () => {
  render(<WeightTableRow date="2022-08-04" id={3} userId={6} weight={18.7} />)

  expect(screen.getByText(/2022-08-04/i)).toBeInTheDocument()
  expect(screen.getByText(/3/i)).toBeInTheDocument()
  expect(screen.getByText(/6/i)).toBeInTheDocument()
  expect(screen.getByText(/18.7/i)).toBeInTheDocument()
})
