import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Tabs,
  Tab,
  Card,
  CardContent,
  Chip,
  Button,
  Paper,
  Divider
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = ({ onOpenAppointment }) => {
  const [searchParams] = useSearchParams();
  const requestedId = searchParams.get('id');

  const [activeTab, setActiveTab] = useState(0);
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
    <Box sx={{ bgcolor: '#f8fafc', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 850, mx: 'auto', mb: 6 }}>
          <Chip
            label="Specialized Child Development Therapies"
            color="primary"
            size="small"
            sx={{ fontWeight: 800, mb: 2, px: 1 }}
          />
          <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', sm: '3.4rem' }, fontWeight: 900, color: '#0f172a', mb: 2 }}>
            Our 9 Core Therapy Programs
          </Typography>
          <Typography variant="h6" sx={{ color: '#475569', fontWeight: 500, lineHeight: 1.6 }}>
            "We Care For You With ❤️" — Explore in-depth details of each therapy featured on our Caring Hands clinical service roster.
          </Typography>
        </Box>

        {/* Selected Service Spotlight Banner */}
        {selectedService && (
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 5,
              mb: 8,
              border: `2px solid ${selectedService.borderCol}`,
              bgcolor: '#ffffff',
              boxShadow: `0 16px 36px ${selectedService.color}15`
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Chip
                  label={selectedService.tagline}
                  sx={{
                    bgcolor: selectedService.bgLight,
                    color: selectedService.color,
                    fontWeight: 800,
                    mb: 2,
                    fontSize: '0.9rem',
                    border: `1px solid ${selectedService.borderCol}`
                  }}
                />
                <Typography variant="h2" fontWeight={900} color="#0f172a" sx={{ mb: 2 }}>
                  {selectedService.title}
                </Typography>
                <Typography variant="body1" color="#334155" sx={{ lineHeight: 1.8, fontSize: '1.05rem', mb: 3 }}>
                  {selectedService.overview}
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" fontWeight={800} color="#0f172a" sx={{ mb: 1 }}>
                      Signs & Indications:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0, fontSize: '0.85rem', color: '#475569', lineHeight: 1.7 }}>
                      {selectedService.indications.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" fontWeight={800} color="#0f172a" sx={{ mb: 1 }}>
                      Clinical Techniques Used:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0, fontSize: '0.85rem', color: '#475569', lineHeight: 1.7 }}>
                      {selectedService.techniques.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: 4,
                    bgcolor: selectedService.bgLight,
                    border: `1px solid ${selectedService.borderCol}`,
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="caption" fontWeight={800} color={selectedService.color} sx={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    EXPECTED THERAPEUTIC OUTCOMES
                  </Typography>
                  <Typography variant="h6" fontWeight={800} color="#0f172a" sx={{ my: 1.5, lineHeight: 1.4 }}>
                    "{selectedService.outcomes}"
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="body2" color="#475569" sx={{ mb: 2.5 }}>
                    Available at <strong>G-104, Fusion Homes, Greater Noida West</strong>.
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={() => onOpenAppointment(selectedService.title)}
                    startIcon={<CalendarMonthIcon />}
                    sx={{
                      bgcolor: selectedService.color,
                      fontWeight: 800,
                      py: 1.4,
                      '&:hover': { bgcolor: selectedService.color, filter: 'brightness(0.9)' }
                    }}
                  >
                    Book {selectedService.title} Assessment
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}

        {/* All 9 Services Grid */}
        <Typography variant="h3" fontWeight={900} color="#0f172a" sx={{ mb: 3 }}>
          Explore All 9 Therapies
        </Typography>

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
