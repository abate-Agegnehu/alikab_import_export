import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ContactHero from "./ContactHero";

const ContactMain = () => {
  const [captcha, setCaptcha] = useState("");
  const departments = ["Sales", "Support", "Marketing", "HR"];

  return (
    <Box>
      {/* Contact Info Section */}
      <Box sx={{ py: 6, px: { xs: 2, md: 10 }, backgroundColor: "#E4EFE7" }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ px: { xs: 2, md: 4 }, mt: { xs: 4, md: 8 }, pb: 12 }}
        >
          {/* Location */}
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <Box
              sx={{
                backgroundColor: "#212A5E",
                borderRadius: "50%",
                width: { xs: "50px", sm: "60px", md: "80px" },
                height: { xs: "50px", sm: "60px", md: "80px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
              }}
            >
              <PlaceIcon sx={{ fontSize: 40, color: "white" }} />
            </Box>
            <Typography
              variant="h6"
              sx={{ mt: 2, color: "#d74a29", fontWeight: "bold" }}
            >
              Location
            </Typography>
            <Typography sx={{ mt: 1, color: "#212A5E" }}>
              Addis Ababa
            </Typography>
            <Typography sx={{ mt: 1, color: "#212A5E" }}>Bahir Dar</Typography>
          </Grid>

          {/* Call Us */}
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <Box
              sx={{
                backgroundColor: "#212A5E",
                borderRadius: "50%",
                width: { xs: "50px", sm: "60px", md: "80px" },
                height: { xs: "50px", sm: "60px", md: "80px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
              }}
            >
              <SmartphoneIcon sx={{ fontSize: 40, color: "white" }} />
            </Box>
            <Typography
              variant="h6"
              sx={{ mt: 2, color: "#d74a29", fontWeight: "bold" }}
            >
              Call Us
            </Typography>
            <Typography sx={{ color: "#212A5E" }}>
              Addis Ababa: +251 911 60 44 44{" "}
            </Typography>
            <Typography sx={{ color: "#212A5E" }}>
              Bahir Dar: +251 911 23 54 68{" "}
            </Typography>
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <Box
              sx={{
                backgroundColor: "#212A5E",
                borderRadius: "50%",
                width: { xs: "50px", sm: "60px", md: "80px" },
                height: { xs: "50px", sm: "60px", md: "80px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
              }}
            >
              <EmailIcon sx={{ fontSize: 40, color: "white" }} />
            </Box>
            <Typography
              variant="h6"
              sx={{ mt: 2, color: "#d74a29", fontWeight: "bold" }}
            >
              Send Email
            </Typography>
            <Typography sx={{ color: "#212A5E" }}>alikab@gmail.com</Typography>
          </Grid>

          {/* Working Hours */}
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <Box
              sx={{
                backgroundColor: "#212A5E",
                borderRadius: "50%",
                width: { xs: "50px", sm: "60px", md: "80px" },
                height: { xs: "50px", sm: "60px", md: "80px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
              }}
            >
              <AccessTimeIcon sx={{ fontSize: 40, color: "white" }} />
            </Box>
            <Typography
              variant="h6"
              sx={{ mt: 2, color: "#d74a29", fontWeight: "bold" }}
            >
              Working Hours
            </Typography>
            <Typography sx={{ color: "#212A5E" }}>
              Monday – Friday: 8:00am to 5pm
            </Typography>
            <Typography sx={{ color: "#212A5E" }}>
              Saturday: 8:00am to 12:00pm
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Form */}
      <Box
        sx={{
          py: 6,
          px: { xs: 2, md: 10 },
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            py: 4,
            px: { xs: 2, md: 8 },
            backgroundColor: "#f9f9f9",
            textAlign: "center",
            marginTop: "-120px",
            width: "80%",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 4, color: "#212A5E" }}
          >
            Get in touch
          </Typography>

          <Grid
            container
            spacing={2}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            {/* Row 1 */}
            <Grid
              item
              xs={12}
              md={6}
              gap={2}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <TextField
                fullWidth
                placeholder="Name"
                variant="outlined"
                sx={textFieldStyle}
              />
              <TextField
                fullWidth
                placeholder="Email Address"
                variant="outlined"
                sx={textFieldStyle}
              />
            </Grid>

            {/* Row 2 */}
            <Grid
              item
              xs={12}
              md={6}
              gap={2}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <TextField
                fullWidth
                placeholder="Phone Number"
                variant="outlined"
                sx={textFieldStyle}
              />
              <TextField
                select
                fullWidth
                label="Department"
                variant="outlined"
                defaultValue=""
                sx={textFieldStyle}
              >
                {departments.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Message */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={5}
                variant="outlined"
                sx={textFieldStyle}
              />
            </Grid>

            {/* Button */}
            <Grid item xs={12} display="flex" justifyContent="flex-end">
              <Button variant="contained" sx={buttonStyle}>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Google Map */}
      <Box
        sx={{
          position: "relative",
          py: 8,
          width: "100%",
          backgroundColor: "#F9F9F9",
        }}
      >
        <Box sx={{ width: "100%", height: "500px" }}>
          <iframe
            title="Agona Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.013066544377!2d38.76741861477833!3d8.99060529208445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b9825b812f%3A0xe03fcf4052953622!2sGotera%20Condominium!5e0!3m2!1sen!2set!4v1683039011921!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

const textFieldStyle = {
  backgroundColor: "#eee",
  borderRadius: 4,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
};

const buttonStyle = {
  backgroundColor: "#212A5E",
  px: 4,
  py: 1.5,
  textTransform: "none",
  fontWeight: "bold",
  fontSize: "1rem",
  borderRadius: 3,
  outline: "none",
  boxShadow: "none",
  "&:focus": {
    outline: "none",
    boxShadow: "none",
  },
  "&:focus-visible": {
    outline: "none",
    boxShadow: "none",
  },
  "&:hover": {
    backgroundColor: "#1a1a45",
    boxShadow: "none",
  },
};

export default ContactMain;
