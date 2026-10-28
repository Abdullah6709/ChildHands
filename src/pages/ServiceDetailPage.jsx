import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Paper,
  Divider,
  Breadcrumbs,
  Alert,
  Rating,
  Avatar
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PanToolIcon from '@mui/icons-material/PanTool';
import WorkIcon from '@mui/icons-material/Work';
import ExtensionIcon from '@mui/icons-material/Extension';
import GroupsIcon from '@mui/icons-material/Groups';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { SERVICES_DATA, CLINIC_INFO, TESTIMONIALS_DATA } from '../data/clinicData';

const iconMap = {
  RecordVoiceOver: <RecordVoiceOverIcon sx={{ fontSize: 44 }} />,
  SentimentSatisfiedAlt: <SentimentSatisfiedAltIcon sx={{ fontSize: 44 }} />,
  PanTool: <PanToolIcon sx={{ fontSize: 44 }} />,
  Work: <WorkIcon sx={{ fontSize: 44 }} />,
  Extension: <ExtensionIcon sx={{ fontSize: 44 }} />,
  Groups: <GroupsIcon sx={{ fontSize: 44 }} />,
  Psychology: <PsychologyIcon sx={{ fontSize: 44 }} />,
  FamilyRestroom: <FamilyRestroomIcon sx={{ fontSize: 44 }} />,
  MenuBook: <MenuBookIcon sx={{ fontSize: 44 }} />
};

