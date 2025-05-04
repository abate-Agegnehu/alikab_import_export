// src/components/HeroSection.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Background images
import cargo from "../../assets/images/cargo.jpg";
import suv from "../../assets/images/suv.jpg";
import suv2 from "../../assets/images/suv2.jpg";
import track from "../../assets/images/track.jpg";
import track1 from "../../assets/images/track1.jpg";
import track2 from "../../assets/images/track2.jpg";

const backgroundImages = [cargo, suv, suv2, track, track1, track2];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % backgroundImages.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? backgroundImages.length - 1 : prev - 1));
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "40vh", sm: "70vh", md: "100vh" },
        backgroundImage: `url(${backgroundImages[current]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 0,
        }}
      />

      {/* Text */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
          maxWidth: "90vw",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
          }}
        >
          Alikab Automotive Assembly
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
            mt: 1,
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          From electric and hybrid cars to powerful Carco trucks, fuel carriers,
          and versatile SUVs — drive your needs with innovation and strength.
        </Typography>
        <KeyboardArrowDownIcon
          fontSize="large"
          sx={{
            mt: 3,
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-10px)" },
            },
          }}
        />
      </Box>

      {/* Arrows */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.6)",
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.6)",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default HeroSection;
