import { BrowserRouter, Route, Routes } from "react-router-dom"
import Character from "../pages/character"
import Characters from "../pages/characters"
import Favorites from "../pages/favorites"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Favorites/>} path="/favorites"/>
        <Route element={<Character/>} path="/character/:id"/>
        <Route element={<Characters/>} path="/"/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router