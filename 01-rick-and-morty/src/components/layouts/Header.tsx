import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function Header() {
  return (
    <>
      <Grid container>
        <Grid
          xs={12}
          sm={8}
          smOffset={2}
          md={6}
          mdOffset={3}
          lg={4}
          lgOffset={4}
        >
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png?20220319060844"
            width="100%"
          />
        </Grid>
      </Grid>
      <Box textAlign="center" mb={5} component="div">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "aqua" : "white",
              textDecoration: "none",
              marginRight: "20px",
            };
          }}
        >
          ALL
        </NavLink>

        <NavLink
          to="/favorites"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "aqua" : "white",
              textDecoration: "none",
            };
          }}
        >
          FAVORITES
        </NavLink>
      </Box>
    </>
  );
}

export default Header;
