import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Rating,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsIcon from '@mui/icons-material/Directions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SpaIcon from '@mui/icons-material/Spa';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Diversity1Icon from '@mui/icons-material/Diversity1';

import { CLINIC_INFO, SERVICES_DATA, STATS_DATA, TESTIMONIALS_DATA, FAQ_DATA } from '../data/clinicData';
import ServiceCard from '../components/ServiceCard';
import MapRouting from '../components/MapRouting';
import logoImg from '../assets/logo.jpeg';

const Home = ({ onOpenAppointment }) => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const handleBookFromCard = (serviceTitle) => {
    onOpenAppointment(serviceTitle);
  };

  const handleSelectService = (service) => {
    navigate(`/services/${service.id}`);
  };

  return (
    <Box sx={{ bgcolor: '#f8fafc' }}>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #fef3c7 100%)',
          pt: { xs: 5, md: 8 },
          pb: { xs: 8, md: 10 },
          borderBottom: '1px solid #e2e8f0'
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            {/* Left Hero Content */}
            <Grid item xs={12} md={7}>
              {/* Badges */}
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                <Chip
                  icon={<FavoriteIcon sx={{ color: '#f43f5e !important' }} />}
                  label="We Care For You With ❤️"
                  sx={{
                    bgcolor: '#ffffff',
                    fontWeight: 800,
                    color: '#e11d48',
                    boxShadow: '0 4px 12px rgba(244, 63, 94, 0.15)',
                    border: '1px solid #fecdd3',
                    py: 0.5
                  }}
                />
                <Chip
                  label="Small Steps... Big Futures... ☀️"
                  sx={{
                    bgcolor: '#fef08a',
                    fontWeight: 800,
                    color: '#854d0e',
                    border: '1px solid #fde047'
                  }}
                />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.4rem', md: '4rem' },
                  fontWeight: 900,
                  lineHeight: 1.12,
                  color: '#0f172a',
                  mb: 2
                }}
              >
                CARING HANDS <br />
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #0284c7 0%, #0284c7 40%, #ea580c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Child Development
                </Box>{' '}
                Center
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: '#475569',
                  fontWeight: 500,
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  lineHeight: 1.6,
                  mb: 3.5,
                  maxWidth: 620
                }}
              >
                Nurturing every child’s unique strengths with certified clinical therapies. Specialized in <strong>Speech Therapy, Sensory Integration, Occupational Therapy, ABA & Special Education</strong> in Greater Noida West.
              </Typography>

              {/* Call to Actions */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => onOpenAppointment()}
                  startIcon={<CalendarMonthIcon />}
                  sx={{
                    px: 3.5,
                    py: 1.5,
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    borderRadius: 30
                  }}
                >
                  Book Child Assessment
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href={`tel:${CLINIC_INFO.phone}`}
                  startIcon={<PhoneIcon />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderColor: '#0284c7',
                    color: '#0284c7',
                    borderRadius: 30,
                    bgcolor: '#ffffff',
                    '&:hover': { bgcolor: '#f0f9ff', borderColor: '#0369a1' }
                  }}
                >
                  Call {CLINIC_INFO.phone}
                </Button>

                <Button
                  variant="text"
                  size="large"
                  component={Link}
                  to="/contact#map"
                  startIcon={<DirectionsIcon />}
                  sx={{
                    fontWeight: 700,
                    color: '#334155',
                    '&:hover': { color: '#0284c7' }
                  }}
                >
                  Find Us On Map
                </Button>
              </Box>

              {/* Verified Trust Badges */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <VerifiedIcon sx={{ color: '#16a34a', fontSize: 20 }} />
                  <Typography variant="caption" fontWeight={700} color="#334155">
                    Certified Pediatric Therapists
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <VerifiedIcon sx={{ color: '#0284c7', fontSize: 20 }} />
                  <Typography variant="caption" fontWeight={700} color="#334155">
                    Equipped Sensory Gym
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <VerifiedIcon sx={{ color: '#ea580c', fontSize: 20 }} />
                  <Typography variant="caption" fontWeight={700} color="#334155">
                    Individualized IEP Plans
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Hero Card Showcase */}
            <Grid item xs={12} md={5}>
              <Box sx={{ position: 'relative' }}>
                {/* Visual Card Stack */}
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, sm: 4 },
                    borderRadius: 5,
                    bgcolor: '#ffffff',
                    boxShadow: '0 20px 50px rgba(2, 132, 199, 0.15)',
                    border: '3px solid #e0f2fe',
                    position: 'relative'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        component="img"
                        src={logoImg}
                        alt="Caring Hands Logo"
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          objectFit: 'contain',
                          border: '2px solid #bae6fd',
                          p: 0.3,
                          bgcolor: '#ffffff'
                        }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={800} color="#0284c7">
                          Greater Noida West Hub
                        </Typography>
                        <Typography variant="caption" color="#64748b" fontWeight={600}>
                          G-104, Fusion Homes, Amrapali Dream Valley
                        </Typography>
                      </Box>
                    </Box>
                    <Chip label="Active Clinic" color="success" size="small" sx={{ fontWeight: 700 }} />
                  </Box>

                  <Typography variant="body2" color="#334155" sx={{ mb: 2.5, lineHeight: 1.6 }}>
                    Every child deserves a caring environment to bloom. Our integrated center combines speech, sensory integration, occupational therapy, and behavioral guidance under one roof.
                  </Typography>

                  {/* Highlights Grid */}
                  <Grid container spacing={1.5} sx={{ mb: 3 }}>
                    <Grid item xs={6}>
                      <Box sx={{ p: 1.5, bgcolor: '#f0fdf4', borderRadius: 2.5, border: '1px solid #bbf7d0' }}>
                        <Typography variant="caption" fontWeight={800} color="#15803d" display="block">
                          SPEECH & OPT LAB
                        </Typography>
                        <Typography variant="body2" fontWeight={700} color="#0f172a">
                          Muscle tone & articulation
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ p: 1.5, bgcolor: '#fff7ed', borderRadius: 2.5, border: '1px solid #fed7aa' }}>
                        <Typography variant="caption" fontWeight={800} color="#c2410c" display="block">
                          SENSORY GYM
                        </Typography>
                        <Typography variant="body2" fontWeight={700} color="#0f172a">
                          Swings, crash pads, climbing
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ p: 1.5, bgcolor: '#faf5ff', borderRadius: 2.5, border: '1px solid #e9d5ff' }}>
                        <Typography variant="caption" fontWeight={800} color="#7e22ce" display="block">
                          OCCUPATIONAL THERAPY
                        </Typography>
                        <Typography variant="body2" fontWeight={700} color="#0f172a">
                          Fine motor & handwriting
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ p: 1.5, bgcolor: '#fdf2f8', borderRadius: 2.5, border: '1px solid #fbcfe8' }}>
                        <Typography variant="caption" fontWeight={800} color="#be185d" display="block">
                          ABA & SPECIAL ED
                        </Typography>
                        <Typography variant="body2" fontWeight={700} color="#0f172a">
                          Positive progress & IEP
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* Direct Contact Phone Box */}
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: '#0f172a',
                      borderRadius: 3,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600 }}>
                        CLINICAL HELPLINE (DIRECT)
                      </Typography>
                      <Typography variant="h6" fontWeight={900} color="#38bdf8">
                        Mob: {CLINIC_INFO.displayPhone}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      size="small"
                      component="a"
                      href={`https://wa.me/91${CLINIC_INFO.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<WhatsAppIcon />}
                      sx={{ bgcolor: '#22c55e', '&:hover': { bgcolor: '#16a34a' }, fontWeight: 700 }}
                    >
                      Chat
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= STATS COUNTER STRIP ================= */}
      <Box sx={{ bgcolor: '#ffffff', py: 4, borderBottom: '1px solid #e2e8f0' }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} justifyContent="center">
            {STATS_DATA.map((stat, idx) => (
              <Grid item xs={6} sm={3} key={idx}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 900,
                      color: stat.color,
                      fontSize: { xs: '2rem', sm: '2.8rem' }
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" fontWeight={700} color="#475569">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= 9 CORE SERVICES (FROM FLYER) ================= */}
      <Box sx={{ py: { xs: 8, md: 10 } }} id="services">
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', maxWidth: 780, mx: 'auto', mb: 6 }}>
            <Chip
              label="Our Clinical Services"
              color="primary"
              size="small"
              sx={{ fontWeight: 800, mb: 1.5, px: 1 }}
            />
            <Typography variant="h2" sx={{ fontWeight: 900, color: '#0f172a', mb: 2 }}>
              Comprehensive Pediatric Therapies
            </Typography>
            <Typography variant="body1" color="#64748b" sx={{ fontSize: '1.1rem' }}>
              Designed around the 9 specialized care pillars featured at Caring Hands Child Development Center. Each program is tailored by licensed specialists for your child's developmental leap.
            </Typography>
          </Box>

          {/* 9 Services Grid */}
          <Grid container spacing={3.5}>
            {SERVICES_DATA.map((service) => (
              <Grid item xs={12} sm={6} lg={4} key={service.id}>
                <ServiceCard
                  service={service}
                  onBook={handleBookFromCard}
                  onSelect={handleSelectService}
                />
              </Grid>
            ))}
          </Grid>

          {/* Bottom explore banner */}
          <Box
            sx={{
              mt: 6,
              p: 3,
              borderRadius: 4,
              bgcolor: '#e0f2fe',
              border: '1px solid #bae6fd',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2
            }}
          >
            <Box>
              <Typography variant="subtitle1" fontWeight={800} color="#0369a1">
                Not sure which therapy is right for your child?
              </Typography>
              <Typography variant="body2" color="#0c4a6e">
                Schedule a comprehensive baseline multidisciplinary evaluation with our clinical team.
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={() => onOpenAppointment('Comprehensive Multi-Disciplinary Evaluation')}
              sx={{ fontWeight: 700, bgcolor: '#0284c7', px: 3, py: 1 }}
            >
              Get Evaluation Guidance
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ================= WHY CHOOSE CARING HANDS ================= */}
      <Box sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 10 }, borderTop: '1px solid #e2e8f0' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Chip label="The Caring Hands Standard" size="small" sx={{ bgcolor: '#fef08a', color: '#854d0e', fontWeight: 800, mb: 1.5 }} />
              <Typography variant="h2" fontWeight={900} color="#0f172a" sx={{ mb: 2.5 }}>
                Why Families Trust Our Child Development Center
              </Typography>
              <Typography variant="body1" color="#475569" sx={{ mb: 4, lineHeight: 1.7, fontSize: '1.05rem' }}>
                We believe that every child is unique, with their own learning rhythm and potential. Our center is purpose-built to eliminate therapy anxiety through gentle, play-based methodologies and family-centered coaching.
              </Typography>

              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <Box sx={{ width: 42, height: 42, borderRadius: 2, bgcolor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <PsychologyIcon />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={800} color="#0f172a">
                        Multi-Disciplinary Team
                      </Typography>
                      <Typography variant="body2" color="#64748b">
                        Speech pathologists, OT, ABA analysts & special educators all in one hub.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <Box sx={{ width: 42, height: 42, borderRadius: 2, bgcolor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <SpaIcon />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={800} color="#0f172a">
                        Equipped Sensory Gym
                      </Typography>
                      <Typography variant="body2" color="#64748b">
                        Suspended swings, vestibular gear, tactile walls and crash mats.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <Box sx={{ width: 42, height: 42, borderRadius: 2, bgcolor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <AutoAwesomeIcon />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={800} color="#0f172a">
                        Individualized IEP
                      </Typography>
                      <Typography variant="body2" color="#64748b">
                        Measurable targets updated every 8 weeks with objective progress reports.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <Box sx={{ width: 42, height: 42, borderRadius: 2, bgcolor: '#fce7f3', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Diversity1Icon />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={800} color="#0f172a">
                        Parent Empowerment
                      </Typography>
                      <Typography variant="body2" color="#64748b">
                        Direct parent counseling, home activities and routine guidance.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Testimonials / Parent Quotes */}
            <Grid item xs={12} lg={6}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 4,
                  bgcolor: '#f8fafc',
                  border: '2px solid #e2e8f0'
                }}
              >
                <Typography variant="h5" fontWeight={900} color="#0f172a" sx={{ mb: 1 }}>
                  Heartfelt Words From Parents
                </Typography>
                <Typography variant="body2" color="#64748b" sx={{ mb: 3 }}>
                  Real stories of progress and smiles from families attending our Greater Noida West center.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {TESTIMONIALS_DATA.map((t, idx) => (
                    <Card
                      key={idx}
                      sx={{
                        p: 2.5,
                        borderRadius: 3,
                        boxShadow: 'none',
                        border: '1px solid #e2e8f0',
                        bgcolor: '#ffffff'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                        <Rating value={t.rating} readOnly size="small" />
                        <Chip label={t.service} size="small" sx={{ fontSize: '0.7rem', fontWeight: 700 }} />
                      </Box>
                      <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#334155', mb: 1.5, lineHeight: 1.6 }}>
                        "{t.quote}"
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ width: 34, height: 34, bgcolor: '#0284c7', fontSize: '0.85rem', fontWeight: 700 }}>
                          {t.parent[0]}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" fontWeight={800} color="#0f172a" lineHeight={1.1}>
                            {t.parent}
                          </Typography>
                          <Typography variant="caption" color="#64748b">
                            {t.childAge}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= INTERACTIVE MAP ROUTING SECTION ================= */}
      <Box sx={{ py: { xs: 8, md: 10 } }} id="map">
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', maxWidth: 780, mx: 'auto', mb: 4 }}>
            <Chip
              icon={<DirectionsIcon />}
              label="Live Map Routing & Directions"
              color="primary"
              size="small"
              sx={{ fontWeight: 800, mb: 1.5, px: 1 }}
            />
            <Typography variant="h2" sx={{ fontWeight: 900, color: '#0f172a', mb: 2 }}>
              Visit Our Center in Greater Noida West
            </Typography>
            <Typography variant="body1" color="#64748b" sx={{ fontSize: '1.1rem' }}>
              Conveniently located at <strong>G-104, Fusion Homes, Amrapali Dream Valley</strong>. Calculate your live route from Gaur City, Indirapuram, Noida Metro, or your live GPS location.
            </Typography>
          </Box>

          {/* Interactive Leaflet Map Routing Component */}
          <MapRouting />
        </Container>
      </Box>

      {/* ================= FAQ SECTION ================= */}
      <Box sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 10 }, borderTop: '1px solid #e2e8f0' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Chip label="Got Questions?" size="small" sx={{ bgcolor: '#e0f2fe', color: '#0369a1', fontWeight: 800, mb: 1.5 }} />
            <Typography variant="h2" fontWeight={900} color="#0f172a" sx={{ mb: 2 }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" color="#64748b">
              Everything you need to know about starting your child's therapy journey at Caring Hands.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {FAQ_DATA.map((faq, idx) => (
              <Accordion
                key={idx}
                elevation={0}
                sx={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px !important',
                  '&:before': { display: 'none' },
                  overflow: 'hidden'
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#0284c7' }} />}>
                  <Typography variant="subtitle1" fontWeight={800} color="#0f172a">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 2.5, color: '#475569', lineHeight: 1.7 }}>
                  <Typography variant="body2">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ================= BOTTOM CTA BANNER ================= */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 60%, #0f172a 100%)',
          color: '#ffffff',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={900} sx={{ mb: 2, fontSize: { xs: '2rem', sm: '2.8rem' } }}>
            "Every Child Matters ❤️"
          </Typography>
          <Typography variant="body1" sx={{ color: '#e0f2fe', fontSize: '1.15rem', mb: 4, maxWidth: 650, mx: 'auto' }}>
            Early intervention brings lifelong progress. Speak directly with our clinical coordinator or book an in-person assessment today.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => onOpenAppointment()}
              startIcon={<CalendarMonthIcon />}
              sx={{ px: 4, py: 1.4, fontWeight: 800, fontSize: '1.05rem', borderRadius: 30 }}
            >
              Schedule Initial Consultation
            </Button>
            <Button
              variant="outlined"
              size="large"
              component="a"
              href={`tel:${CLINIC_INFO.phone}`}
              startIcon={<PhoneIcon />}
              sx={{
                px: 3.5,
                py: 1.4,
                fontWeight: 700,
                color: '#ffffff',
                borderColor: '#ffffff',
                borderRadius: 30,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: '#ffffff' }
              }}
            >
              Call {CLINIC_INFO.phone}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ================= SERVICE DETAIL MODAL ================= */}
      {selectedService && (
        <Dialog
          open={Boolean(selectedService)}
          onClose={() => setSelectedService(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{ sx: { borderRadius: 4, p: 1 } }}
        >
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: selectedService.color
                }}
              />
              <Typography variant="h5" fontWeight={800} color="#0f172a">
                {selectedService.title}
              </Typography>
            </Box>
            <IconButton onClick={() => setSelectedService(null)}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent dividers sx={{ py: 3 }}>
            <Chip
              label={selectedService.tagline}
              sx={{
                bgcolor: selectedService.bgLight,
                color: selectedService.color,
                fontWeight: 800,
                mb: 2,
                fontSize: '0.85rem'
              }}
            />

            <Typography variant="body1" color="#334155" sx={{ mb: 3, lineHeight: 1.7 }}>
              {selectedService.overview}
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper elevation={0} sx={{ p: 2.5, bgcolor: '#f8fafc', borderRadius: 3, border: '1px solid #e2e8f0', height: '100%' }}>
                  <Typography variant="subtitle2" fontWeight={800} color="#0f172a" sx={{ mb: 1.5 }}>
                    Signs Your Child May Benefit:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0, fontSize: '0.88rem', color: '#475569', lineHeight: 1.7 }}>
                    {selectedService.indications.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Paper elevation={0} sx={{ p: 2.5, bgcolor: '#f8fafc', borderRadius: 3, border: '1px solid #e2e8f0', height: '100%' }}>
                  <Typography variant="subtitle2" fontWeight={800} color="#0f172a" sx={{ mb: 1.5 }}>
                    Clinical Techniques Used:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0, fontSize: '0.88rem', color: '#475569', lineHeight: 1.7 }}>
                    {selectedService.techniques.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, p: 2, borderRadius: 2.5, bgcolor: selectedService.bgLight, border: `1px solid ${selectedService.borderCol}` }}>
              <Typography variant="caption" fontWeight={800} color={selectedService.color} display="block">
                EXPECTED THERAPEUTIC OUTCOMES:
              </Typography>
              <Typography variant="body2" fontWeight={700} color="#0f172a">
                {selectedService.outcomes}
              </Typography>
            </Box>
          </DialogContent>

          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button onClick={() => setSelectedService(null)} sx={{ color: '#64748b' }}>
              Close
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                const sName = selectedService.title;
                setSelectedService(null);
                onOpenAppointment(sName);
              }}
              startIcon={<CalendarMonthIcon />}
              sx={{ bgcolor: selectedService.color, fontWeight: 700 }}
            >
              Book {selectedService.title}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Home;
