import MFHeader from "../MFHeader";
import { Box } from "@mui/material";

const MFLayout = ({ children }) => {
  return (
    <Box
      className="relative bg-cover bg-center h-64"
      sx={{
        backgroundImage: 'url("/Images/myfinder_background.jpeg")',
        height: "100vh", // or any height you prefer
        width: "100%", // full width
        overflowX: "hidden",
      }}
    >
      <MFHeader />
      <Box sx={{ paddingTop: "160px", color: "white" }}>{children}</Box>
    </Box>
  );
};

export default MFLayout;
