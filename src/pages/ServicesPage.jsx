import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Button,
  Paper,
  Divider,
  Breadcrumbs
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = ({ onOpenAppointment }) => {
  const [searchParams] = useSearchParams();
  const requestedId = searchParams.get('id');

  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0]);

  useEffect(() => {
    if (requestedId) {
      const found = SERVICES_DATA.find((s) => s.id === requestedId);
      if (found) {
        setSelectedService(found);
        window.scrollTo({ top: 380, behavior: 'smooth' });
      }
    }
  }, [requestedId]);

  return (
    <Box sx={{ bgcolor: '#FDFBF7', py: { xs: 5, md: 8 } }}>
      <Container maxWidth="xl">
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link to="/" style={{ color: '#757277', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            Home
          </Link>
          <Typography color="#02476c" fontWeight={700} fontSize="0.9rem">
            Therapy Services
          </Typography>
        </Breadcrumbs>

        {/* Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', mb: 6 }}>
          <Chip
            icon={<FavoriteIcon sx={{ color: '#E76100 !important' }} />}
            label="Comprehensive Pediatric Therapy"
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
              mb: 1.5
            }}
          >
            Our 9 Specialized Therapy Programs
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
            "Small Steps... Big Futures... ☀️"
          </Typography>
          <Typography variant="body1" sx={{ color: '#757277', fontSize: '1.05rem', lineHeight: 1.6 }}>
            "Give a helping hand for a child ☀️" — Explore in-depth details of each evidence-based clinical therapy offered at our Greater Noida West center.
          </Typography>
        </Box>

        {/* Selected Service Spotlight Banner */}
        {selectedService && (
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4.5,
              mb: 8,
              border: `1px solid #EFECE7`,
              bgcolor: '#ffffff',
              boxShadow: `0 12px 32px rgba(2, 71, 108, 0.05)`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: selectedService.color }} />

            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Chip
                  label={selectedService.tagline}
                  sx={{
                    bgcolor: selectedService.bgLight,
                    color: selectedService.color,
                    fontWeight: 800,
                    mb: 2,
                    fontSize: '0.82rem',
                    border: `1px solid ${selectedService.borderCol}`,
                    borderRadius: 50
                  }}
                />
                <Typography variant="h2" fontWeight={900} color="#24102F" sx={{ mb: 1.5, fontSize: { xs: '1.8rem', sm: '2.4rem' }, fontFamily: '"Quicksand", sans-serif' }}>
                  {selectedService.title}
                </Typography>
                <Typography variant="body1" color="#757277" sx={{ lineHeight: 1.8, fontSize: '1rem', mb: 3 }}>
                  {selectedService.overview}
                </Typography>

                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" fontWeight={800} color="#24102F" sx={{ mb: 1, fontFamily: '"Quicksand", sans-serif' }}>
                      Signs & Indications:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                      {selectedService.indications.map((item, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 16, color: selectedService.color, mt: 0.2, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ fontSize: '0.85rem', color: '#757277', lineHeight: 1.4 }}>
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" fontWeight={800} color="#24102F" sx={{ mb: 1, fontFamily: '"Quicksand", sans-serif' }}>
                      Clinical Techniques Used:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                      {selectedService.techniques.map((item, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 16, color: '#59C36A', mt: 0.2, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ fontSize: '0.85rem', color: '#757277', lineHeight: 1.4 }}>
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    borderRadius: 4,
                    bgcolor: '#FFFAEA',
                    border: `1px solid #F6D469`,
                    overflow: 'hidden'
                  }}
                >
                  {selectedService.image && (
                    <Box sx={{ height: 190, width: '100%', overflow: 'hidden' }}>
                      <Box
                        component="img"
                        src={selectedService.image}
                        alt={selectedService.title}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Box>
                  )}
                  <Box sx={{ p: { xs: 2.5, sm: 3 }, textAlign: 'center' }}>
                    <Typography variant="caption" fontWeight={800} color="#02476c" sx={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      EXPECTED THERAPEUTIC OUTCOMES
                    </Typography>
                    <Typography variant="h6" fontWeight={800} color="#24102F" sx={{ my: 1.5, lineHeight: 1.4, fontSize: '1.05rem', fontFamily: '"Quicksand", sans-serif' }}>
                      "{selectedService.outcomes}"
                    </Typography>

                    <Divider sx={{ my: 2, borderColor: '#F6D469' }} />

                    <Typography variant="body2" color="#757277" sx={{ mb: 2.5, fontSize: '0.88rem' }}>
                      Conducted at <strong>G-104 Fusion Homes, Greater Noida West</strong>.
                    </Typography>

                    <Button
                      variant="contained"
                      fullWidth
                      size="large"
                      onClick={() => onOpenAppointment(selectedService.title)}
                      startIcon={<CalendarMonthIcon />}
                      sx={{
                        bgcolor: '#02476c',
                        color: '#ffffff',
                        fontWeight: 800,
                        py: 1.2,
                        borderRadius: 50,
                        boxShadow: 'none',
                        '&:hover': { bgcolor: '#012d45' }
                      }}
                    >
                      Book {selectedService.title} Assessment
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}

        {/* All 9 Services Grid Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" fontWeight={900} color="#24102F" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem' }, fontFamily: '"Quicksand", sans-serif' }}>
            All Therapy Programs
          </Typography>
          <Typography variant="body2" color="#757277">
            Click any service to view specialized curriculum, signs, and therapy modalities.
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {SERVICES_DATA.map((service) => (
            <Grid item xs={12} sm={6} lg={4} key={service.id}>
              <ServiceCard
                service={service}
                onBook={(title) => onOpenAppointment(title)}
                onSelect={(srv) => {
                  setSelectedService(srv);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesPage;