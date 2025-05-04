import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Stack, Link, IconButton } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo4 from "../../assets/images/logo4.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1c2551",
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
        <Grid item xs={12} md={4}>
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
        <Grid item xs={12} md={4}>
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
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ "&:hover": { color: "#FA812F" } }}
            >
              Home
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ "&:hover": { color: "#FA812F" } }}
            >
              About Us
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ "&:hover": { color: "#FA812F" } }}
            >
              Vehicles
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ "&:hover": { color: "#FA812F" } }}
            >
              Carco truck
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ "&:hover": { color: "#FA812F" } }}
            >
              Fuel truck
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ "&:hover": { color: "#FA812F" } }}
            >
              Suv
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ "&:hover": { color: "#FA812F" } }}
            >
              Any electric and Hybrid vehicle
            </Link>
          </Stack>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
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
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ "&:hover": { color: "#FA812F" } }}
            >
              Contact Us
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ "&:hover": { color: "#FA812F" } }}
            >
              Merchandise
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ "&:hover": { color: "#FA812F" } }}
            >
              Agricultural products
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ "&:hover": { color: "#FA812F" } }}
            >
              Privacy Policy
            </Link>
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
          <span style={{ color: "#FA812F", fontWeight: "bold" }}> Abate </span>
          and{"  "}
          <span style={{ color: "#FA812F", fontWeight: "bold" }}>Dirsan.</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
