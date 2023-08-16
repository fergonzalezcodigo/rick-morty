import type Character from "../../../interfaces/character";
// import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { colors } from "../../../constants/themes";

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

interface Props extends Character{
  onClick: (id:number) => void
}

function CharacterItem({
  image,
  name,
  species,
  status,
}: Props): JSX.Element {
  // const navigate = useNavigate();

  return (
    <Grid xs={12} md={6} lg={3}>
      <Box
        sx={{
          display: "flex",
          border: `1px solid ${colors.primary}`,
          cursor: "pointer",
          transition: "0.2s",
          backgroundColor: "rgba(50,50,50, 0.1)",
          "&:hover": {
            transform: "scale(1.05)",
            border: `1px solid ${colors.secondary}`,
          },
        }}
        // onClick={() => {
        //   navigate(`/character/${id}`);
        // }}
      >
        <Grid xs={6}>
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Tooltip title={name} placement="top">
              <Typography
                textAlign="center"
                sx={{
                  color: "white",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  maxWidth: "100px",
                  fontSize: "13px",
                }}
              >
                {name}
              </Typography>
            </Tooltip>
            <Chip color={chipColors[status]} label={status} sx={{margin: "10px"}}/>
            <Tooltip title={species} placement="top">
              <Typography
                textAlign="center"
                sx={{
                  color: "white",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  maxWidth: "100px",
                  fontSize: "13px",
                }}
              >
                {species}
              </Typography>
            </Tooltip>
          </Box>
        </Grid>

        <Grid xs={6} p={0}>
          <Box
            component="img"
            src={image}
            sx={{ width: "100%", height: "100%" }}
          ></Box>
        </Grid>
      </Box>
    </Grid>
  );
}

export default CharacterItem;
