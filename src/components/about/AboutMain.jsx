import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardContent
} from '@mui/material';
import { ImportExport, ShoppingCart, LocalShipping, Agriculture, Factory, Business, School } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import about1 from '../../assets/images/about1.jpg';

const AboutMain = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: '100vw',
          position: 'relative',
          height: 300,
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
        <Box sx={{ position: 'relative', zIndex: 10, color: 'white', textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            About Us
          </Typography>
          <KeyboardArrowDownIcon
            fontSize="large"
            sx={{
              mt: 2,
              animation: 'bounce 2s infinite',
              '@keyframes bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              },
            }}
          />
        </Box>
      </Box>

      {/* Our Company Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#212A5E' }}>
              Our Company
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Typography variant="body1" sx={{ color: '#4E4E4EB3', lineHeight: 1.8 }}>
                <strong style={{color:"#FA812F"}}>ALIKAB IMPORT EXPORT</strong> is a dynamic and multi-sectoral enterprise
                dedicated to driving economic progress through strategic engagement in key industries
                across Ethiopia and beyond. Established with a vision for growth and national
                contribution, <strong>ALIKAB</strong> operates across a diverse range of sectors including Import,
                Export, Transport, Agriculture, Manufacturing, Consulting, and Social Work.
              </Typography>
            </Box>

          </Grid>
        </Grid>
        
      </Container>
      
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
    <Grid item key={index} sx={{ width: 280, display: "flex" }}>
      <Card
        sx={{
          textAlign: "center",
          py: 3,
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          transition: "0.3s",
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
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#212A5E" }}>
            {feature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#4E4E4EB3" }}>
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
