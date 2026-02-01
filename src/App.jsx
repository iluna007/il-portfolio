import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <HashRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App
