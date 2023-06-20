import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

export default function Favorites(){
  const {favorites} = useContext(FavoritesContext)
  console.log(favorites)
  return(
    <h1>Hola favorites</h1>
  )
}