// src/components/Contact/ContactHero.jsx

import React from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import contact from "../../assets/images/contact.jpg";

const ContactHero = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        height: 500,
        backgroundImage: `url(${contact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Contact Us
        </Typography>
        <KeyboardArrowDownIcon
          fontSize="large"
          sx={{
            mt: 2,
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-10px)" },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactHero;
