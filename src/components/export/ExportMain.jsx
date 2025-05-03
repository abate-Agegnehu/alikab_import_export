import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import coffee from "../../assets/images/coffee.jpg";
import oilseeds from "../../assets/images/oilseeds.jpg";
import pulses from "../../assets/images/pulses.jpg";
import soybean from "../../assets/images/soybean.jpg";
import beans from "../../assets/images/beans.jpg";
import bean from "../../assets/images/bean.jpg";
// Slides

// Example product categories
const productCategories = [
  {
    title: "Coffee",
    image: coffee,
    description:
      "Premium coffee beans sourced from rich highland regions, known for their aroma and flavor.",
  },
  {
    title: "Oilseeds",
    image: oilseeds,
    description:
      "High-quality oilseeds used for producing vegetable oils and other nutritional products.",
  },
  {
    title: "Pulses",
    image: pulses,
    description:
      "A variety of nutritious pulses including lentils, chickpeas, and peas, rich in protein.",
  },
  {
    title: "Soybean",
    image: soybean,
    description:
      "Versatile soybeans cultivated for food products, oil extraction, and animal feed.",
  },
  {
    title: "Soybean",
    image: soybean,
    description:
      "Versatile soybeans cultivated for food products, oil extraction, and animal feed.",
  },
  {
    title: "Beans",
    image: beans,
    description:
      "Assorted beans known for their health benefits and use in global culinary traditions.",
  },
  {
    title: "Red Kidney Beans",
    image: bean,
    description:
      "Nutrient-dense red kidney beans commonly used in soups, stews, and salads.",
  },
  {
    title: "Coffee",
    image: coffee,
    description:
      "Premium coffee beans sourced from rich highland regions, known for their aroma and flavor.",
  },
];

const ExportMain = () => {
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [slideInterval, setSlideInterval] = useState(5000);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleNext = () => {
    setAutoSlide(false);
    setCurrent((prev) =>
      prev === productCategories.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setAutoSlide(true), slideInterval * 2);
  };

  const handlePrev = () => {
    setAutoSlide(false);
    setCurrent((prev) =>
      prev === 0 ? productCategories.length - 1 : prev - 1
    );
    setTimeout(() => setAutoSlide(true), slideInterval * 2);
  };

  useEffect(() => {
    let timer;
    if (autoSlide) {
      timer = setInterval(() => {
        setCurrent((prev) =>
          prev === productCategories.length - 1 ? 0 : prev + 1
        );
      }, slideInterval);
    }
    return () => clearInterval(timer);
  }, [autoSlide, slideInterval]);

  const handleCardClick = (category) => {
    setSelectedCategory(category);
    setOpenDialog(true);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        marginBottom: { md: "400px" },
        overflowX: "hidden",
      }}
    >
      {/* Carousel */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "90vh",
          backgroundImage: `url(${productCategories[current].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="h2" fontWeight="bold">
            {productCategories[current].title}
          </Typography>
          <Typography mt={1}>
            {productCategories[current].description}
          </Typography>
          <KeyboardArrowDownIcon fontSize="large" sx={{ mt: 3 }} />
        </Box>
        <IconButton
          onClick={handlePrev}
          sx={{ position: "absolute", left: 16, top: "50%", color: "white" }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{ position: "absolute", right: 16, top: "50%", color: "white" }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Box sx={{ py: 8, px: 4, bgcolor: "#f5f5f5" }}>
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          mb={4}
          sx={{ color: "#212A5E", fontSize: { xs: "28px" } }}
        >
          Our Product Categories
        </Typography>
        <Box
          sx={{
            height: "5px",
            backgroundColor: "#FA812F",
            marginTop: "-20px",
            mb: 3,
            width: { xs: "60%", md: "20%" },
            mx: "auto", // This centers the underline
          }}
        />
        <Box sx={{ py: { md: 8 }, px: 4, bgcolor: "#f5f5f5" }}>
          <Grid container spacing={3} justifyContent="center">
            {productCategories.map((category, index) => (
              <Grid item key={index}>
                <Card
                  onClick={() => handleCardClick(category)}
                  sx={{
                    width: 280,
                    height: "100%",
                    cursor: "pointer",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "none",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={category.image}
                    alt={category.title}
                    sx={{ height: 200, objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ color: "#212A5E" }}>
                      {category.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Dialog for Detail View */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        {selectedCategory && (
          <>
            <DialogTitle sx={{ color: "#212A5E", fontWeight: "bold" }}>
              {selectedCategory.title}
            </DialogTitle>
            <DialogContent>
              <img
                src={selectedCategory.image}
                alt={selectedCategory.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
              <Typography sx={{ color: "#4E4E4EB3" }} mt={2}>
                {selectedCategory.description}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setOpenDialog(false)}
                variant="contained"
                sx={{ color: "#FFFFFF", backgroundColor: "#212A5E" }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ExportMain;
