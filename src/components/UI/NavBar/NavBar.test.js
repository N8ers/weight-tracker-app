import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import NavBar from "./NavBar"

test("NavBar renders", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar />
    </MemoryRouter>
  )
  expect(screen.getByText(/weight tracker/i)).toBeInTheDocument()
})
