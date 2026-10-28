import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Chip,
  Breadcrumbs,
  Paper,
  Grid,
  Card,
  Button
} from '@mui/material';
import DirectionsIcon from '@mui/icons-material/Directions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import MapRouting from '../components/MapRouting';
import { CLINIC_INFO } from '../data/clinicData';

const RouteMapPage = ({ onOpenAppointment }) => {
  return (
    <Box sx={{ bgcolor: '#f8fafc', py: { xs: 5, md: 7 } }}>
      <Container maxWidth="xl">
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link to="/" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 600 }}>
            Home
          </Link>
          <Typography color="#0284c7" fontWeight={700}>
            Map Routing & Directions
          </Typography>
        </Breadcrumbs>

        {/* Page Title */}
        <Box sx={{ textAlign: 'center', maxWidth: 850, mx: 'auto', mb: 5 }}>
          <Chip
            icon={<DirectionsIcon />}
            label="Live Navigation & Route Planner"
            color="primary"
            size="small"
            sx={{ fontWeight: 800, mb: 1.5, px: 1 }}
          />
          <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', sm: '3.2rem' }, fontWeight: 900, color: '#0f172a', mb: 2 }}>
            Find Your Route to Caring Hands
          </Typography>
          <Typography variant="h6" sx={{ color: '#475569', fontWeight: 500, lineHeight: 1.6 }}>
            Located at <strong>G-104, Fusion Homes, Amrapali Dream Valley, Greater Noida West</strong>. Select your starting hub or use live GPS to calculate driving time, transit routes, and launch Google Maps turn-by-turn navigation.
          </Typography>
        </Box>

        {/* The Live Interactive Map Component */}
        <MapRouting />

        {/* Center Guide & Booking CTA */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, borderRadius: 4, height: '100%', border: '1px solid #e2e8f0' }}>
              <Typography variant="h5" fontWeight={900} color="#0f172a" gutterBottom>
                Accessibility & Parking Information
              </Typography>
              <Typography variant="body2" color="#475569" sx={{ mb: 2, lineHeight: 1.7 }}>
                Our facility is on the Ground Floor (G-104), ensuring wheel-chair and stroller accessibility for children with motor difficulties or mobility equipment.
              </Typography>
              <Box component="ul" sx={{ pl: 2.5, m: 0, fontSize: '0.88rem', color: '#334155', lineHeight: 1.8 }}>
                <li>Dedicated visitor car parking available at Fusion Homes Gate 1</li>
                <li>Wheelchair ramp and child-friendly elevator access</li>
                <li>Direct connectivity from Gaur City Roundabout & Char Murti Chowk</li>
                <li>Auto stands and e-rickshaws stationed right outside the complex</li>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                borderRadius: 4,
                height: '100%',
                bgcolor: '#0f172a',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                <Typography variant="h5" fontWeight={900} color="#38bdf8" gutterBottom>
                  Book Your Visit in Advance
                </Typography>
                <Typography variant="body2" sx={{ color: '#cbd5e1', lineHeight: 1.7, mb: 3 }}>
                  To avoid waiting and ensure a peaceful one-on-one consultation with our clinical specialists, please schedule an appointment before visiting.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => onOpenAppointment()}
                  startIcon={<CalendarMonthIcon />}
                  sx={{ fontWeight: 800, borderRadius: 30 }}
                >
                  Book Assessment
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href={`tel:${CLINIC_INFO.phone}`}
                  startIcon={<PhoneIcon />}
                  sx={{ color: '#38bdf8', borderColor: '#38bdf8', fontWeight: 700, borderRadius: 30 }}
                >
                  Call: {CLINIC_INFO.phone}
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RouteMapPage;
