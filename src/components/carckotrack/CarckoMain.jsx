import React, { useState } from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

import suv1 from "../../assets/images/vehicles/suv1.jpg";
import suv2 from "../../assets/images/vehicles/suv2.jpg";
import suv3 from "../../assets/images/vehicles/suv3.jpg";
import suv4 from "../../assets/images/vehicles/suv4.jpg";
import suv5 from "../../assets/images/vehicles/suv5.jpg";
import suv6 from "../../assets/images/vehicles/suv6.jpg";
import cargo from "../../assets/images/vehicles/cargo.jpg";
import cargo1 from "../../assets/images/vehicles/cargo1.jpg";
import cargo2 from "../../assets/images/vehicles/cargo2.jpg";
import cargo3 from "../../assets/images/vehicles/cargo3.jpg";
import cargo4 from "../../assets/images/vehicles/cargo4.jpg";
import cargo5 from "../../assets/images/vehicles/cargo5.jpg";

// update vehicles categoriess
const vehicles = [
  { src: suv1, category: "SUV" },
  { src: suv2, category: "SUV" },
  { src: suv3, category: "SUV" },
  { src: suv4, category: "SUV" },
  { src: suv5, category: "SUV" },
  { src: suv6, category: "SUV" },
  { src: cargo, category: "Cargo" },
  { src: cargo1, category: "Cargo" },
  { src: cargo2, category: "Cargo" },
  { src: cargo3, category: "Cargo" }, // Fixed typo here (was "Cargo")
  { src: cargo4, category: "Cargo" },
  { src: cargo5, category: "Cargo" },
];

const CarckoMain = () => {
  const [selectedCategory, setSelectedCategory] = useState("Allcars");

  const filteredVehicles =
    selectedCategory === "Allcars"
      ? vehicles
      : vehicles.filter((item) => item.category === selectedCategory);

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

      <Box sx={{ textAlign: "center", backgroundColor: "#f9f9f9" }}>
        <ButtonGroup
          variant="contained"
          sx={{
            boxShadow: 1,
            border: "none",
            "& .MuiButton-root": {
              border: "none",
              outline: "none",
              boxShadow: "none",
              "&:focus": {
                outline: "none",
              },
              "&:hover": {
                boxShadow: "none",
              },
            },
          }}
        >
          {["Allcars", "SUV", "Cargo"].map((cat) => (
            <Button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              variant="contained"
              sx={{
                py: 1,
                width: "150px",
                border: "none",
                backgroundColor:
                  selectedCategory === cat ? "#1a237e" : "#ffffff",
                color: selectedCategory === cat ? "#ffffff" : "#4E4E4EB3",
                "&:hover": {
                  backgroundColor:
                    selectedCategory === cat ? "#1a237e" : "#f0f0f0",
                  color: selectedCategory === cat ? "#ffffff" : "#4E4E4EB3",
                },
              }}
            >
              {cat}
            </Button>
          ))}
        </ButtonGroup>
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
          {filteredVehicles.map((item, index) => (
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
          src={suv1}
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
