import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import App from "./App"

test("renders text", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  )
  const navElement = screen.getByText(/weight tracker/i)
  expect(navElement).toBeInTheDocument()

  const bodyElement = screen.getByText(/i am the homepage/i)
  expect(bodyElement).toBeInTheDocument()
})
