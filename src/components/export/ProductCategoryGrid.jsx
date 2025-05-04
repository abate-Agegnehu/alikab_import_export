import React, { useState } from "react";
import {
  Box,
  Typography,
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

const ProductCategoryGrid = ({ categories }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCardClick = (category) => {
    setSelectedCategory(category);
    setOpenDialog(true);
  };

  return (
    <Box sx={{ py: 8, bgcolor: "#f5f5f5" }}>
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
          mx: "auto",
        }}
      />
      <Grid container spacing={3} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item key={index}>
            <Card
              onClick={() => handleCardClick(category)}
              sx={{
                width: 330,
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

export default ProductCategoryGrid;
