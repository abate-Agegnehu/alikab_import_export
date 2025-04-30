import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Section = ({ title, children }) => (
  <Box display="flex" alignItems="flex-start" gap={2} mb={4}>
    <CheckCircleIcon color="warning" fontSize="large" />
    <Box>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  </Box>
);

const VisionAndMission = () => {
  return (
    <Box p={4}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Section title="Vision">
            <Typography>
              To be one of the best trading partner and manufacturer in East Africa that promotes construction work,
              exports Ethiopian Agricultural products and imports different ranges of vehicles and machinery.
            </Typography>
          </Section>

          <Section title="Mission">
            <Typography>
              Tamrin International Trading PLC will lead the import and export market, manufacturing, construction, and
              service industries in East Africa by providing quality products with a passion for customer-driven
              services. We will emphasize training, entertain diversity and provide growth opportunities for our
              employees and associates. We will lead our industries in the application of appropriate technologies. We
              will operate at the highest levels of ethics and compliance with a focus on exemplary corporate
              governance, supplementing.
            </Typography>
          </Section>
        </Grid>

        <Grid item xs={12} md={6}>
          <Section title="Core Values">
            <Typography gutterBottom>
              We Tamrin International Trading PLC are committed to being one of the best at what we do. This is achieved
              by:
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="Uncompromised quality" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Making our customers our number one priorities" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Achieve the largest market share in the country for car assembly, export and import business" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Keep consistent excellence in business, and flexibility to adjust the operation under the prevailing changes" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Continuous improvement" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Create job opportunities" />
              </ListItem>
            </List>
          </Section>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VisionAndMission;
