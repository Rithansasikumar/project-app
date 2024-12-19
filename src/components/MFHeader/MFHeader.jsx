import { Box, Button, Menu, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const routes = [
  {
    name: "List & Sell",
    path: "/",
  },
  {
    name: "My Community",
    path: "/community",
  },
  {
    name: "Influencer",
    path: "/",
  },
  {
    name: "Attractions",
    path: "/attractions",
  },
  {
    name: "How It Works?",
    path: "/",
    icon: "/Images/Play_Button.svg",
  },
];

const menudata = [
  {
    name: "Boost Your Business",
  },
  {
    name: "Groups",
  },
  {
    name: "Suggested Groups",
  },
  {
    name: "Recommendation",
  },
  {
    name: "Categories",
  },
  {
    name: "Trending",
  },
];

const MFHeader = () => {
  const navigate = useNavigate();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        padding: {
          xs: 4,
          md: 6,
        },
      }}
      bgcolor={"#10035d"}
      className="fixed top-0 left-0 right-0 z-50 border-b-2 border-[#7670FF]"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          onClick={toggleMenu}
          sx={{
            display: { xs: "flex", md: "none" },
            background: "linear-gradient(22.74deg, #F800C0 0%, #FE8A70 82.88%)",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <img
            src="/Images/Vector(2).png"
            alt=""
            className="h-[18px] w-[18px]"
          />
        </Box>

        <img src="/Images/Logo.svg" className="h-8 md:h-14" alt="Logo" />

        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
            padding: "11px 26px",
            border: "1px solid #7670FF",
            borderRadius: "50px",
            backdropFilter: "blur(10px)",
            backgroundColor: "#0d004445",
          }}
        >
          {routes.map((route) => (
            <Link
              key={route.name}
              to={route.path}
              className="text-white mx-2 no-underline border-b-2  border-transparent hover:border-b-2 hover:border-indigo-500"
              style={{
                color: "white",
                margin: "0 8px",
                textDecoration: "none",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {route?.icon && (
                  <img src={route.icon} alt={`${route.name} icon`} />
                )}
                {route.name}
              </Box>
            </Link>
          ))}
        </Box>

        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            alignItems: "center",
            gap: "0px",
            border: "1px solid #7670FF",
            borderRadius: "50px",
          }}
        >
          <Button
            sx={{ color: "white" }}
            variant="contained"
            size="medium"
            style={{
              background: "linear-gradient(0, #7670FF 0%, #5B42FF 100%)",
              boxShadow: "0 4px 15px rgba(248, 0, 192, 0.3)",
              padding: "18px 26px",
              borderRadius: "50px",
            }}
            onClick={() => navigate("/registation")}
          >
            Sign In
          </Button>
          <Button
            sx={{ color: "white" }}
            variant="contained"
            size="medium"
            style={{
              background: "transparent",
              padding: "18px 26px",
              borderRadius: "50px",
            }}
            onClick={() => navigate("/registation")}
          >
            Sign Up
          </Button>
        </Box>

        <Box
          sx={{
            display: { lg: "none", xs: "block" },
          }}
        >
          <button className="text-white p-2">
            <img src="/Images/Group1000008760.png" alt="icon" />
          </button>
        </Box>
      </Box>

      {open && (
        <Box
          onClick={toggleMenu}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(1px)",
            zIndex: 9,
          }}
        />
      )}

      {open && (
        <Box
          sx={{
            position: "absolute",
            top: "85px",
            left: "30px",
            background: "white",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            padding: "16px",
            paddingX: "26px",
            zIndex: 10,
          }}
        >
          {menudata?.map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: "20px",
                padding: "8px 0",
                color: "#333",
                cursor: "pointer",
                "&:hover": { color: "#F800C0" },
              }}
            >
              {item?.name}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MFHeader;
