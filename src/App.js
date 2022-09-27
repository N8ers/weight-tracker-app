import { Route, Routes } from "react-router-dom"

import AuthContext from "./context/auth-context"

import HomePage from "./pages/home/HomePage"
import AuthPage from "./pages/auth/AuthPage"

import NavBar from "./components/UI/NavBar/NavBar"

export default function App() {
  const fireThing = () => {
    console.log("fire thing")
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: false,
        onPress: fireThing,
      }}
    >
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<AuthPage />} />
      </Routes>
    </AuthContext.Provider>
  )
}
