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
import FavoriteIcon from '@mui/icons-material/Favorite';

import MapRouting from '../components/MapRouting';
import { CLINIC_INFO } from '../data/clinicData';

const RouteMapPage = ({ onOpenAppointment }) => {
  return (
    <Box sx={{ bgcolor: '#FDFBF7', py: { xs: 5, md: 7 } }}>
      <Container maxWidth="xl">
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link to="/" style={{ color: '#757277', textDecoration: 'none', fontWeight: 600 }}>
            Home
          </Link>
          <Typography color="#02476c" fontWeight={700}>
            Map Routing & Directions
          </Typography>
        </Breadcrumbs>

        {/* Page Title */}
        <Box sx={{ textAlign: 'center', maxWidth: 850, mx: 'auto', mb: 5 }}>
          <Chip
            icon={<DirectionsIcon sx={{ color: '#02476c !important' }} />}
            label="Live Navigation & Route Planner"
            size="small"
            sx={{
              bgcolor: '#FFFAEA',
              color: '#02476c',
              fontWeight: 800,
              mb: 2,
              px: 1.5,
              py: 0.5,
              border: '1px solid #F6D469',
              borderRadius: 50
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.2rem', sm: '3.2rem' },
              fontWeight: 900,
              color: '#24102F',
              fontFamily: '"Quicksand", sans-serif',
              mb: 2
            }}
          >
            Find Your Route to Caring Hands
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Schoolbell", cursive',
              color: '#02476c',
              fontSize: { xs: '1.2rem', sm: '1.45rem' },
              fontWeight: 700,
              mb: 1.5
            }}
          >
            Give a helping hand for a child ☀️
          </Typography>
          <Typography variant="h6" sx={{ color: '#757277', fontWeight: 500, lineHeight: 1.6, fontSize: { xs: '1rem', sm: '1.15rem' } }}>
            Located at <strong>G-104, Fusion Homes, Amrapali Dream Valley, Greater Noida West</strong>. Select your starting hub or use live GPS to calculate driving time, transit routes, and launch Google Maps turn-by-turn navigation.
          </Typography>
        </Box>

        {/* The Live Interactive Map Component */}
        <MapRouting />

        {/* Center Guide & Booking CTA */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, borderRadius: 4.5, height: '100%', border: '1px solid #EFECE7', bgcolor: '#ffffff', boxShadow: '0 4px 20px rgba(2, 71, 108, 0.03)' }}>
              <Typography variant="h5" fontWeight={900} color="#24102F" gutterBottom sx={{ fontFamily: '"Quicksand", sans-serif' }}>
                Accessibility & Parking Information
              </Typography>
              <Typography variant="body2" color="#757277" sx={{ mb: 2, lineHeight: 1.7 }}>
                Our facility is situated on the Ground Floor (G-104), ensuring complete wheelchair and stroller accessibility for children with motor difficulties or mobility equipment.
              </Typography>
              <Box component="ul" sx={{ pl: 2.5, m: 0, fontSize: '0.88rem', color: '#24102F', lineHeight: 1.8 }}>
                <li>Dedicated visitor car parking available at Fusion Homes Gate 1</li>
                <li>Wheelchair ramp and child-friendly elevator access</li>
                <li>Direct connectivity from Gaur City Roundabout & Ek Murti Chowk</li>
                <li>Auto stands and e-rickshaws stationed right outside the complex</li>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                borderRadius: 4.5,
                height: '100%',
                bgcolor: '#02476c',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '2px solid #F6D469'
              }}
            >
              <Box>
                <Typography variant="h5" fontWeight={900} sx={{ color: '#F6D469', mb: 1, fontFamily: '"Quicksand", sans-serif' }}>
                  Book Your Visit in Advance
                </Typography>
                <Typography variant="body2" sx={{ color: '#EFECE7', lineHeight: 1.7, mb: 3 }}>
                  To avoid waiting and ensure a peaceful one-on-one consultation with our clinical specialists, please schedule an appointment before visiting.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => onOpenAppointment()}
                  startIcon={<CalendarMonthIcon />}
                  sx={{
                    fontWeight: 900,
                    borderRadius: 50,
                    px: 3.5,
                    py: 1.2,
                    bgcolor: '#F6D469',
                    color: '#24102F',
                    '&:hover': { bgcolor: '#fcb720' }
                  }}
                >
                  Book Assessment
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href={`tel:${CLINIC_INFO.phone}`}
                  startIcon={<PhoneIcon />}
                  sx={{
                    color: '#ffffff',
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    fontWeight: 700,
                    borderRadius: 50,
                    px: 2.5,
                    py: 1.2,
                    '&:hover': { borderColor: '#F6D469', color: '#F6D469' }
                  }}
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