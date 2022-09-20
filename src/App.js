import "./App.css"

import HomePage from "./pages/home/HomePage"
import AuthPage from "./pages/auth/AuthPage"

function App() {
  return (
    <div className="App">
      <h1>Weight Tracker App!</h1>
      <HomePage />
      <AuthPage />
    </div>
  )
}

export default App
