import React from "react";
import { Box, Typography } from "@mui/material";
import HeroSection from "./HeroSection";

import cargo from "../../assets/images/cargo.jpg";
import suv from "../../assets/images/suv.jpg";
import suv2 from "../../assets/images/suv2.jpg";
import track from "../../assets/images/track.jpg";
import track1 from "../../assets/images/track1.jpg";
import track2 from "../../assets/images/track2.jpg";
import vehicle from "../../assets/images/vehicle.jpg";
import suvinterior from "../../assets/images/suvinterior.jpg";

const teams = [
  { src: suv },
  { src: suv2 },
  { src: track2 },
  { src: vehicle },
  { src: track },
  { src: track1 },
];

const CarckoMain = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 6 },
          py: { md: 8 },
          backgroundColor: "#f9f9f9",
          gap: { xs: 4, md: 6 },
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
              width: 80,
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
          alt="Cargo Vehicle"
          sx={{
            width: { xs: "100%", sm: "80%", md: "350px" },
            maxWidth: "100%",
            borderRadius: "50%",
          }}
        />
      </Box>

      {/* Team Vehicles Section */}
      <Box
        sx={{
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 8 },
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
                width: { xs: "100%", sm: "48%", md: "30%" },
                height: 250,
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                component="img"
                src={item.src}
                alt={`Vehicle ${index}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Proven Track Record Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 8 },
          backgroundColor: "#f9f9f9",
          gap: { xs: 4, md: 6 },
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
              width: 80,
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
          alt="SUV Interior"
          sx={{
            width: { xs: "100%", sm: "80%", md: "350px" },
            maxWidth: "100%",
            borderRadius: "50%",
          }}
        />
      </Box>
    </Box>
  );
};

export default CarckoMain;
