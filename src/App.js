import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import AuthContext from "./context/auth-context"

import HomePage from "./pages/home/HomePage"
import AuthPage from "./pages/auth/AuthPage"

import NavBar from "./components/UI/NavBar/NavBar"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<AuthPage />} />
      </Routes>
    </AuthContext.Provider>
  )
}
