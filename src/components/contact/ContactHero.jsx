// src/components/Contact/ContactHero.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactHero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animated gradient colors
  const [gradientAngle, setGradientAngle] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientAngle((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        width: "100vw",
        position: "relative",
        height: { xs: "80vh", md: "100vh" },
        minHeight: 600,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(${gradientAngle}deg, 
          #1a1a2e 0%, 
          #16213e 30%, 
          #0f3460 60%, 
          #533d7b 100%)`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
          zIndex: 0,
        },
      }}
    >
      {/* Animated floating shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: `${100 + Math.random() * 200}px`,
            height: `${100 + Math.random() * 200}px`,
            borderRadius: `${Math.random() * 50}%`,
            background: `rgba(255,255,255,${0.02 + Math.random() * 0.03})`,
            border: `1px solid rgba(255,255,255,${0.1 + Math.random() * 0.1})`,
            zIndex: 1,
          }}
        />
      ))}

      {/* Glowing particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{
            opacity: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5,
          }}
          style={{
            position: "absolute",
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px 2px rgba(255,255,255,0.8)",
            zIndex: 2,
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
          hidden: { opacity: 0, y: 20 },
        }}
        style={{
          position: "relative",
          zIndex: 10,
          color: "white",
          textAlign: "center",
          padding: "0 20px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "3rem", md: "5rem", lg: "6rem" },
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            mb: 3,
            textShadow: "0 5px 15px rgba(0,0,0,0.5)",
            background: "linear-gradient(90deg, #fff, #aaa)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            position: "relative",
            "&::after": {
              content: '""',
              display: "block",
              width: "100px",
              height: "6px",
              background: "linear-gradient(90deg, #ff4d4d, #f9cb28)",
              margin: "30px auto",
              borderRadius: "3px",
            },
          }}
        >
          CONTACT US
        </Typography>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300,
              maxWidth: "800px",
              margin: "0 auto 40px",
              textShadow: "0 2px 5px rgba(0,0,0,0.5)",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              background: "linear-gradient(90deg, #fff, #ddd)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.6,
            }}
          >
            Ready to start your next project? Let's build something
            extraordinary together. Our team is standing by to bring your vision
            to life.
          </Typography>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ display: "inline-block" }}
        >
          <IconButton
            aria-label="scroll down"
            sx={{
              color: "white",
              border: "2px solid rgba(255,255,255,0.3)",
              borderRadius: "50%",
              padding: "16px",
              transition: "all 0.3s",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(5px)",
              boxShadow: "0 0 20px rgba(255,255,255,0.2)",
              "&:hover": {
                background: "rgba(255,255,255,0.2)",
                borderColor: "white",
                boxShadow: "0 0 30px rgba(255,255,255,0.4)",
              },
            }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </IconButton>
        </motion.div>
      </motion.div>

      {/* Animated scrolling indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "rgba(255,255,255,0.7)",
            mb: 1,
            fontSize: "0.9rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Explore More
        </Typography>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: "24px",
            height: "40px",
            borderRadius: "12px",
            border: "2px solid rgba(255,255,255,0.5)",
            position: "relative",
          }}
        >
          <motion.div
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "4px",
              height: "8px",
              borderRadius: "2px",
              backgroundColor: "white",
            }}
          />
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default ContactHero;
