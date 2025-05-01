import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import coffee from "../../assets/images/coffee.jpg";
import oilseeds from "../../assets/images/oilseeds.jpg";
import pulses from "../../assets/images/pulses.jpg";
import soybean from "../../assets/images/soybean.jpg";
import beans from "../../assets/images/beans.jpg";
import bean from "../../assets/images/bean.jpg";


const exportItems = [
  { src: oilseeds, label: "Oilseeds" },
  { src: coffee, label: "Coffee" },
  { src: pulses, label: "Pulses" },
  { src: soybean, label: "Soybean" },
  { src: beans, label: "Bean Pack" },
  { src: bean, label: "Bean" },
];

const ExportProducts = () => {
  return (
    <Box sx={{my:2, py: 6, px: 2, backgroundColor: "#F9F9F9" }}>
      <Paper elevation={0} sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      <Box sx={{ mb: 3 }}>
  <Typography
    variant="h4"
    component="h1"
    gutterBottom
    sx={{
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#212A5E',
    }}
  >
    Export Products
  </Typography>
  <Box
    sx={{
      height: '5px',
      backgroundColor: '#FA812F',
      mt: '6px',
      width: { xs: "40%", sm: "30%", md: "20%"},
      mx: 'auto', 
    }}
  />
</Box>


        <Typography
          variant="body1"
          paragraph
          sx={{
            color: "#4E4E4EB3",
            textAlign: 'center',
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          <strong style={{ color: "#FA812F" }}>ALIKAB IMPORT EXPORT</strong> is proud to play a key role in Ethiopia’s thriving agricultural export sector. With a significant portion of the population engaged in agriculture, the country produces a range of high-quality commodities for the global market. At the forefront is Ethiopian coffee—renowned worldwide—followed by premium sesame cultivated on mechanized and organically certified farms (EU and USDA-NOP standards). Our export portfolio also includes beans, peas, spices, and other oilseeds, forming the backbone of our sustainable and value-driven agri-export operations.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: { xs: 'center', sm: 'space-between' },
          }}
        >
          {exportItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                width: { xs: '100%', sm: '48%', md: 360 },
                height: 200,
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                '&:hover img': {
                  opacity: 0.6,
                },
                '&:hover .overlayText': {
                  opacity: 1,
                },
              }}
            >
              <img
                src={item.src}
                alt={item.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: '0.3s ease',
                }}
              />
              <Typography
                className="overlayText"
                variant="h5"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  fontWeight: 'bold',
                  textShadow: '1px 1px 5px rgba(0,0,0,0.6)',
                  opacity: 0,
                  transition: '0.3s ease',
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default ExportProducts;
