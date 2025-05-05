import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

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
      component={motion.div}
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
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
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 0,
        }}
      />

      {/* Animated Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
          maxWidth: "90vw",
          marginTop: "100px",
        }}
      >
        <motion.h1
          variants={itemVariants}
          style={{
            fontWeight: "bold",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          Alikab Automotive Assembly
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
            marginTop: "1rem",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          From electric and hybrid cars to powerful Carco trucks, fuel carriers,
          and versatile SUVs — drive your needs with innovation and strength.
        </motion.p>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ marginTop: "2rem" }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </motion.div>
      </motion.div>

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
