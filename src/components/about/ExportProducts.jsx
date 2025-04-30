import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import coffee from "../../assets/images/coffee.jpg";
import oilseeds from "../../assets/images/oilseeds.jpg";
import pulses from "../../assets/images/pulses.jpg";

const exportItems = [
  { src: coffee, label: "Coffee" },
  { src: oilseeds, label: "Oilseeds" },
  { src: pulses, label: "Pulses" },
];

const ExportProducts = () => {
  return (
    <Box sx={{ py: 6, px: 3, backgroundColor: "#F9F9F9" }}>
      <Paper elevation={0} sx={{ p: 4, maxWidth: 1000, mx: 'auto' }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#212A5E',
            mb: 3,
          }}
        >
          Export Products
        </Typography>

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
            gap:1
          }}
        >
          {exportItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                width: 300,
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
