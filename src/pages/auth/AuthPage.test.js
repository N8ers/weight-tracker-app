import { render, screen } from "@testing-library/react"
import AuthPage from "./AuthPage"

test("renders component text", () => {
  render(<AuthPage />)
  const textElement = screen.getByText(/i am authpage/i)
  expect(textElement).toBeInTheDocument()
})
