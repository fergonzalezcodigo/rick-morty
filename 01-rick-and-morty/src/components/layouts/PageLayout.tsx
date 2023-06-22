import { Box} from "@mui/material";
import Header from "./Header";


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
      <Header/>
      {children}
    </Box>
  );
}

export default PageLayout;
