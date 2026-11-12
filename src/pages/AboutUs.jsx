import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
  Button,
  Divider,
  Avatar
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VerifiedIcon from '@mui/icons-material/Verified';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneIcon from '@mui/icons-material/Phone';
import DirectionsIcon from '@mui/icons-material/Directions';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpaIcon from '@mui/icons-material/Spa';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';
import HandymanIcon from '@mui/icons-material/Handyman';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import { CLINIC_INFO, WE_CARE_ABOUT, FACILITIES_DATA, HERO_IMAGE } from '../data/clinicData';

const TEAM_MEMBERS = [
  {
    name: "Dr. Aarti Sharma",
    role: "Senior Pediatric Speech-Language Pathologist",
    creds: "MASLP, RCI Certified • 11+ Yrs Exp",
    specialty: "Speech Delay, Stammering, Oral Placement Therapy (OPT), Apraxia",
    color: "#02476c"
  },
  {
    name: "Rohit Malhotra",
    role: "Sensory Integration & Occupational Therapist",
    creds: "BOT, MOT (Pediatrics) • 9+ Yrs Exp",
    specialty: "Sensory Processing Disorder (SPD), Fine Motor Planning, Handwriting",
    color: "#E76100"
  },
  {
    name: "Pooja Deshmukh",
    role: "Certified ABA & Behavioral Interventionist",
    creds: "M.Sc Applied Psychology, BCBA Certified • 8+ Yrs Exp",
    specialty: "Autism Spectrum Disorder, Behavior Modification, Social Skills",
    color: "#59C36A"
  },
  {
    name: "Meenakshi Joshi",
    role: "Head of Special Education & Inclusive Learning",
    creds: "B.Ed (Special Ed), M.A. • 10+ Yrs Exp",
    specialty: "Dyslexia, ADHD IEPs, Pre-school Readiness, Remedial Learning",
    color: "#FF1C74"
  }
];

const MILESTONES_STEPS = [
  {
    step: "01",
    title: "Comprehensive Clinical Assessment",
    desc: "Detailed screening of speech milestones, sensory processing, fine/gross motor abilities, and social-emotional dynamics."
  },
  {
    step: "02",
    title: "Custom IEP & Goal Setting",
    desc: "Formulation of an Individualized Education & Therapy Plan with quantifiable 8-week developmental milestones."
  },
  {
    step: "03",
    title: "1-on-1 Joyful Therapy Sessions",
    desc: "Engaging, play-based therapeutic interventions utilizing our sensory gym and oral placement equipment."
  },
  {
    step: "04",
    title: "Parent Empowerment & Home Plan",
    desc: "Equipping parents with practical co-regulation strategies, sensory diet schedules, and home practice exercises."
  },
  {
    step: "05",
    title: "Review & School Readiness",
    desc: "Objective progress re-evaluations, school transition coordination, and celebration of every developmental victory!"
  }
];

