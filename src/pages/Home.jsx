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
  Stack,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsIcon from '@mui/icons-material/Directions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SpaIcon from '@mui/icons-material/Spa';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import {
  CLINIC_INFO,
  SERVICES_DATA,
  STATS_DATA,
  TESTIMONIALS_DATA,
  FAQ_DATA,
  WE_CARE_ABOUT,
  TRUST_PROJECTS,
  BANK_DETAILS
} from '../data/clinicData';
import ServiceCard from '../components/ServiceCard';
import MapRouting from '../components/MapRouting';
import logoImg from '../assets/logo.jpeg';

// Icon mapper for "We Care About"
const weCareIcons = {
  ChildFriendly: <ChildFriendlyIcon sx={{ fontSize: 26 }} />,
  MenuBook: <MenuBookIcon sx={{ fontSize: 26 }} />,
  RecordVoiceOver: <RecordVoiceOverIcon sx={{ fontSize: 26 }} />,
  Spa: <SpaIcon sx={{ fontSize: 26 }} />,
  FamilyRestroom: <FamilyRestroomIcon sx={{ fontSize: 26 }} />
};

const Home = ({ onOpenAppointment }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const handleBookFromCard = (serviceTitle) => {
    onOpenAppointment(serviceTitle);
  };

  const handleSelectService = (service) => {
    navigate(`/services/${service.id}`);
  };

  // Filter services by category for simple browsing
  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'speech') return s.id === 'speech-therapy' || s.id === 'oral-placement-therapy';
    if (activeCategory === 'sensory') return s.id === 'sensory-integration-therapy' || s.id === 'occupational-therapy';
    if (activeCategory === 'behavior') return s.id === 'aba-therapy' || s.id === 'group-therapy' || s.id === 'parental-counseling';
    if (activeCategory === 'special-ed') return s.id === 'special-education' || s.id === 'neurological-conditions';
    return true;
  });

  return (
    <Box sx={{ bgcolor: '#FDFBF7', overflow: 'hidden' }}>
      {/* ================= HERO SECTION (CARING HANDS THEME) ================= */}
      <Box
        className="caring-hero-bg"
        sx={{
          position: 'relative',
          pt: { xs: 5, md: 8 },
          pb: { xs: 8, md: 10 },
          borderBottom: '1px solid #EFECE7'
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, lg: 6 }} alignItems="center">
            {/* Left Hero Content */}
            <Grid item xs={12} lg={7}>
              {/* Caring Hands Tagline Badge */}
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.2, mb: 2.5, flexWrap: 'wrap' }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.8,
                    py: 0.7,
                    borderRadius: 50,
                    bgcolor: '#F6D469', // Caring Hands golden yellow
                    color: '#24102F',
                    boxShadow: '0 2px 10px rgba(246, 212, 105, 0.35)'
                  }}
                >
                  <VolunteerActivismIcon sx={{ fontSize: 16, color: '#02476c' }} />
                  <Typography variant="caption" sx={{ fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Give a Helping Hand for a Child ☀️
                  </Typography>
                </Box>

                <Chip
                  icon={<FavoriteIcon sx={{ color: '#FF1C74 !important', fontSize: 15 }} />}
                  label="We Care For You With ❤️"
                  size="small"
                  sx={{
                    bgcolor: '#ffffff',
                    color: '#02476c',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    border: '1px solid #EFECE7'
                  }}
                />
              </Box>

              {/* Main Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"Quicksand", sans-serif',
                  fontSize: { xs: '2.4rem', sm: '3.3rem', md: '3.9rem' },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: '#24102F',
                  mb: 2.5,
                  letterSpacing: '-0.02em'
                }}
              >
                Let’s Bring Every Child’s Milestones Into the{' '}
                <Box
                  component="span"
                  sx={{
                    color: '#02476c',
                    borderBottom: '4px solid #F6D469',
                    pb: 0.5
                  }}
                >
                  Mainstream
                </Box>
              </Typography>

              {/* Caring Hands Mission Quote */}
              <Typography
                variant="body1"
                sx={{
                  color: '#757277',
                  fontSize: { xs: '1.05rem', sm: '1.18rem' },
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: 630
                }}
              >
                At <strong>Caring Hands</strong>, we believe there is always hope to rewrite destinies. Dedicated to nurturing young potential with evidence-based pediatric therapies: <strong>Speech Therapy, Sensory Integration, Occupational Therapy, ABA & Special Education</strong> in Greater Noida West.
              </Typography>

              {/* Call to Actions with Caring Hands Signature Yellow Button */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4.5, alignItems: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => onOpenAppointment()}
                  startIcon={<CalendarMonthIcon sx={{ color: '#24102F' }} />}
                  sx={{
                    bgcolor: '#F6D469',
                    color: '#24102F',
                    px: 3.8,
                    py: 1.4,
                    fontSize: '1rem',
                    fontWeight: 800,
                    borderRadius: 100,
                    boxShadow: '0 4px 16px rgba(246, 212, 105, 0.45)',
                    '&:hover': { bgcolor: '#FCB720' }
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
                    py: 1.4,
                    fontSize: '0.96rem',
                    fontWeight: 700,
                    borderColor: '#02476c',
                    color: '#02476c',
                    borderRadius: 100,
                    bgcolor: '#ffffff',
                    '&:hover': { bgcolor: 'rgba(2, 71, 108, 0.05)', borderColor: '#01324d' }
                  }}
                >
                  Call: {CLINIC_INFO.displayPhone}
                </Button>

                <Button
                  variant="text"
                  component={Link}
                  to="/services"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    fontWeight: 700,
                    color: '#02476c',
                    fontSize: '0.95rem',
                    '&:hover': { bgcolor: 'transparent', color: '#E76100', textDecoration: 'underline' }
                  }}
                >
                  Explore 9 Therapies
                </Button>
              </Box>

              {/* Minimalist Trust Badges */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 3 }, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <CheckCircleIcon sx={{ color: '#59C36A', fontSize: 18 }} />
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#24102F', fontSize: '0.86rem' }}>
                    Certified Pediatric Specialists
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <CheckCircleIcon sx={{ color: '#02476c', fontSize: 18 }} />
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#24102F', fontSize: '0.86rem' }}>
                    Modern Sensory Gym & OPT Lab
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <CheckCircleIcon sx={{ color: '#E76100', fontSize: 18 }} />
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#24102F', fontSize: '0.86rem' }}>
                    Individualized 8-Week IEPs
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Hero Card Showcase */}
            <Grid item xs={12} lg={5}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 4.5,
                  bgcolor: '#ffffff',
                  boxShadow: '0 20px 45px rgba(36, 16, 47, 0.08)',
                  border: '1px solid #EFECE7',
                  position: 'relative'
                }}
              >
                {/* Top Header Row */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      component="img"
                      src={logoImg}
                      alt="Caring Hands Logo"
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        objectFit: 'contain',
                        border: '2px solid #F6D469',
                        p: 0.3,
                        bgcolor: '#ffffff'
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={800} color="#02476c" lineHeight={1.2}>
                        Caring Hands Hub
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOnIcon sx={{ fontSize: 14, color: '#FF1C74' }} />
                        <Typography variant="caption" color="#757277" fontWeight={600}>
                          G-104 Fusion Homes, Greater Noida West
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Chip
                    label="Center Active"
                    size="small"
                    sx={{ bgcolor: '#dcfce7', color: '#15803d', fontWeight: 700, borderRadius: 50, fontSize: '0.72rem' }}
                  />
                </Box>

                {/* Rating Badge Banner */}
                <Box
                  sx={{
                    p: 2,
                    bgcolor: '#FFFAEA',
                    borderRadius: 3,
                    border: '1px solid #F6D469',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 3
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        bgcolor: '#F6D469',
                        color: '#24102F',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800
                      }}
                    >
                      <StarIcon sx={{ fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" fontWeight={800} color="#24102F" lineHeight={1.1}>
                        4.9 / 5.0 Star Parent Rating
                      </Typography>
                      <Typography variant="caption" color="#757277">
                        150+ Families Supported & Thriving
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={5} readOnly size="small" />
                </Box>

                {/* Core 4 Therapy Pillars Preview */}
                <Typography variant="caption" sx={{ fontWeight: 800, color: '#AA96B4', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', mb: 1.5 }}>
                  Available Specialized Wings
                </Typography>

                <Grid container spacing={1.5} sx={{ mb: 3 }}>
                  <Grid item xs={6}>
                    <Box
                      component={Link}
                      to="/services/speech-therapy"
                      sx={{
                        p: 1.6,
                        bgcolor: '#f0f9ff',
                        borderRadius: 2.5,
                        border: '1px solid #bae6fd',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'all 0.2s',
                        '&:hover': { bgcolor: '#e0f2fe' }
                      }}
                    >
                      <Typography variant="caption" fontWeight={800} color="#02476c" display="block">
                        SPEECH & OPT LAB
                      </Typography>
                      <Typography variant="body2" fontWeight={700} color="#24102F" sx={{ fontSize: '0.82rem' }}>
                        Clarity & Oral Muscles
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box
                      component={Link}
                      to="/services/sensory-integration-therapy"
                      sx={{
                        p: 1.6,
                        bgcolor: '#fff7ed',
                        borderRadius: 2.5,
                        border: '1px solid #fed7aa',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'all 0.2s',
                        '&:hover': { bgcolor: '#ffedd5' }
                      }}
                    >
                      <Typography variant="caption" fontWeight={800} color="#E76100" display="block">
                        SENSORY GYM
                      </Typography>
                      <Typography variant="body2" fontWeight={700} color="#24102F" sx={{ fontSize: '0.82rem' }}>
                        Swings & Equilibrium
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box
                      component={Link}
                      to="/services/occupational-therapy"
                      sx={{
                        p: 1.6,
                        bgcolor: '#faf5ff',
                        borderRadius: 2.5,
                        border: '1px solid #e9d5ff',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'all 0.2s',
                        '&:hover': { bgcolor: '#f3e8ff' }
                      }}
                    >
                      <Typography variant="caption" fontWeight={800} color="#7c3aed" display="block">
                        OCCUPATIONAL THERAPY
                      </Typography>
                      <Typography variant="body2" fontWeight={700} color="#24102F" sx={{ fontSize: '0.82rem' }}>
                        Pencil Grip & Daily Tasks
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box
                      component={Link}
                      to="/services/aba-therapy"
                      sx={{
                        p: 1.6,
                        bgcolor: '#f0fdf4',
                        borderRadius: 2.5,
                        border: '1px solid #bbf7d0',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'all 0.2s',
                        '&:hover': { bgcolor: '#dcfce7' }
                      }}
                    >
                      <Typography variant="caption" fontWeight={800} color="#16a34a" display="block">
                        ABA & SPECIAL ED
                      </Typography>
                      <Typography variant="body2" fontWeight={700} color="#24102F" sx={{ fontSize: '0.82rem' }}>
                        Positive Behavior & IEP
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* Direct Contact Footer */}
                <Box
                  sx={{
                    p: 2,
                    bgcolor: '#02476c',
                    borderRadius: 3,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2
                  }}
                >
                  <Box>
                    <Typography variant="caption" sx={{ color: '#F6D469', fontWeight: 700, textTransform: 'uppercase' }}>
                      CLINICAL HELPLINE
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={800} color="#ffffff" lineHeight={1.1}>
                      {CLINIC_INFO.displayPhone}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    component="a"
                    href={`https://wa.me/91${CLINIC_INFO.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<WhatsAppIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      bgcolor: '#59C36A',
                      color: '#ffffff',
                      '&:hover': { bgcolor: '#22c55e' },
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      px: 2,
                      borderRadius: 100
                    }}
                  >
                    WhatsApp
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= STATS COUNTER STRIP ================= */}
      <Box sx={{ bgcolor: '#ffffff', py: 4.5, borderBottom: '1px solid #EFECE7' }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            {STATS_DATA.map((stat, idx) => (
              <Grid item xs={6} sm={3} key={idx}>
                <Box sx={{ textAlign: 'center', px: 1 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontWeight: 800,
                      color: stat.color,
                      fontSize: { xs: '2.2rem', sm: '2.8rem' },
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      mb: 0.5
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" fontWeight={700} color="#757277" sx={{ fontSize: { xs: '0.85rem', sm: '0.92rem' } }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= "WE CARE ABOUT" SECTION (FROM CARINGHANDS.ORG.IN) ================= */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#FFFAEA' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', maxWidth: 780, mx: 'auto', mb: 6 }}>
            <Box sx={{ display: 'inline-block', mb: 1.5 }}>
              <Typography
                variant="caption"
                sx={{
                  bgcolor: '#F6D469',
                  color: '#24102F',
                  px: 2,
                  py: 0.6,
                  borderRadius: 50,
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                ABOUT CARING HANDS
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 800, color: '#24102F', mb: 1.8, fontSize: { xs: '2.2rem', sm: '2.8rem' } }}>
              We Care About...
            </Typography>
            <Typography variant="body1" color="#757277" sx={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              Inspired by the guiding principles of Caring Hands (caringhands.org.in), we empower children and families with compassionate care, dignity, and developmental triumphs.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {WE_CARE_ABOUT.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid #EFECE7',
                    bgcolor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 32px rgba(2, 71, 108, 0.1)',
                      borderColor: item.color
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 3,
                      bgcolor: item.bg,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2
                    }}
                  >
                    {weCareIcons[item.icon] || <SpaIcon />}
                  </Box>

                  <Typography variant="subtitle1" fontWeight={800} color="#24102F" sx={{ mb: 0.8, lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>

                  <Typography variant="caption" sx={{ color: item.color, fontWeight: 700, mb: 1.2, display: 'block' }}>
                    {item.subtitle}
                  </Typography>

                  <Typography variant="body2" color="#757277" sx={{ fontSize: '0.84rem', lineHeight: 1.6, flexGrow: 1 }}>
                    {item.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= 9 CORE CLINICAL THERAPIES ================= */}
      <Box sx={{ py: { xs: 8, md: 10 } }} id="services">
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto', mb: 5 }}>
            <Chip
              label="Specialized Pediatric Care"
              sx={{ bgcolor: '#e0f2fe', color: '#02476c', fontWeight: 800, mb: 1.5, px: 1 }}
            />
            <Typography variant="h2" sx={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 800, color: '#24102F', mb: 1.8, fontSize: { xs: '2rem', sm: '2.6rem' } }}>
              Our 9 Core Therapy Programs
            </Typography>
            <Typography variant="body1" color="#757277" sx={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              Tailored by licensed speech-language pathologists, occupational therapists, and behavioral specialists to help every child unlock their developmental leap.
            </Typography>

            {/* Category Filter Pills */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3, flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Programs (9)' },
                { id: 'speech', label: 'Speech & OPT' },
                { id: 'sensory', label: 'Sensory & OT' },
                { id: 'behavior', label: 'Behavior & Group' },
                { id: 'special-ed', label: 'Special Ed & Neuro' }
              ].map((cat) => (
                <Chip
                  key={cat.id}
                  label={cat.label}
                  onClick={() => setActiveCategory(cat.id)}
                  clickable
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    py: 1.1,
                    px: 0.8,
                    borderRadius: 100,
                    bgcolor: activeCategory === cat.id ? '#02476c' : '#ffffff',
                    color: activeCategory === cat.id ? '#ffffff' : '#24102F',
                    border: '1px solid',
                    borderColor: activeCategory === cat.id ? '#02476c' : '#EFECE7',
                    transition: 'all 0.2s',
                    '&:hover': {
                      bgcolor: activeCategory === cat.id ? '#01324d' : '#FFFAEA'
                    }
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={3.5}>
            {filteredServices.map((service) => (
              <Grid item xs={12} sm={6} lg={4} key={service.id}>
                <ServiceCard
                  service={service}
                  onBook={handleBookFromCard}
                  onSelect={handleSelectService}
                />
              </Grid>
            ))}
          </Grid>

          {/* Baseline Evaluation Banner */}
          <Box
            sx={{
              mt: 6,
              p: { xs: 3, sm: 4 },
              borderRadius: 4,
              bgcolor: '#ffffff',
              border: '1px solid #EFECE7',
              boxShadow: '0 4px 20px rgba(36, 16, 47, 0.04)',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: 2.5
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={800} color="#24102F" sx={{ mb: 0.5 }}>
                Unsure which therapy fits your child best?
              </Typography>
              <Typography variant="body2" color="#757277">
                Schedule a comprehensive multidisciplinary evaluation. Our team will assess milestones and formulate a personalized 8-week developmental roadmap.
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={() => onOpenAppointment('Comprehensive Multi-Disciplinary Evaluation')}
              sx={{
                bgcolor: '#02476c',
                fontWeight: 700,
                px: 3.5,
                py: 1.2,
                whiteSpace: 'nowrap',
                borderRadius: 100,
                '&:hover': { bgcolor: '#01324d' }
              }}
            >
              Get Evaluation Guidance
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ================= COMMUNITY PROJECTS & IMPACT ECOSYSTEM (FROM CARINGHANDS.ORG.IN) ================= */}
      <Box sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 10 }, borderTop: '1px solid #EFECE7' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto', mb: 6 }}>
            <Chip
              label="Our Broader Trust Footprint"
              sx={{ bgcolor: '#F6D469', color: '#24102F', fontWeight: 800, mb: 1.5, px: 1 }}
            />
            <Typography variant="h2" sx={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 800, color: '#24102F', mb: 1.5, fontSize: { xs: '2rem', sm: '2.6rem' } }}>
              Caring Hands Projects & Initiatives
            </Typography>
            <Typography variant="body1" color="#757277" sx={{ fontSize: '1.05rem' }}>
              Beyond pediatric clinical therapy in Greater Noida West, Caring Hands Trust operates grassroots shelters, schools, and elder homes across Maharashtra.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {TRUST_PROJECTS.map((proj) => (
              <Grid item xs={12} sm={6} md={4} key={proj.id}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 3.5,
                    border: '1px solid #EFECE7',
                    bgcolor: '#FDFBF7',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s',
                    '&:hover': { transform: 'translateY(-4px)', borderColor: proj.color, bgcolor: '#ffffff' }
                  }}
                >
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                      <Chip
                        label={proj.tag}
                        size="small"
                        sx={{ bgcolor: '#ffffff', color: proj.color, fontWeight: 700, border: '1px solid #EFECE7', fontSize: '0.74rem' }}
                      />
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: proj.color }} />
                    </Box>

                    <Typography variant="h6" fontWeight={800} color="#24102F" sx={{ mb: 1, fontSize: '1.15rem' }}>
                      {proj.title}
                    </Typography>

                    <Typography variant="body2" color="#757277" sx={{ lineHeight: 1.6, mb: 2 }}>
                      {proj.desc}
                    </Typography>
                  </Box>

                  <Box sx={{ pt: 1.5, borderTop: '1px solid #EFECE7', display: 'flex', alignItems: 'center', gap: 0.8 }}>
                    <LocationOnIcon sx={{ fontSize: 16, color: proj.color }} />
                    <Typography variant="caption" fontWeight={600} color="#757277">
                      {proj.location}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= TESTIMONIALS & CHANGING DESTINIES (FROM CARINGHANDS.ORG.IN) ================= */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#FFFAEA', borderTop: '1px solid #EFECE7' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto', mb: 6 }}>
            <Typography variant="caption" sx={{ color: '#02476c', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              TESTIMONIALS & STORIES OF HOPE
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 800, color: '#24102F', mt: 1, mb: 1.5, fontSize: { xs: '2rem', sm: '2.6rem' } }}>
              Changing Destinies...
            </Typography>
            <Typography variant="body1" color="#757277">
              Real stories of progress and smiles from families attending our Greater Noida West center and community initiatives.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {TESTIMONIALS_DATA.map((t, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card
                  sx={{
                    p: 3.5,
                    height: '100%',
                    borderRadius: 4,
                    bgcolor: '#ffffff',
                    border: '1px solid #EFECE7',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 15px rgba(36, 16, 47, 0.04)'
                  }}
                >
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Rating value={t.rating} readOnly size="small" />
                      <Chip
                        label={t.service}
                        size="small"
                        sx={{ bgcolor: '#FFFAEA', color: '#854d0e', fontWeight: 700, fontSize: '0.72rem', border: '1px solid #F6D469' }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ color: '#24102F', fontStyle: 'italic', lineHeight: 1.7, mb: 3 }}>
                      "{t.quote}"
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pt: 2, borderTop: '1px solid #EFECE7' }}>
                    <Avatar sx={{ width: 40, height: 40, bgcolor: '#02476c', color: '#ffffff', fontWeight: 700 }}>
                      {t.parent[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={800} color="#24102F" lineHeight={1.1}>
                        {t.parent}
                      </Typography>
                      <Typography variant="caption" color="#757277">
                        {t.childAge}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= HELP THE CAUSE & TRANSPARENCY (FROM CARINGHANDS.ORG.IN) ================= */}
      <Box sx={{ bgcolor: '#ffffff', py: { xs: 6, md: 8 }, borderTop: '1px solid #EFECE7' }}>
        <Container maxWidth="xl">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4.5,
              background: 'linear-gradient(135deg, #02476c 0%, #01324d 100%)',
              color: '#ffffff'
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Chip
                  label="Caring Hands Trust Verification"
                  sx={{ bgcolor: '#F6D469', color: '#24102F', fontWeight: 800, mb: 2 }}
                />
                <Typography variant="h3" fontWeight={800} sx={{ fontFamily: '"Quicksand", sans-serif', color: '#ffffff', mb: 1.5, fontSize: { xs: '1.8rem', sm: '2.3rem' } }}>
                  Let’s Bridge the Gaps Together
                </Typography>
                <Typography variant="body1" sx={{ color: '#EFECE7', lineHeight: 1.7, mb: 3 }}>
                  Join our pediatric therapy & child rehabilitation mission. Every child deserves equal access to clinical therapies regardless of background.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => onOpenAppointment()}
                    sx={{
                      bgcolor: '#F6D469',
                      color: '#24102F',
                      fontWeight: 800,
                      borderRadius: 100,
                      px: 3.5,
                      '&:hover': { bgcolor: '#FCB720' }
                    }}
                  >
                    Schedule Assessment
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    component="a"
                    href={`tel:${CLINIC_INFO.phone}`}
                    sx={{
                      borderColor: '#ffffff',
                      color: '#ffffff',
                      fontWeight: 700,
                      borderRadius: 100,
                      px: 3,
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: '#ffffff' }
                    }}
                  >
                    Helpline: {CLINIC_INFO.phone}
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12} md={5}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3.5,
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <AccountBalanceIcon sx={{ color: '#F6D469' }} />
                    <Typography variant="subtitle1" fontWeight={800} color="#F6D469">
                      Official Trust Account Details
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, fontSize: '0.88rem' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#cbd5e1' }}>A/c Name:</Typography>
                      <Typography fontWeight={700}>{BANK_DETAILS.accountName}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#cbd5e1' }}>Bank & Branch:</Typography>
                      <Typography fontWeight={700}>{BANK_DETAILS.bankName}, {BANK_DETAILS.branch}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#cbd5e1' }}>Account Number:</Typography>
                      <Typography fontWeight={700} sx={{ color: '#F6D469' }}>{BANK_DETAILS.accountNo}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#cbd5e1' }}>IFSC Code:</Typography>
                      <Typography fontWeight={700}>{BANK_DETAILS.ifsc}</Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ my: 1.5, borderColor: 'rgba(255,255,255,0.15)' }} />

                  <Typography variant="caption" sx={{ color: '#cbd5e1', display: 'block', lineHeight: 1.5 }}>
                    {BANK_DETAILS.note}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* ================= INTERACTIVE MAP & ROUTE PLANNER ================= */}
      <Box sx={{ py: { xs: 8, md: 10 } }} id="map">
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto', mb: 4 }}>
            <Chip
              icon={<DirectionsIcon sx={{ fontSize: 16 }} />}
              label="Live GPS Map & Route Navigation"
              sx={{ bgcolor: '#e0f2fe', color: '#02476c', fontWeight: 800, mb: 1.5, px: 1 }}
            />
            <Typography variant="h2" sx={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 800, color: '#24102F', mb: 1.5, fontSize: { xs: '2rem', sm: '2.6rem' } }}>
              Visit Our Center in Greater Noida West
            </Typography>
            <Typography variant="body1" color="#757277" sx={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              Conveniently located at <strong>G-104, Fusion Homes, Amrapali Dream Valley</strong>. Calculate your live route from Gaur City, Indirapuram, Noida Metro, or launch Google Maps.
            </Typography>
          </Box>

          <MapRouting />
        </Container>
      </Box>

      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <Box sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 10 }, borderTop: '1px solid #EFECE7' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 4.5 }}>
            <Chip label="Got Questions?" size="small" sx={{ bgcolor: '#FFFAEA', color: '#854d0e', fontWeight: 800, mb: 1.5 }} />
            <Typography variant="h2" fontWeight={800} color="#24102F" sx={{ fontFamily: '"Quicksand", sans-serif', mb: 1.5, fontSize: { xs: '2rem', sm: '2.5rem' } }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" color="#757277">
              Everything you need to know about starting your child's therapy journey at Caring Hands.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.4 }}>
            {FAQ_DATA.map((faq, idx) => (
              <Accordion
                key={idx}
                elevation={0}
                sx={{
                  border: '1px solid #EFECE7',
                  borderRadius: '14px !important',
                  bgcolor: '#FDFBF7',
                  '&:before': { display: 'none' },
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                  '&:hover': { borderColor: '#02476c' }
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#02476c' }} />}>
                  <Typography variant="subtitle1" fontWeight={700} color="#24102F">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 2.5, color: '#757277', lineHeight: 1.7 }}>
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
          background: 'linear-gradient(135deg, #02476c 0%, #01324d 100%)',
          color: '#ffffff',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Chip
            label="Small Steps... Big Futures... ☀️"
            size="small"
            sx={{ bgcolor: '#F6D469', color: '#24102F', fontWeight: 800, mb: 2 }}
          />
          <Typography variant="h3" fontWeight={800} sx={{ fontFamily: '"Quicksand", sans-serif', mb: 1.5, fontSize: { xs: '2rem', sm: '2.6rem' } }}>
            "Every Child Matters ❤️"
          </Typography>
          <Typography variant="body1" sx={{ color: '#EFECE7', fontSize: '1.1rem', mb: 4, maxWidth: 620, mx: 'auto', lineHeight: 1.6 }}>
            Early intervention brings lifelong progress. Speak directly with our clinical coordinator or book an in-person assessment today.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => onOpenAppointment()}
              startIcon={<CalendarMonthIcon />}
              sx={{
                px: 3.8,
                py: 1.3,
                fontWeight: 800,
                fontSize: '1rem',
                borderRadius: 100,
                bgcolor: '#F6D469',
                color: '#24102F',
                '&:hover': { bgcolor: '#FCB720' }
              }}
            >
              Schedule Child Assessment
            </Button>
            <Button
              variant="outlined"
              size="large"
              component="a"
              href={`tel:${CLINIC_INFO.phone}`}
              startIcon={<PhoneIcon />}
              sx={{
                px: 3,
                py: 1.3,
                fontWeight: 700,
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.5)',
                borderRadius: 100,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: '#ffffff' }
              }}
            >
              Call: {CLINIC_INFO.phone}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
