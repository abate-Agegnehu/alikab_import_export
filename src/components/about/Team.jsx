import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import ceo1 from "../../assets/images/ceo1.jpg";
import ceo2 from "../../assets/images/ceo2.jpg";
import ceo3 from "../../assets/images/ceo3.jpg";

const exportItems = [
  { src: ceo1, label: "Ethan Harper",job:"CEO" },
  { src: ceo2, label: "Sophia Collins" ,job:"Co-Founder"},
  { src: ceo3, label: "James Anderson",job:"HR" },
];

const Team = () => {
  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: "#F9F9F9" }}>
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
    Meet Our Team
  </Typography>
  <Box
    sx={{
      height: '5px',
      backgroundColor: '#FA812F',
      mt: '6px',
      width: { xs: "40%", sm: "30%", md: "15%"},
      mx: 'auto', // Center underline
    }}
  />
</Box>


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
                width: { xs: '100%', sm: '48%', md: 300 },
                height: 350,
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
               <Typography sx={{
                color:"#FA812F",
                fontSize:20,
                fontWeight:"bold"
               }}>
                {item.job}
               </Typography>
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Team;
