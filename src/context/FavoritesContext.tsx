import { createContext, useEffect, useState } from "react";
import Character from "../interfaces/character";

interface FavoritesContextProps {  //Tipar
  favorites: Character[];
  addFavorite: (character: Character) => void;
  deleteFavorite: (idCharacter: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps>({ //Inicializar
  favorites: [],
  addFavorite: () => {},
  deleteFavorite: () => {},
});
const favoritesLS = JSON.parse(localStorage.getItem('favorites') || '[]')

export function FavoritesProvider({children}:React.PropsWithChildren){

  const [favorites, setFavorites] = useState<Character[]>(favoritesLS)

  const addFavorite = (character:Character) => {
    setFavorites([...favorites, character])
  }
  const deleteFavorite = (idCharacter: number) => {
    setFavorites(favorites.filter(character => character.id !== idCharacter))
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  },[favorites])

  return(
    <FavoritesContext.Provider value={{favorites, addFavorite, deleteFavorite}}>
      {children}
    </FavoritesContext.Provider>
  )
}