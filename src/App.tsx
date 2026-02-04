import { Route, Routes } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import SearchCity from "./pages/SearchCity"
import Home from "./pages/Home"
import Global from "./pages/Global"

function App() {

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchCity />} />
        <Route path="/global" element={<Global />} />
      </Routes>
    </AppLayout>
      
  )
}

export default App
