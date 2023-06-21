import { useContext } from "react";
import { Container } from "@mui/material";
import { FavoritesContext } from "../context/FavoritesContext";
import CharacterList from "../components/pages/characters/CharacterList";
import PageLayout from "../components/layouts/PageLayout";

function Favorites() {

  const {favorites} = useContext(FavoritesContext)
  
  return (
    <PageLayout>
      <Container>
        <CharacterList characters={favorites} />
      </Container>
    </PageLayout>
  );
}

export default Favorites
