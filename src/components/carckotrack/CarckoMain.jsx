import React from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
    <Box sx={{ marginBottom: { md: "400px" } }}>
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "40vh", sm: "70vh", md: "100vh" },
          position: "relative",
          backgroundImage: `url(${cargo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#000", // fallback color
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2, // horizontal padding for small screens
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
      </Box>

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
            and pickups. Carcko Car began its collaboration with JAC Motors
            after acquiring the former Holland Cars Assembly, initially focusing
            on the assembly and distribution of the JAC J3 and JAC J4 models.
            Currently, Carcko Car is assembling the JAC T8 pickup, continuing
            its commitment to delivering reliable and robust vehicles to the
            market.
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
                alt={item.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.3s ease",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
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
            commercial segments. Our success is built on trust, quality, and a
            commitment to innovation — earning the confidence of customers and
            partners alike. From efficient electric cars to rugged trucks, we
            stand behind every vehicle with a legacy of performance and
            excellence.
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
