import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import cargo from "../../assets/images/cargo.jpg";
import suv from "../../assets/images/suv.jpg";
import suv2 from "../../assets/images/suv2.jpg";
import track from "../../assets/images/track.jpg";
import track1 from "../../assets/images/track1.jpg";
import track2 from "../../assets/images/track2.jpg";
import vehicle from "../../assets/images/vehicle.jpg";
import suvinterior from "../../assets/images/suvinterior.jpg";

const backgroundImages = [cargo, suv, suv2, track, track1, track2];

const teams = [
  { src: suv },
  { src: suv2 },
  { src: track2 },
  { src: vehicle },
  { src: track },
  { src: track1 },
];

const CarckoMain = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
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
    <Box sx={{ marginBottom: { md: "400px" } }}>
      {/* Hero Section */}
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

        {/* Text and Icon */}
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
            From electric and hybrid cars to powerful Carco trucks, fuel
            carriers, and versatile SUVs — drive your needs with innovation and
            strength.
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

        {/* Navigation Icons */}
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

      {/* Section 2 - Vehicle Description */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          py: 6,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Box sx={{ flex: 1, maxWidth: 600 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#1a237e" }}
          >
            Alikab Vehicles
          </Typography>
          <Box
            sx={{
              width: "30%",
              height: "6px",
              backgroundColor: "#ff5722",
              mt: 1,
              mb: 2,
            }}
          />
          <Typography sx={{ color: "#666", lineHeight: 1.8 }}>
            Carcko Car, in partnership with JAC Motors—a leading Chinese
            automobile and commercial vehicle manufacturer based in Hefei, Anhui
            Province—brings a diverse lineup of vehicles to the market,
            including sedans, SUVs, MPVs, light- and heavy-duty trucks, vans,
            and pickups...
          </Typography>
        </Box>
        <Box
          component="img"
          src={cargo}
          alt="Car Interior"
          sx={{
            width: { xs: "90%", md: "350px" },
            borderRadius: "50%",
            ml: { md: 4 },
            mt: { xs: 4, md: 0 },
          }}
        />
      </Box>

      {/* Section 3 - Team Vehicles */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          py: 6,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {teams.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "48%", md: 400 },
                height: 350,
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.src}
                alt={`Vehicle ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  transition: "0.3s ease",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Section 4 - Proven Track Record */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          py: 6,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Box sx={{ flex: 1, maxWidth: 600 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#1a237e" }}
          >
            Proven Track Record
          </Typography>
          <Box
            sx={{
              width: "30%",
              height: "6px",
              backgroundColor: "#ff5722",
              mt: 1,
              mb: 2,
            }}
          />
          <Typography sx={{ color: "#666", lineHeight: 1.8 }}>
            With years of industry experience, Alikab has consistently delivered
            reliable vehicles and unmatched service across electric, hybrid, and
            commercial segments...
          </Typography>
        </Box>
        <Box
          component="img"
          src={suvinterior}
          alt="Car Interior"
          sx={{
            width: { xs: "90%", md: "350px" },
            borderRadius: "50%",
            ml: { md: 4 },
            mt: { xs: 4, md: 0 },
          }}
        />
      </Box>
    </Box>
  );
};

export default CarckoMain;