const ServiceDetailPage = ({ onOpenAppointment }) => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // Find matching service or fallback to first
  const currentIndex = SERVICES_DATA.findIndex((s) => s.id === serviceId);
  const service = currentIndex !== -1 ? SERVICES_DATA[currentIndex] : SERVICES_DATA[0];

  const prevService = currentIndex > 0 ? SERVICES_DATA[currentIndex - 1] : null;
  const nextService = currentIndex < SERVICES_DATA.length - 1 ? SERVICES_DATA[currentIndex + 1] : null;

  return (
    <Box sx={{ bgcolor: '#f8fafc', py: { xs: 5, md: 7 } }}>
      <Container maxWidth="xl">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link to="/" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 600 }}>
            Home
          </Link>
          <Link to="/services" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 600 }}>
            Therapy Services
          </Link>
          <Typography color={service.color} fontWeight={700}>
            {service.title}
          </Typography>
        </Breadcrumbs>

        {/* Hero Banner for this Dedicated Service */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3.5, md: 5 },
            borderRadius: 5,
            mb: 6,
            background: `linear-gradient(135deg, ${service.bgLight} 0%, #ffffff 70%)`,
            border: `2px solid ${service.borderCol}`,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 3.5,
                    bgcolor: service.color,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 20px ${service.color}40`,
                    flexShrink: 0
                  }}
                >
                  {iconMap[service.iconName]}
                </Box>
                <Box>
                  <Chip
                    label="Specialized Therapy Program"
                    size="small"
                    sx={{
                      bgcolor: '#ffffff',
                      color: service.color,
                      fontWeight: 800,
                      mb: 0.5,
                      border: `1px solid ${service.borderCol}`
                    }}
                  />
                  <Typography variant="h2" fontWeight={900} color="#0f172a" sx={{ fontSize: { xs: '2rem', sm: '2.8rem' } }}>
                    {service.title}
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="h6"
                fontWeight={700}
                color={service.color}
                sx={{ mb: 2, fontSize: { xs: '1.1rem', sm: '1.3rem' } }}
              >
                "{service.tagline}"
              </Typography>

              <Typography variant="body1" color="#334155" sx={{ lineHeight: 1.8, fontSize: '1.05rem', mb: 3.5, maxWidth: 800 }}>
                {service.overview}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => onOpenAppointment(service.title)}
                  startIcon={<CalendarMonthIcon />}
                  sx={{
                    bgcolor: service.color,
                    fontWeight: 800,
                    px: 3.5,
                    py: 1.3,
                    borderRadius: 30,
                    '&:hover': { bgcolor: service.color, filter: 'brightness(0.9)' }
                  }}
                >
                  Book {service.title} Assessment
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href={`tel:${CLINIC_INFO.phone}`}
                  startIcon={<PhoneIcon />}
                  sx={{
                    borderColor: service.color,
                    color: service.color,
                    fontWeight: 700,
                    borderRadius: 30,
                    bgcolor: '#ffffff',
                    '&:hover': { bgcolor: service.bgLight }
                  }}
                >
                  Call: {CLINIC_INFO.phone}
                </Button>
              </Box>
            </Grid>

            {/* Quick Summary Card */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: 4,
                  bgcolor: '#ffffff',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.06)',
                  border: '1px solid #e2e8f0'
                }}
              >
                <Typography variant="subtitle2" fontWeight={800} color="#0f172a" gutterBottom>
                  Program Details at a Glance
                </Typography>
                <Divider sx={{ my: 1.5 }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, fontSize: '0.88rem' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="#64748b" fontWeight={600}>Target Age:</Typography>
                    <Typography color="#0f172a" fontWeight={700}>18 months – 14 years</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="#64748b" fontWeight={600}>Session Format:</Typography>
                    <Typography color="#0f172a" fontWeight={700}>1-on-1 Individualized</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="#64748b" fontWeight={600}>Session Duration:</Typography>
                    <Typography color="#0f172a" fontWeight={700}>45 - 60 Minutes</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="#64748b" fontWeight={600}>Evaluation:</Typography>
                    <Typography color="#0f172a" fontWeight={700}>8-Week Milestone IEP</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="#64748b" fontWeight={600}>Center Location:</Typography>
                    <Typography color="#0284c7" fontWeight={700}>Fusion Homes, Gr. Noida</Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Paper>

        {/* Detailed Clinical Sections: Indications & Methods */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Left Column: Signs & Symptoms */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: { xs: 3, sm: 4 }, height: '100%', borderRadius: 4, border: '1px solid #e2e8f0' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <HelpOutlineIcon sx={{ color: service.color, fontSize: 28 }} />
                <Typography variant="h5" fontWeight={900} color="#0f172a">
                  When Should A Child Seek {service.title}?
                </Typography>
              </Box>
              <Typography variant="body2" color="#64748b" sx={{ mb: 3 }}>
                If you observe any of the following developmental milestones lagging behind, an early therapeutic evaluation is highly recommended:
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {service.indications.map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <CheckCircleOutlineIcon sx={{ color: service.color, mt: 0.2, fontSize: 20 }} />
                    <Typography variant="body2" color="#334155" fontWeight={500} lineHeight={1.6}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>

          {/* Right Column: Techniques & Clinical Approach */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: { xs: 3, sm: 4 }, height: '100%', borderRadius: 4, border: '1px solid #e2e8f0' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <VerifiedIcon sx={{ color: service.color, fontSize: 28 }} />
                <Typography variant="h5" fontWeight={900} color="#0f172a">
                  Clinical Techniques & Tools Used
                </Typography>
              </Box>
              <Typography variant="body2" color="#64748b" sx={{ mb: 3 }}>
                Our licensed pediatric therapists use evidence-backed, certified therapeutic modalities in a safe, joyful environment:
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {service.techniques.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      p: 2,
                      bgcolor: service.bgLight,
                      borderRadius: 2.5,
                      border: `1px solid ${service.borderCol}`
                    }}
                  >
                    <Typography variant="subtitle2" fontWeight={800} color="#0f172a">
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Expected Outcomes Banner */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            bgcolor: '#ffffff',
            border: `2px solid ${service.borderCol}`,
            mb: 6,
            textAlign: 'center'
          }}
        >
          <Chip label="Measurable Therapeutic Results" size="small" sx={{ bgcolor: service.bgLight, color: service.color, fontWeight: 800, mb: 1.5 }} />
          <Typography variant="h4" fontWeight={900} color="#0f172a" gutterBottom>
            Expected Outcomes
          </Typography>
          <Typography variant="h6" fontWeight={600} color="#475569" sx={{ maxWidth: 850, mx: 'auto', mt: 1 }}>
            "{service.outcomes}"
          </Typography>
        </Paper>

        {/* Next & Previous Service Navigation Bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
            pt: 3,
            borderTop: '1px solid #e2e8f0'
          }}
        >
          {prevService ? (
            <Button
              component={Link}
              to={`/services/${prevService.id}`}
              startIcon={<ArrowBackIcon />}
              sx={{ fontWeight: 700, color: '#334155' }}
            >
              Previous: {prevService.title}
            </Button>
          ) : <Box />}

          <Button
            component={Link}
            to="/services"
            variant="outlined"
            sx={{ fontWeight: 700 }}
          >
            All 9 Therapies
          </Button>

          {nextService ? (
            <Button
              component={Link}
              to={`/services/${nextService.id}`}
              endIcon={<ArrowForwardIcon />}
              sx={{ fontWeight: 700, color: '#334155' }}
            >
              Next: {nextService.title}
            </Button>
          ) : <Box />}
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceDetailPage;
