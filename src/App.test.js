import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import App from "./App"

test("renders text", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  )

  expect(screen.getByText(/weight tracker/i)).toBeInTheDocument()
  expect(screen.getByText(/i am the homepage/i)).toBeInTheDocument()
})
