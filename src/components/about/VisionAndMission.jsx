import React from 'react';
import { Typography, Grid, Box, Card, CardContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import about1 from '../../assets/images/about1.jpg';
import CountUp from 'react-countup';
const VisionAndMission = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', mt: 2, py: 2 }}>
      <Grid container spacing={2} justifyContent="center" wrap="wrap">
        {[ 
          {
            icon: <CheckCircleIcon fontSize="inherit" sx={{ fontSize: 60 }} />, // Increase icon size here
            title: "Vision",
            desc: `To be a global leader in the import and export market, specializing in the delivery of high-quality vehicles, machinery, and agricultural chemicals to East Africa. We aim to enhance the growth of agriculture and industry by providing world-class products that drive economic development and improve the quality of life.`,
          },
          {
            icon: <CheckCircleIcon fontSize="inherit" sx={{ fontSize: 60 }} />, // Increase icon size here
            title: "Mission",
            desc: `Our mission is to provide top-tier vehicles, machinery, and agricultural chemicals to businesses across East Africa, empowering industries to thrive. We will strengthen regional economies by exporting premium Ethiopian agricultural products to international markets, ensuring sustainable growth and fostering long-term partnerships.`,
          },
          {
            icon: <CheckCircleIcon fontSize="inherit" sx={{ fontSize: 60 }} />, // Increase icon size here
            title: "Core Values",
            desc: `We, ALIKAB IMPORT EXPORT, are committed to being one of the best at what we do. This is achieved by:

            1. Uncompromised quality in the import and export of vehicles, machinery, and agricultural products.
            2. Prioritizing customer satisfaction by providing tailored solutions for every business need.
            3. Ensuring the sustainable growth of both local and international markets through reliable and efficient service.
            4. Continuously improving our operations to stay at the forefront of the industry, fostering job creation and economic progress in every market we serve.`,
          },
        ].map((feature, index) => (
          <Grid item key={index} sx={{ width: 380, display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 3,
                boxShadow: 'none',
                height: '100%',
                alignItems: 'flex-start', // Align to the top
              }}
            >
              <Box sx={{ color: "#212A5E", mr: 1 }}>
                {feature.icon}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" fontWeight="bold" sx={{ color: "#FA812F" }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#4E4E4EB3'}}>
                  {feature.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
   
<Box
  sx={{
    width: '100%',
    position: 'relative',
    height: { xs: 400, sm: 350, md: 300 },
    backgroundImage: `url(${about1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.4)',
      zIndex: 0,
    }}
  />

  <Box
    sx={{
      position: 'relative',
      zIndex: 10,
      color: 'white',
      textAlign: 'center',
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      px: { xs: 2, sm: 4 },
      gap: { xs: 3, sm: 0 },
      maxWidth: 1200,
      mx: 'auto',
    }}
  >
    {[
      { value: 400, suffix: "K", label: "Tons of Sesame Exported" },
      { value: 200, suffix: "", label: "Employment Opportunities" },
      { value: 10, suffix: "+", label: "Years of Trading Experience" },
      { value: 20, suffix: "+", label: "Export Destinations" },
    ].map(({ value, suffix, label }, index) => (
      <Box key={index} sx={{ flex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          <CountUp end={value} duration={2} separator="," suffix={suffix} />
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
          }}
        >
          {label}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>

    </Box>
  );
};

export default VisionAndMission;
