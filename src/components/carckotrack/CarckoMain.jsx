import React from "react";
import { Box, Typography } from "@mui/material";
import HeroSection from "./HeroSection"; // Import the extracted Hero section

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
                width: { xs: "100%", sm: "48%", md: "30%" },
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
