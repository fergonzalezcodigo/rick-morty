import { useContext } from "react";
import { Box, Container, Typography } from "@mui/material";
import { FavoritesContext } from "../context/FavoritesContext";
import CharacterList from "../components/pages/characters/CharacterList";
import PageLayout from "../components/layouts/PageLayout";

function Favorites() {
  
  const { favorites } = useContext(FavoritesContext);

  return (
    <PageLayout>
      <Container>
        {!favorites.length ? (
          <Box textAlign="center" mt={10}>
            <Box
              component="img"
              src="https://styles.redditmedia.com/t5_ez43v/styles/profileIcon_qge3m8hyrub21.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=021d82ccee894f2f3d11dd20a6e4fbabea581cef"
            />
            <Typography color="primary" variant="h4">
              I'm Doofus Rick, I wanna be your first favorite
            </Typography>
          </Box>
        ) : (
          <CharacterList characters={favorites}></CharacterList>
        )}
      </Container>
    </PageLayout>
  );
}

export default Favorites;