const AboutUs = ({ onOpenAppointment }) => {
  return (
    <Box sx={{ bgcolor: '#FDFBF7', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        {/* Breadcrumb / Title Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 850, mx: 'auto', mb: 7 }}>
          <Chip
            icon={<FavoriteIcon sx={{ color: '#E76100 !important' }} />}
            label="About Caring Hands Trust & Development Center"
            size="small"
            sx={{
              bgcolor: '#FFFAEA',
              color: '#02476c',
              fontWeight: 800,
              mb: 2,
              border: '1px solid #F6D469',
              borderRadius: 50,
              px: 1.5,
              py: 0.5
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.4rem', sm: '3.4rem' },
              fontWeight: 900,
              color: '#24102F',
              fontFamily: '"Quicksand", sans-serif',
              mb: 2
            }}
          >
            "Small Steps... Big Futures... ☀️"
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Schoolbell", cursive',
              color: '#02476c',
              fontSize: { xs: '1.25rem', sm: '1.55rem' },
              fontWeight: 700,
              mb: 2
            }}
          >
            Give a helping hand for a child ☀️
          </Typography>
          <Typography variant="h6" sx={{ color: '#757277', fontWeight: 500, lineHeight: 1.7, fontSize: { xs: '1rem', sm: '1.15rem' } }}>
            Inspired by the foundational mission of <strong>Caring Hands (caringhands.org.in)</strong>, we are committed to creating an inclusive world where every child with speech delays, sensory challenges, ADHD, autism, or learning differences receives world-class clinical guidance backed by unconditional warmth.
          </Typography>
        </Box>

        {/* Our Heritage & Story Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3.5, md: 6 },
            borderRadius: 5,
            bgcolor: '#ffffff',
            border: '1px solid #EFECE7',
            mb: 8,
            boxShadow: '0 8px 30px rgba(2, 71, 108, 0.04)'
          }}
        >
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="Our Story Since 2015"
                size="small"
                sx={{ bgcolor: '#FFFAEA', color: '#02476c', fontWeight: 800, mb: 2, border: '1px solid #F6D469', borderRadius: 50 }}
              />
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' }, fontWeight: 900, color: '#24102F', mb: 2.5, fontFamily: '"Quicksand", sans-serif' }}>
                A Journey of Compassion, Inclusion & Hope
              </Typography>
              <Typography variant="body1" sx={{ color: '#757277', lineHeight: 1.8, mb: 2 }}>
                Founded with a deep philanthropic ethos, <strong>Caring Hands</strong> has been actively transforming lives since 2015. What began as a community endeavor to support vulnerable individuals and families has evolved into an expansive ecosystem spanning child developmental therapies, inclusive education, skill empowerment, and holistic healthcare.
              </Typography>
              <Typography variant="body1" sx={{ color: '#757277', lineHeight: 1.8, mb: 3 }}>
                Our dedicated Child Development Center in Greater Noida West brings together licensed pediatric speech pathologists, occupational therapists, sensory integration practitioners, and special educators to deliver personalized, joyful milestone progress.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmojiEventsIcon sx={{ color: '#F6D469', fontSize: 26 }} />
                  <Typography variant="body2" fontWeight={800} color="#24102F">
                    9+ Years of Dedicated Impact
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <VolunteerActivismIcon sx={{ color: '#02476c', fontSize: 26 }} />
                  <Typography variant="body2" fontWeight={800} color="#24102F">
                    500+ Milestone Success Stories
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: '#02476c',
                  color: '#ffffff',
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: 4.5,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Embedded featured photo */}
                <Box
                  sx={{
                    position: 'relative',
                    height: 180,
                    borderRadius: 3,
                    overflow: 'hidden',
                    mb: 2.5,
                    border: '1px solid rgba(246, 212, 105, 0.4)'
                  }}
                >
                  <Box
                    component="img"
                    src={HERO_IMAGE}
                    alt="Caring Hands Pediatric Guidance"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2, 71, 108, 0.7) 0%, transparent 60%)' }} />
                  <Chip
                    label="Every Child Matters ❤️"
                    size="small"
                    sx={{ position: 'absolute', bottom: 10, left: 10, bgcolor: '#F6D469', color: '#24102F', fontWeight: 800, borderRadius: 50, fontSize: '0.72rem' }}
                  />
                </Box>

                <Typography variant="caption" sx={{ color: '#F6D469', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  The Caring Hands Philosophy
                </Typography>
                <Typography variant="h5" fontWeight={900} sx={{ my: 1, color: '#ffffff', fontFamily: '"Quicksand", sans-serif' }}>
                  "Small Steps... Big Futures... ☀️"
                </Typography>
                <Typography variant="body2" sx={{ color: '#EFECE7', lineHeight: 1.7, mb: 3 }}>
                  We discard rigid, one-size-fits-all treatments. Instead, we honor the innate neurodiversity and personality of every child, designing playful therapy pathways that inspire curiosity rather than anxiety.
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => onOpenAppointment()}
                  sx={{
                    bgcolor: '#F6D469',
                    color: '#24102F',
                    fontWeight: 900,
                    px: 3.5,
                    py: 1.2,
                    borderRadius: 50,
                    '&:hover': { bgcolor: '#fcb720' }
                  }}
                >
                  Schedule An Assessment
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* 5 Core Pillars from caringhands.org.in */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 5 }}>
            <Chip
              label="Our Core Pillars"
              size="small"
              sx={{ bgcolor: '#FFFAEA', color: '#02476c', fontWeight: 800, mb: 1.5, border: '1px solid #F6D469', borderRadius: 50 }}
            />
            <Typography variant="h2" fontWeight={900} color="#24102F" sx={{ fontFamily: '"Quicksand", sans-serif' }}>
              We Care About
            </Typography>
            <Typography variant="body1" color="#757277">
              The foundational commitments driving Caring Hands across our centers and communities.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {WE_CARE_ABOUT.map((item, idx) => (
              <Grid item xs={12} sm={6} md={2.4} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid #EFECE7',
                    bgcolor: '#ffffff',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 12px 28px rgba(2, 71, 108, 0.08)' }
                  }}
                >
                  <Box
                    sx={{
                      width: 54,
                      height: 54,
                      borderRadius: '50%',
                      bgcolor: '#FFFAEA',
                      color: '#02476c',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      fontSize: '1.6rem',
                      border: '1px solid #F6D469'
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="subtitle1" fontWeight={800} color="#24102F" sx={{ fontFamily: '"Quicksand", sans-serif', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="#757277" sx={{ fontSize: '0.86rem', lineHeight: 1.6 }}>
                    {item.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 5-Step Developmental Roadmap */}
        <Box sx={{ mb: 9 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 5 }}>
            <Chip
              label="Our Clinical Framework"
              size="small"
              sx={{ bgcolor: '#FFFAEA', color: '#02476c', fontWeight: 800, mb: 1.5, border: '1px solid #F6D469', borderRadius: 50 }}
            />
            <Typography variant="h2" fontWeight={900} color="#24102F" sx={{ fontFamily: '"Quicksand", sans-serif' }}>
              The 5-Step Roadmap to Progress
            </Typography>
            <Typography variant="body1" color="#757277">
              A transparent, outcome-oriented clinical progression crafted for quantifiable milestone gains.
            </Typography>
          </Box>

          <Grid container spacing={2.5}>
            {MILESTONES_STEPS.map((item, idx) => (
              <Grid item xs={12} sm={6} md={2.4} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 3.5,
                    border: '1px solid #EFECE7',
                    bgcolor: '#ffffff',
                    position: 'relative',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'translateY(-4px)', borderColor: '#02476c' }
                  }}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 50,
                      bgcolor: '#FFFAEA',
                      color: '#02476c',
                      border: '1px solid #F6D469',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '1rem',
                      fontFamily: '"Quicksand", sans-serif',
                      mb: 2
                    }}
                  >
                    {item.step}
                  </Box>
                  <Typography variant="subtitle1" fontWeight={800} color="#02476c" sx={{ mb: 1, lineHeight: 1.3, fontFamily: '"Quicksand", sans-serif' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="#757277" sx={{ lineHeight: 1.6, fontSize: '0.88rem' }}>
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Clinical Team */}
        <Box sx={{ mb: 9 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 5 }}>
            <Chip
              label="Our Clinical Specialists"
              size="small"
              sx={{ bgcolor: '#FFFAEA', color: '#02476c', fontWeight: 800, mb: 1.5, border: '1px solid #F6D469', borderRadius: 50 }}
            />
            <Typography variant="h2" fontWeight={900} color="#24102F" sx={{ mb: 1.5, fontFamily: '"Quicksand", sans-serif' }}>
              Multidisciplinary Pediatric Team
            </Typography>
            <Typography variant="body1" color="#757277">
              Qualified, passionate pediatric practitioners dedicated to your child's milestone success.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {TEAM_MEMBERS.map((member, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    borderRadius: 4,
                    border: '1px solid #EFECE7',
                    bgcolor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    '&:hover': { boxShadow: '0 12px 28px rgba(2, 71, 108, 0.08)', transform: 'translateY(-4px)' }
                  }}
                >
                  <Box>
                    <Avatar
                      sx={{
                        width: 72,
                        height: 72,
                        mx: 'auto',
                        mb: 2,
                        bgcolor: member.color,
                        fontSize: '1.6rem',
                        fontWeight: 800,
                        boxShadow: `0 8px 20px ${member.color}35`,
                        border: '3px solid #ffffff'
                      }}
                    >
                      {member.name[3]}
                    </Avatar>
                    <Typography variant="h6" fontWeight={800} color="#24102F" sx={{ fontFamily: '"Quicksand", sans-serif' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: member.color, fontWeight: 700, display: 'block', mb: 1 }}>
                      {member.role}
                    </Typography>
                    <Chip label={member.creds} size="small" sx={{ fontSize: '0.7rem', fontWeight: 600, mb: 2, borderRadius: 50 }} />
                    <Divider sx={{ my: 1.5 }} />
                    <Typography variant="body2" color="#757277" sx={{ fontSize: '0.84rem', lineHeight: 1.6 }}>
                      <strong>Focus:</strong> {member.specialty}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 2.5 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      fullWidth
                      onClick={() => onOpenAppointment()}
                      sx={{
                        borderColor: member.color,
                        color: member.color,
                        fontWeight: 800,
                        borderRadius: 50,
                        '&:hover': { bgcolor: `${member.color}10`, borderColor: member.color }
                      }}
                    >
                      Consult Specialist
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Center Infrastructure / Visual Therapy Rooms Gallery */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 780, mx: 'auto', mb: 5 }}>
            <Chip
              label="Fusion Homes, Tech Zone IV, Greater Noida West"
              size="small"
              sx={{ bgcolor: '#FFFAEA', color: '#02476c', fontWeight: 800, mb: 1.5, border: '1px solid #F6D469', borderRadius: 50 }}
            />
            <Typography variant="h2" fontWeight={900} color="#24102F" sx={{ mb: 1.5, fontFamily: '"Quicksand", sans-serif' }}>
              Purpose-Built Pediatric Therapy Center
            </Typography>
            <Typography variant="body1" color="#757277">
              Located at <strong>G-104, Fusion Homes, Tech Zone IV, Greater Noida West 201318</strong>, our clinic is ergonomically designed for maximum safety, sensory stimulation, and comfortable milestone progress.
            </Typography>
          </Box>

          <Grid container spacing={3.5} sx={{ mb: 5 }}>
            {FACILITIES_DATA.map((fac) => (
              <Grid item xs={12} sm={6} md={3} key={fac.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    border: '1px solid #EFECE7',
                    bgcolor: '#ffffff',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 36px rgba(2, 71, 108, 0.12)',
                      borderColor: fac.color,
                      '& .facility-card-img': { transform: 'scale(1.06)' }
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', height: 180, overflow: 'hidden', bgcolor: '#f1f5f9' }}>
                    <Box
                      component="img"
                      src={fac.image}
                      alt={fac.title}
                      className="facility-card-img"
                      sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    />
                    <Chip
                      label={fac.tag}
                      size="small"
                      sx={{
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        bgcolor: 'rgba(255, 255, 255, 0.95)',
                        color: fac.color,
                        fontWeight: 800,
                        fontSize: '0.7rem',
                        borderRadius: 50,
                        border: '1px solid #EFECE7'
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" fontWeight={800} color="#24102F" sx={{ fontFamily: '"Quicksand", sans-serif', mb: 0.5, fontSize: '1.1rem' }}>
                      {fac.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: fac.color, fontWeight: 700, mb: 1.5, display: 'block' }}>
                      {fac.subtitle}
                    </Typography>
                    <Typography variant="body2" color="#757277" sx={{ fontSize: '0.86rem', lineHeight: 1.6, flexGrow: 1 }}>
                      {fac.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* CTA Banner to Visit */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3.5, sm: 5 },
              borderRadius: 4.5,
              bgcolor: '#02476c',
              color: '#ffffff',
              textAlign: 'center',
              border: '2px solid #F6D469'
            }}
          >
            <Typography variant="h4" fontWeight={900} sx={{ color: '#F6D469', mb: 1.5, fontFamily: '"Quicksand", sans-serif' }}>
              Ready to Tour Our Center & Meet the Team?
            </Typography>
            <Typography variant="body1" sx={{ color: '#EFECE7', maxWidth: 700, mx: 'auto', mb: 3 }}>
              Take a friendly walkthrough of our sensory gym and speech suites, meet our clinical specialists, and observe a complimentary quick milestone screening.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => onOpenAppointment()}
                startIcon={<CalendarMonthIcon />}
                sx={{
                  bgcolor: '#F6D469',
                  color: '#24102F',
                  fontWeight: 900,
                  borderRadius: 50,
                  px: 4,
                  py: 1.3,
                  '&:hover': { bgcolor: '#fcb720' }
                }}
              >
                Book An Assessment
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/map-routing"
                startIcon={<DirectionsIcon />}
                sx={{
                  color: '#ffffff',
                  borderColor: 'rgba(255,255,255,0.4)',
                  fontWeight: 700,
                  borderRadius: 50,
                  px: 3,
                  py: 1.3,
                  '&:hover': { borderColor: '#F6D469', color: '#F6D469' }
                }}
              >
                View Map Directions (Fusion Homes)
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;