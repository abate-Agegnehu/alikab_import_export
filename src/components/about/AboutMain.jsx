import React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import {
  ImportExport,
  ShoppingCart,
  LocalShipping,
  Agriculture,
  Factory,
  Business,
  School,
} from "@mui/icons-material";

// Import the separated Hero component
import AboutHero from "./AboutHero";

const AboutMain = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "inline-block", mb: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#212A5E",
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  textAlign: "center",
                }}
              >
                Our Company
              </Typography>
              <Box
                sx={{
                  height: "5px",
                  backgroundColor: "#FA812F",
                  mt: "6px",
                  width: "80%",
                  mx: "auto",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Typography
                variant="body1"
                sx={{ color: "#4E4E4EB3", lineHeight: 1.8 }}
              >
                <strong style={{ color: "#FA812F" }}>
                  ALIKAB IMPORT EXPORT
                </strong>{" "}
                is a dynamic and multi-sectoral enterprise dedicated to driving
                economic progress through strategic engagement in key industries
                across Ethiopia and beyond. Established with a vision for growth
                and national contribution, <strong>ALIKAB</strong> operates
                across a diverse range of sectors including Import, Export,
                Transport, Agriculture, Manufacturing, Consulting, and Social
                Work.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Features Cards Section */}
      <Grid container spacing={2} justifyContent="center" wrap="wrap">
        {[
          {
            icon: <ImportExport fontSize="large" />,
            title: "Import",
            desc: "Focused on importing essential goods like vehicles, machinery, and agricultural products to drive development.",
          },
          {
            icon: <ShoppingCart fontSize="large" />,
            title: "Export",
            desc: "Exporting high-quality Ethiopian products like coffee, sesame, and oilseeds to global markets.",
          },
          {
            icon: <LocalShipping fontSize="large" />,
            title: "Transport",
            desc: "Efficient logistics and transportation services for goods movement across Ethiopia and beyond.",
          },
          {
            icon: <Agriculture fontSize="large" />,
            title: "Agriculture",
            desc: "Engaging in sustainable agricultural practices to ensure food security and promote growth.",
          },
          {
            icon: <Factory fontSize="large" />,
            title: "Manufacturing",
            desc: "Promoting local manufacturing to enhance production capacity and create job opportunities.",
          },
          {
            icon: <Business fontSize="large" />,
            title: "Consulting",
            desc: "Providing expert consulting services in trade, investment, and industry development.",
          },
          {
            icon: <School fontSize="large" />,
            title: "Social Work",
            desc: "Committed to community development programs aimed at improving social welfare.",
          },
        ].map((feature, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                textAlign: "center",
                py: 3,
                px: 2,
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: 280,
                transition: "0.3s",
                backgroundColor: "#F9F9F9",
                "&:hover": {
                  backgroundColor: "#212A5E",
                  opacity: 1,
                  cursor: "pointer",
                  "& *": {
                    color: "white",
                  },
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ color: "#212A5E", mb: 2 }}>{feature.icon}</Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#212A5E" }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#4E4E4EB3" }}>
                  {feature.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutMain;
