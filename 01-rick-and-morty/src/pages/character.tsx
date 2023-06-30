import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";
import Loader from "../components/shared/Loader";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Unstable_Grid2";
// import Grid from '@mui/material/Grid';
import { colors } from "../constants/themes";
import Character from "../interfaces/character";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { FavoritesContext } from "../context/FavoritesContext";
import { useContext } from "react";
import Header from "../components/layouts/Header";

type Colors = {
  Alive: "success" | "error" | "warning" | "default" | "primary";
  Dead: "success" | "error" | "warning" | "default" | "primary";
  unknown: "success" | "error" | "warning" | "default" | "primary";
};

const chipColors: Colors = {
  Alive: "success",
  Dead: "error",
  unknown: "warning",
};

type Data = Character & { episodes: string[] };

function CharacterDetail() {
  const { favorites, addFavorite, deleteFavorite } =
    useContext(FavoritesContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<Data>({
    id: 0,
    name: "",
    species: "",
    status: "unknown",
    image: "",
    episodes: [],
  });
  const [episodes, setEpisodes] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    const newIsFavorite =
      favorites.findIndex((favorite) => favorite.id == Number(id)) !== -1;
    setIsFavorite(newIsFavorite);
  }, [favorites, id]);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const getCharacter = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const { error, name, species, status, image, episode, id } =
          await response.json();
        if (error) {
          setError(error);
          setLoading(false);
          return;
        }
        setData({ name, species, status, image, episodes: episode, id });
      } catch (error) {
        setError("Ha ocurrido un error en la aplicación");
      }
      setLoading(false);
    };
    getCharacter();
  }, [id]);

  useEffect(() => {
    if (data.episodes.length) {
      Promise.all(
        data.episodes.map((episode) =>
          fetch(episode)
            .then((response) => response.json())
            .then((obj) => `${obj.episode}: ${obj.name}`)
        )
      ).then((episodesList) => {
        setEpisodes(episodesList);
      });
    }
  }, [data]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <>
        <Box
          height="100vh"
          sx={{
            backgroundImage:
              "url('https://i.pinimg.com/originals/4e/a7/fb/4ea7fb833c63a4ea0b0fb696c5919dd7.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Header />
          <Typography
            component="h1"
            variant="h1"
            color="primary"
            textAlign="center"
          >
            {error}
          </Typography>
        </Box>
      </>
    );
  }
  return (
    <PageLayout>
      <Grid container>
        <Grid
          xs={8}
          xsOffset={2}
          sm={6}
          smOffset={3}
          md={4}
          mdOffset={4}
          lg={2}
          lgOffset={5}
        >
          <Box
            component="img"
            src={data.image}
            width="100%"
            sx={{
              borderRadius: ".25rem",
              border: `${colors.primary} 1px solid`,
            }}
          />
        </Grid>
        <Grid
          xs={12}
          sm={10}
          smOffset={1}
          md={6}
          mdOffset={3}
          lg={4}
          lgOffset={4}
        >
          <Box
            p={4}
            m={4}
            component="div"
            sx={{
              border: "1px solid aqua",
              borderRadius: ".25rem",
              backgroundColor: "rgba(50,50,50, 0.1)",
            }}
          >
            <Box textAlign="center">
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  overflowWrap: "break-word",
                }}
              >
                {data.name}
              </Typography>
            </Box>
            <Box textAlign="center">
              {isFavorite ? (
                <StarIcon
                  color="warning"
                  onClick={() => {
                    deleteFavorite(Number(id));
                  }}
                  sx={{ fontSize: 40 }}
                />
              ) : (
                <StarBorderIcon
                  onClick={() => {
                    addFavorite(data);
                  }}
                  sx={{ fontSize: 40 }}
                />
              )}
            </Box>
            <Box display="flex" justifyContent="space-evenly">
              <Typography textAlign="center">{data.species}</Typography>
              <Chip color={chipColors[data.status]} label={data.status} />
            </Box>

            <Typography>Episodes: </Typography>
            {!!episodes.length && (
              <ul>
                {episodes.map((episode) => (
                  <li key={episode}>{episode}</li>
                ))}
              </ul>
            )}
          </Box>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export default CharacterDetail;
