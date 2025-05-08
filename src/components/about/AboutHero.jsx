import React from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  Avatar,
  Chip,
} from "@mui/material";
import {
  ImportExport,
  ShoppingCart,
  LocalShipping,
  Agriculture,
  Factory,
  Business,
  School,
  ArrowForward,
  EmojiObjects,
  Public,
  Handshake,
  TrendingUp,
  Groups,
  LocationOn,
  CalendarToday,
  Star,
} from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import about1 from "../../assets/autho.png";
// import aboutPattern from "../../assets/autho.png";

import about1 from "../../assets/byd1.png";
import aboutPattern from "../../assets/byd1.png";
import { useNavigate } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
};

// New animation variants for Our Company section
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const AboutHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Box
      sx={{ width: "100%", overflowX: "hidden", bgcolor: "background.default" }}
    >
      {/* Hero Section - unchanged */}
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${about1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "relative",
            zIndex: 10,
            color: "white",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              mb: 2,
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            About <span style={{ color: "#FA812F" }}>ALIKAB</span>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.5rem" },
              maxWidth: 800,
              mx: "auto",
              mb: 4,
              textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            Driving economic progress through strategic engagement across
            multiple sectors
          </Typography>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                borderRadius: 50,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: "bold",
                boxShadow: "0 4px 20px rgba(250, 129, 47, 0.4)",
              }}
              onClick={() => navigate("/consultancy")}
            >
              Explore Our Services
            </Button>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
            style={{ marginTop: 60 }}
          >
            <KeyboardArrowDownIcon
              fontSize="large"
              sx={{
                color: "white",
                opacity: 0.8,
                fontSize: "3rem",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Animated floating elements */}
        {!isMobile && (
          <>
            <motion.div
              initial={{ x: -100, y: 100, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                position: "absolute",
                left: "10%",
                top: "30%",
                fontSize: "5rem",
                color: "rgba(247, 107, 13, 0.94)",
              }}
            >
              <EmojiObjects fontSize="inherit" />
            </motion.div>
            <motion.div
              initial={{ x: 100, y: -100, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.7 }}
              style={{
                position: "absolute",
                right: "10%",
                bottom: "20%",
                fontSize: "5rem",
                color: "rgba(245, 245, 247, 0.98)",
              }}
            >
              <Public fontSize="inherit" />
            </motion.div>
          </>
        )}
      </Box>

      {/* Enhanced Our Company Section */}
      <Container sx={{ py: 8 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={slideInFromRight}>
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "#212A5E",
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                      mb: 2,
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    Our Company
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      style={{
                        height: "4px",
                        backgroundColor: "#FA812F",
                        marginTop: "8px",
                        width: "100%",
                        transformOrigin: "left",
                      }}
                    />
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#4E4E4E",
                      lineHeight: 1.8,
                      fontSize: "1.1rem",
                    }}
                  >
                    <strong style={{ color: "#FA812F" }}>
                      ALIKAB IMPORT EXPORT
                    </strong>{" "}
                    is a leading multi-sectoral enterprise with a strong
                    presence in Ethiopia's growing economy. Founded in 2010,
                    we've grown from a small trading company to a diversified
                    business group impacting multiple industries.Our mission is
                    to drive sustainable economic development through innovative
                    solutions, quality services, and strategic partnerships.
                    We're committed to excellence, integrity, and creating value
                    for our clients, partners, and the communities we serve.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#4E4E4E",
                      lineHeight: 1.8,
                      fontSize: "1.1rem",
                    }}
                  >
                    Our mission is to drive sustainable economic development
                    through innovative solutions, quality services, and
                    strategic partnerships. We're committed to excellence,
                    integrity, and creating value for our clients, partners, and
                    the communities we serve.
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 2 }}
                  >
                    {[
                      { icon: <Groups />, label: "150+ Employees" },
                      { icon: <LocationOn />, label: "5 Regional Offices" },
                      {
                        icon: <CalendarToday />,
                        label: "13+ Years Experience",
                      },
                      { icon: <Star />, label: "ISO Certified" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Chip
                          icon={item.icon}
                          label={item.label}
                          sx={{
                            backgroundColor: "#F5F5F5",
                            px: 2,
                            py: 1.5,
                            borderRadius: 2,
                            fontWeight: "medium",
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ alignSelf: "flex-start", marginTop: 16 }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      endIcon={<ArrowForward />}
                      sx={{
                        borderRadius: 50,
                        px: 4,
                        py: 1.5,
                        fontSize: "1rem",
                        fontWeight: "bold",
                        borderWidth: 2,
                        "&:hover": {
                          borderWidth: 2,
                        },
                      }}
                      onClick={() =>
                        navigate("/", { state: { scrollTo: "history" } })
                      }
                    >
                      Our History
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Features Cards Section - unchanged */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        wrap="wrap"
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
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
            <motion.div variants={cardVariants} whileHover="hover">
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutHero;
