import { render, screen } from "@testing-library/react"
import WeightTable from "./WeightTable"

test("WeightTable renders properly", () => {
  render(<WeightTable />)
  const headerElement = screen.getByText(/i am the weighttable/i)
  expect(headerElement).toBeInTheDocument()
})
