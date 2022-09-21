import { Link, Route, Routes } from "react-router-dom"

import HomePage from "./pages/home/HomePage"
import AuthPage from "./pages/auth/AuthPage"

export default function App() {
  return (
    <>
      <nav>
        <h1>Weight Tracker App!</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/auth">Auth</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<AuthPage />} />
      </Routes>
    </>
  )
}
