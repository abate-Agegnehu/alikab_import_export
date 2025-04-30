import React, { useState, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardMedia, 
  useTheme, 
  useMediaQuery,
  Modal,
  IconButton,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import logo1 from '../../assets/images/logo1.jpg'; 
import logo2 from '../../assets/images/logo2.jpg'; 
import logo3 from '../../assets/images/logo3.jpg'; 
import logo4 from '../../assets/images/logo4.jpg'; 

const awards = [
  { id: 1, image: logo1 },
  { id: 2, image: logo2 },
  { id: 3, image: logo3 },
  { id: 4, image: logo4 },
  { id: 5, image: logo1 },
  { id: 6, image: logo2 },
  { id: 7, image: logo3 },
  { id: 8, image: logo4 },
];

const Award = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleOpen = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? awards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === awards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box 
      sx={{ 
        py: 8,
        backgroundColor: theme.palette.background.default,
        position: 'relative',
      }}
      id="awards"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h3" 
          component="h3" 
          sx={{ 
            textAlign: 'center',
            mb: 1,
            fontWeight: 700,
            color: "#212A5E",
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Awards of Merit and Appreciation
        </Typography>
        
        <Typography 
          variant="h5" 
          component="p" 
          sx={{ 
            textAlign: 'center',
            mb: 3,
            color: "#4E4E4EB3",
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
          }}
        >
          We have been honored with recognition from various prestigious organizations
        </Typography>
      </motion.div>

      {/* Left scroll button */}
      <IconButton
        onClick={scrollLeft}
        sx={{
          position: 'absolute',
          left: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: 'rgba(255,255,255,0.7)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.9)',
          },
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>

      {/* Awards container with horizontal scroll */}
      <Stack
        direction="row"
        spacing={{ xs: 2, sm: 4 }}
        sx={{
          overflowX: 'auto',
          scrollbarWidth: 'none', 
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          mx: 'auto',
          maxWidth: '90%',
          py: 2,
          alignItems: 'center',
        }}
        ref={scrollContainerRef}
      >
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            style={{
              flexShrink: 0,
              margin: '0 8px',

            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',

              }}
              onClick={() => handleOpen(index)}
            >
              <Card
                sx={{
              
                  borderRadius: '50%',
                  boxShadow: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 6,
                  },
                  backgroundColor: 'transparent',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 1,
                }}
              >
                <CardMedia
                  component="img"
                  image={award.image}
                  alt={`Award ${award.id}`}
                  sx={{
                    width: { xs: 60, sm: 100, md: 150},
                    height: { xs: 60, sm: 100, md: 150},
                    objectFit: 'contain',
                    borderRadius: '50%',
                  }}
                />
              </Card>
            </Box>
          </motion.div>
        ))}
      </Stack>

      {/* Right scroll button */}
      <IconButton
        onClick={scrollRight}
        sx={{
          position: 'absolute',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: 'rgba(255,255,255,0.7)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.9)',
          },
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>

      {/* Image Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: isMobile ? '90%' : '70%',
            maxWidth: '800px',
            outline: 'none',
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 10,
              top: 10,
              zIndex: 2,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          {/* Left Arrow */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>

          {/* Image */}
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <CardMedia
              component="img"
              image={awards[currentImageIndex].image}
              alt={`Award ${awards[currentImageIndex].id}`}
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: 2,
              }}
            />
          </motion.div>

          {/* Right Arrow */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
};

export default Award;