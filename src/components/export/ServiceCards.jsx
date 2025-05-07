import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import compeliance from "../../assets/images/compeliance.jpg";
import logistic from "../../assets/images/logistic.jpg";
import postharvesting from "../../assets/images/postharvesting.jpg";

const services = [
  {
    title: "Post-Harvest Processing & Packaging",
    description:
      "We clean, grade, and package agricultural products to meet export quality standards and extend shelf life.",
    image: logistic,
  },
  {
    title: "Export Logistics & Cold Chain",
    description:
      "We manage transportation and cold storage to preserve freshness during long-distance export shipping.",
    image: postharvesting,
  },
  {
    title: "Compliance & Certification",
    description:
      "We help you obtain export certifications and meet international regulations like GLOBALG.A.P. and organic standards.",
    image: compeliance,
  },
];

const ServiceCards = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        py: 6,
        minHeight: "100vh",
        px: 2, // Add horizontal padding to prevent edge sticking
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            color: "#212A5E",
            fontSize: { xs: "20px", md: "30px" },
            fontWeight: "bold",
          }}
        >
          Our Export Service
        </Typography>
      </Box>
      <Box
        sx={{
          height: "5px",
          backgroundColor: "#FA812F",
          marginTop: "-20px",
          mb: 3,
          width: { xs: "60%", md: "20%" },
          mx: "auto",
        }}
      />
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: isSmallScreen ? 1 : 2, // Adjust padding based on screen size
        }}
      >
        {services.map((service, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            sx={{
              transform: { xs: "none", sm: "translateY(30px)" }, // Remove transform on small screens
              zIndex: index === 1 ? 2 : 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: "100%", // Make card take full width of Grid item
                maxWidth: { xs: "100%", sm: 345 }, // Full width on small screens
                borderRadius: 4,
                backgroundColor: "#212A5E",
                color: "#fff",
                boxShadow: 4,
                border: "1px solid #fff3",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={service.image}
                alt={service.title}
                sx={{
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="lightgray"
                  sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }} // Responsive font size
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" color="lightgray">
                  {service.description}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    mt: 2,
                    color: "lightgray",
                    borderColor: "lightgray",
                    "&:hover": {
                      backgroundColor: "#1C2555",
                      borderColor: "lightgray",
                    },
                  }}
                >
                  View services
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceCards;
