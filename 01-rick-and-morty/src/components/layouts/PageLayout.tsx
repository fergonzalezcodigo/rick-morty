import { Box} from "@mui/material";
import { NavLink } from "react-router-dom";

function PageLayout({ children }: React.PropsWithChildren) {
  return (
    <Box
      sx={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Box component="header" textAlign="center" p={4}>
        <img
          width="30%"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png?20220319060844"
          alt="Logotipo"
        />
      </Box>
      <Box textAlign="center" mb={5} component="div">
      <NavLink
          to="/"
          style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "aqua" : "white",
              textDecoration: "none",
              marginRight: "20px"
            };
          }}
        >
          ALL
        </NavLink>
        
        <NavLink
          to="/favorites"
          style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "aqua" : "white",
              textDecoration: "none"
            };
          }}
        >
          FAVORITES
        </NavLink>


      </Box>
      {children}
    </Box>
  );
}

export default PageLayout;
