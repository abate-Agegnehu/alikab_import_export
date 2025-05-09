import React from "react";
import { Box, Grid, Typography, Stack, IconButton } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo4 from "../../assets/logoUpdated.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAgroChemicalsRoute = location.pathname === "/agro-chemicals";

  return (
    <Box
      sx={{
        backgroundColor: isAgroChemicalsRoute ? "#15803D" : "#1c2551",
        color: "lightgray",
        py: 6,
        px: { xs: 4, md: 10 },
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Grid
        container
        spacing={8}
        sx={{
          lineHeight: 1.8,
          fontFamily: "Arial",
        }}
      >
        {/* Contact Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Box mb={2} sx={{ width: 250, marginTop: "-20px" }}>
            <img src={logo4} alt="Tamrin Logo" style={{ width: "100%" }} />
          </Box>
          <Stack direction="row" spacing={1} alignItems="flex-start" mb={2}>
            <RoomIcon sx={{ color: "#FA812F", mt: 0.5 }} />
            <Typography variant="body2">Addis Ababa</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="flex-start" mb={1}>
            <PhoneIphoneIcon sx={{ color: "#FA812F", mt: 0.5 }} />
            <Typography variant="body2">+251 911 60 44 44 </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="flex-start" mb={2}>
            <RoomIcon sx={{ color: "#FA812F", mt: 0.5 }} />
            <Typography variant="body2">Bahir Dar</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="flex-start" mb={1}>
            <PhoneIphoneIcon sx={{ color: "#FA812F", mt: 0.5 }} />
            <Typography variant="body2">+251 911 23 54 68 </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="flex-start">
            <EmailIcon sx={{ color: "#FA812F", mt: 0.5 }} />
            <Typography variant="body2">alikab@gmail.com</Typography>
          </Stack>
        </Grid>

        {/* Explore Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h6"
            sx={{
              borderBottom: "2px solid #FA812F",
              display: "inline-block",
              mb: 2,
              fontWeight: "bold",
              fontSize: "1.5em",
              color: "white",
            }}
          >
            Explore
          </Typography>
          <Stack spacing={1}>
            <Box
              component={Link}
              to="/"
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#FA812F" },
              }}
            >
              Home
            </Box>
            <Box
              component={Link}
              to="/about"
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#FA812F" },
              }}
            >
              About Us
            </Box>
            <Box
              component={Link}
              to="/vehicles"
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#FA812F" },
              }}
            >
              Vehicles
            </Box>
            <Box
              component={Link}
              to="/machinery"
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#FA812F" },
              }}
            >
              Machinery
            </Box>
            <Box
              component={Link}
              to="/export"
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#FA812F" },
              }}
            >
              Export
            </Box>
            <Box
              component={Link}
              to="/consultancy"
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#FA812F" },
              }}
            >
              Consultancy
            </Box>
          </Stack>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h6"
            sx={{
              borderBottom: "2px solid #FA812F",
              display: "inline-block",
              mb: 2,
              fontWeight: "bold",
              fontSize: "1.5em",
              color: "white",
            }}
          >
            Quick Links
          </Typography>
          <Stack spacing={1}>
            <Box
              component={Link}
              to="/contact"
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#FA812F" },
              }}
            >
              Contact Us
            </Box>
            <Box
              component={Link}
              to="/agro-chemicals"
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#FA812F" },
              }}
            >
              Agricultural Chemicals
            </Box>
            <Box
              component={Link}
              to="/transportation"
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#FA812F" },
              }}
            >
              Transportation
            </Box>
            <Box
              component={Link}
              to="/admin"
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#FA812F" },
              }}
              onClick={() => {
                navigate("/admin");
              }}
            >
              Login
            </Box>
          </Stack>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} mt={6}>
          <Box mb={2} sx={{ width: 250, marginTop: "-40px" }}>
            <Typography
              variant="h6"
              sx={{
                borderBottom: "2px solid #FA812F",
                display: "inline-block",
                mb: 2,
                marginTop: "-100px",
                fontWeight: "bold",
                fontSize: "1.5em",
                color: "white",
              }}
            >
              Social Media
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton
              href="https://www.facebook.com"
              target="_blank"
              sx={{
                color: "#FA812F",
                transition: "color 0.3s ease",
                "&:hover": { color: "#FFB22C" },
              }}
            >
              <FacebookIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              href="https://www.instagram.com"
              target="_blank"
              sx={{
                color: "#FA812F",
                transition: "color 0.3s ease",
                "&:hover": { color: "#FFB22C" },
              }}
            >
              <InstagramIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              href="https://t.me/yourchannel"
              target="_blank"
              sx={{
                color: "#FA812F",
                transition: "color 0.3s ease",
                "&:hover": { color: "#FFB22C" },
              }}
            >
              <TelegramIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              href="https://www.youtube.com"
              target="_blank"
              sx={{
                color: "#FA812F",
                transition: "color 0.3s ease",
                "&:hover": { color: "#FFB22C" },
              }}
            >
              <YouTubeIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, mb: -4, lineHeight: 1.8, textAlign: "center" }}>
        <Typography>
          Copyright © 2025{" "}
          <span style={{ color: "#FA812F", fontWeight: "bold" }}>ALIKAB</span>{" "}
          International Trading PLC. All rights reserved | Developed by:
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
