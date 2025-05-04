import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HeroCarousel = ({ categories }) => {
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const slideInterval = 5000;

  const handleNext = () => {
    setAutoSlide(false);
    setCurrent((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
    setTimeout(() => setAutoSlide(true), slideInterval * 2);
  };

  const handlePrev = () => {
    setAutoSlide(false);
    setCurrent((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
    setTimeout(() => setAutoSlide(true), slideInterval * 2);
  };

  useEffect(() => {
    let timer;
    if (autoSlide) {
      timer = setInterval(() => {
        setCurrent((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
      }, slideInterval);
    }
    return () => clearInterval(timer);
  }, [autoSlide]);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "90vh",
        position: "relative",
        backgroundImage: `url(${categories[current].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          {categories[current].title}
        </Typography>
        <Typography mt={1}>{categories[current].description}</Typography>
        <KeyboardArrowDownIcon fontSize="large" sx={{ mt: 3 }} />
      </Box>
      <IconButton
        onClick={handlePrev}
        sx={{ position: "absolute", left: 16, top: "50%", color: "white" }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{ position: "absolute", right: 16, top: "50%", color: "white" }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default HeroCarousel;
