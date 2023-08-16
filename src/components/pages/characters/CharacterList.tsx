import { useNavigate } from "react-router-dom";
import type Character from "../../../interfaces/character";
import CharacterItem from "./CharacterItem";

import Grid from "@mui/material/Unstable_Grid2";
// import Grid from '@mui/material/Grid';

interface Props {
  characters: Character[];
}

function CharacterList(props: Props): JSX.Element {
  const { characters } = props;

  const navigate = useNavigate()

  const handleClick = (id: number) => {
    navigate(`/character/${id}`)
  }

  return (
    <Grid container spacing={5}>
      {characters.map(({ name, species, status, image, id }) => {
        return (
          <CharacterItem
            key={id}
            id={id}
            onClick={handleClick}
            image={image}
            name={name}
            species={species}
            status={status}
          />
        );
      })}
    </Grid>
  );
}

export default CharacterList;
