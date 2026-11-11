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
    <Box sx={{ bgcolor: '#FDFBF7', py: { xs: 5, md: 7 } }}>
      <Container maxWidth="xl">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link to="/" style={{ color: '#757277', textDecoration: 'none', fontWeight: 600 }}>
            Home
          </Link>
          <Link to="/services" style={{ color: '#757277', textDecoration: 'none', fontWeight: 600 }}>
            Therapy Services
          </Link>
          <Typography color="#02476c" fontWeight={700}>
            {service.title}
          </Typography>
        </Breadcrumbs>

        {/* Hero Banner for this Dedicated Service */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3.5, md: 5 },
            borderRadius: 4.5,
            mb: 5,
            background: `linear-gradient(135deg, ${service.bgLight} 0%, #ffffff 80%)`,
            border: `1px solid #EFECE7`,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: service.color }} />

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    width: 58,
                    height: 58,
                    borderRadius: 3,
                    bgcolor: service.color,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 18px ${service.color}35`,
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
                      border: `1px solid ${service.borderCol}`,
                      borderRadius: 50,
                      fontSize: '0.74rem'
                    }}
                  />
                  <Typography variant="h2" fontWeight={900} color="#24102F" sx={{ fontSize: { xs: '1.8rem', sm: '2.5rem' }, fontFamily: '"Quicksand", sans-serif' }}>
                    {service.title}
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="h6"
                fontWeight={700}
                color={service.color}
                sx={{ mb: 2, fontSize: { xs: '1rem', sm: '1.15rem' }, fontFamily: '"Quicksand", sans-serif' }}
              >
                "{service.tagline}"
              </Typography>

              <Typography variant="body1" color="#757277" sx={{ lineHeight: 1.8, fontSize: '1rem', mb: 3.5, maxWidth: 780 }}>
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
                    color: '#ffffff',
                    fontWeight: 800,
                    px: 3.5,
                    py: 1.2,
                    borderRadius: 50,
                    boxShadow: 'none',
                    '&:hover': { bgcolor: service.color, filter: 'brightness(0.92)' }
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
                    borderColor: '#EFECE7',
                    color: '#24102F',
                    fontWeight: 700,
                    borderRadius: 50,
                    bgcolor: '#ffffff',
                    '&:hover': { borderColor: service.color, color: service.color, bgcolor: '#FFFAEA' }
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
                  borderRadius: 4,
                  bgcolor: '#ffffff',
                  boxShadow: '0 4px 20px rgba(2, 71, 108, 0.04)',
                  border: '1px solid #EFECE7',
                  overflow: 'hidden'
                }}
              >
                {service.image && (
                  <Box sx={{ height: 190, width: '100%', overflow: 'hidden' }}>
                    <Box
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                )}
                <Box sx={{ p: 3 }}>
                  <Typography variant="subtitle2" fontWeight={900} color="#24102F" gutterBottom sx={{ fontFamily: '"Quicksand", sans-serif' }}>
                    Program Details at a Glance
                  </Typography>
                  <Divider sx={{ my: 1.5 }} />

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, fontSize: '0.86rem' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="#757277" fontWeight={500}>Target Age:</Typography>
                      <Typography color="#24102F" fontWeight={700}>18 mos – 14 yrs</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="#757277" fontWeight={500}>Session Format:</Typography>
                      <Typography color="#24102F" fontWeight={700}>1-on-1 Individualized</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="#757277" fontWeight={500}>Session Duration:</Typography>
                      <Typography color="#24102F" fontWeight={700}>45 – 60 Minutes</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="#757277" fontWeight={500}>Milestone Review:</Typography>
                      <Typography color="#24102F" fontWeight={700}>8-Week Objective IEP</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="#757277" fontWeight={500}>Clinical Location:</Typography>
                      <Typography color="#02476c" fontWeight={800}>Fusion Homes, Gr. Noida</Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Paper>

        {/* Detailed Clinical Sections: Indications & Methods */}
        <Grid container spacing={4} sx={{ mb: 5 }}>
          {/* Left Column: Signs & Symptoms */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: { xs: 3, sm: 4 }, height: '100%', borderRadius: 4, border: '1px solid #EFECE7', bgcolor: '#ffffff' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.5 }}>
                <HelpOutlineIcon sx={{ color: service.color, fontSize: 24 }} />
                <Typography variant="h5" fontWeight={900} color="#24102F" sx={{ fontFamily: '"Quicksand", sans-serif' }}>
                  When Should A Child Seek {service.title}?
                </Typography>
              </Box>
              <Typography variant="body2" color="#757277" sx={{ mb: 3 }}>
                If you observe any of the following developmental milestones lagging behind, early intervention is strongly recommended:
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
                {service.indications.map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                    <CheckCircleOutlineIcon sx={{ color: service.color, mt: 0.2, fontSize: 18, flexShrink: 0 }} />
                    <Typography variant="body2" color="#24102F" fontWeight={500} lineHeight={1.5}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>

          {/* Right Column: Techniques & Clinical Approach */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: { xs: 3, sm: 4 }, height: '100%', borderRadius: 4, border: '1px solid #EFECE7', bgcolor: '#ffffff' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.5 }}>
                <VerifiedIcon sx={{ color: service.color, fontSize: 24 }} />
                <Typography variant="h5" fontWeight={900} color="#24102F" sx={{ fontFamily: '"Quicksand", sans-serif' }}>
                  Clinical Techniques & Tools Used
                </Typography>
              </Box>
              <Typography variant="body2" color="#757277" sx={{ mb: 3 }}>
                Our licensed pediatric therapists use evidence-backed, certified therapeutic modalities in a safe, joyful environment:
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {service.techniques.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      p: 1.8,
                      bgcolor: '#FFFAEA',
                      borderRadius: 2.5,
                      border: '1px solid #F6D469'
                    }}
                  >
                    <Typography variant="subtitle2" fontWeight={800} color="#24102F">
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
            border: '1px solid #EFECE7',
            mb: 5,
            textAlign: 'center'
          }}
        >
          <Chip label="Measurable Therapeutic Results" size="small" sx={{ bgcolor: service.bgLight, color: service.color, fontWeight: 800, mb: 1.5, borderRadius: 50 }} />
          <Typography variant="h4" fontWeight={900} color="#24102F" gutterBottom sx={{ fontSize: { xs: '1.6rem', sm: '2rem' }, fontFamily: '"Quicksand", sans-serif' }}>
            Expected Outcomes
          </Typography>
          <Typography variant="body1" fontWeight={500} color="#757277" sx={{ maxWidth: 780, mx: 'auto', mt: 1, fontSize: '1.05rem', lineHeight: 1.6 }}>
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
            borderTop: '1px solid #EFECE7'
          }}
        >
          {prevService ? (
            <Button
              component={Link}
              to={`/services/${prevService.id}`}
              startIcon={<ArrowBackIcon />}
              sx={{ fontWeight: 800, color: '#02476c', borderRadius: 50 }}
            >
              Previous: {prevService.title}
            </Button>
          ) : <Box />}

          <Button
            component={Link}
            to="/services"
            variant="outlined"
            sx={{ fontWeight: 800, color: '#02476c', borderColor: '#02476c', borderRadius: 50 }}
          >
            All 9 Therapies
          </Button>

          {nextService ? (
            <Button
              component={Link}
              to={`/services/${nextService.id}`}
              endIcon={<ArrowForwardIcon />}
              sx={{ fontWeight: 800, color: '#02476c', borderRadius: 50 }}
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