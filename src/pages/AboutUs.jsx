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
import { CLINIC_INFO } from '../data/clinicData';

const TEAM_MEMBERS = [
  {
    name: "Dr. Aarti Sharma",
    role: "Senior Pediatric Speech-Language Pathologist",
    creds: "MASLP, RCI Certified • 11+ Yrs Exp",
    specialty: "Speech Delay, Stammering, Oral Placement Therapy (OPT), Apraxia",
    color: "#0284c7"
  },
  {
    name: "Rohit Malhotra",
    role: "Sensory Integration & Occupational Therapist",
    creds: "BOT, MOT (Pediatrics) • 9+ Yrs Exp",
    specialty: "Sensory Processing Disorder (SPD), Fine Motor Planning, Handwriting",
    color: "#ea580c"
  },
  {
    name: "Pooja Deshmukh",
    role: "Certified ABA & Behavioral Interventionist",
    creds: "M.Sc Applied Psychology, BCBA Certified • 8+ Yrs Exp",
    specialty: "Autism Spectrum Disorder, Behavior Modification, Social Skills",
    color: "#0d9488"
  },
  {
    name: "Meenakshi Joshi",
    role: "Head of Special Education & Inclusive Learning",
    creds: "B.Ed (Special Ed), M.A. • 10+ Yrs Exp",
    specialty: "Dyslexia, ADHD IEPs, Pre-school Readiness, Remedial Learning",
    color: "#e11d48"
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
    <Box sx={{ bgcolor: '#f8fafc', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        {/* Breadcrumb / Title */}
        <Box sx={{ textAlign: 'center', maxWidth: 850, mx: 'auto', mb: 7 }}>
          <Chip
            icon={<FavoriteIcon sx={{ color: '#f43f5e !important' }} />}
            label="About Caring Hands Child Development Center"
            size="small"
            sx={{ bgcolor: '#ffffff', color: '#0284c7', fontWeight: 800, mb: 2, border: '1px solid #bae6fd' }}
          />
          <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', sm: '3.4rem' }, fontWeight: 900, color: '#0f172a', mb: 2 }}>
            "Small Steps... Big Futures... ☀️"
          </Typography>
          <Typography variant="h6" sx={{ color: '#475569', fontWeight: 500, lineHeight: 1.6 }}>
            Inspired by the foundational values of Caring Hands (caringhands.org.in), we are dedicated to creating a world where every child with speech delays, sensory challenges, or neurodevelopmental differences receives world-class clinical guidance filled with unconditional warmth.
          </Typography>
        </Box>

        {/* Mission & Vision Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)',
                border: '2px solid #bae6fd',
                borderRadius: 4
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 2.5, bgcolor: '#0284c7', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AutoAwesomeIcon />
                </Box>
                <Typography variant="h4" fontWeight={900} color="#0284c7">
                  Our Mission
                </Typography>
              </Box>
              <Typography variant="body1" color="#334155" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                To deliver accessible, evidence-based, multidisciplinary pediatric therapies under one roof. We strive to empower each child to communicate freely, navigate their sensory world with calm confidence, gain independence in everyday tasks, and achieve their full potential in school and life.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                background: 'linear-gradient(135deg, #fff1f2 0%, #ffffff 100%)',
                border: '2px solid #fecdd3',
                borderRadius: 4
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 2.5, bgcolor: '#f43f5e', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FavoriteIcon />
                </Box>
                <Typography variant="h4" fontWeight={900} color="#e11d48">
                  Our Philosophy
                </Typography>
              </Box>
              <Typography variant="body1" color="#334155" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                <strong>Every Child Matters ❤️</strong>. We reject one-size-fits-all therapy. Instead, we honor the neurodiversity of each little learner, designing playful therapeutic pathways that spark curiosity rather than fear. When children feel safe and celebrated, learning happens naturally.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* 5-Step Developmental Journey */}
        <Box sx={{ mb: 9 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 5 }}>
            <Chip label="Our Clinical Framework" size="small" sx={{ bgcolor: '#dcfce7', color: '#16a34a', fontWeight: 800, mb: 1.5 }} />
            <Typography variant="h2" fontWeight={900} color="#0f172a">
              The 5-Step Roadmap to Progress
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
                    border: '1px solid #e2e8f0',
                    bgcolor: '#ffffff',
                    position: 'relative',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'translateY(-4px)', borderColor: '#0284c7' }
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight={900}
                    sx={{ color: '#e2e8f0', mb: 1, letterSpacing: '-0.04em' }}
                  >
                    {item.step}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={800} color="#0284c7" sx={{ mb: 1, lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="#64748b" sx={{ lineHeight: 1.6, fontSize: '0.88rem' }}>
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
            <Chip label="Our Experts" size="small" color="primary" sx={{ fontWeight: 800, mb: 1.5 }} />
            <Typography variant="h2" fontWeight={900} color="#0f172a" sx={{ mb: 1.5 }}>
              Multidisciplinary Specialists
            </Typography>
            <Typography variant="body1" color="#64748b">
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
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '&:hover': { boxShadow: '0 12px 28px rgba(0,0,0,0.08)' }
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
                        boxShadow: `0 8px 20px ${member.color}40`
                      }}
                    >
                      {member.name[3]}
                    </Avatar>
                    <Typography variant="h6" fontWeight={800} color="#0f172a">
                      {member.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: member.color, fontWeight: 700, display: 'block', mb: 1 }}>
                      {member.role}
                    </Typography>
                    <Chip label={member.creds} size="small" sx={{ fontSize: '0.7rem', fontWeight: 600, mb: 2 }} />
                    <Divider sx={{ my: 1.5 }} />
                    <Typography variant="body2" color="#64748b" sx={{ fontSize: '0.82rem', lineHeight: 1.6 }}>
                      <strong>Focus:</strong> {member.specialty}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 2.5 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      fullWidth
                      onClick={() => onOpenAppointment()}
                      sx={{ borderColor: member.color, color: member.color, fontWeight: 700 }}
                    >
                      Consult Specialist
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Center Infrastructure / Facilities */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 5,
            bgcolor: '#ffffff',
            border: '2px solid #e2e8f0',
            mb: 8
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip label="Fusion Homes Greater Noida West" size="small" sx={{ bgcolor: '#e0f2fe', color: '#0369a1', fontWeight: 800, mb: 1.5 }} />
              <Typography variant="h3" fontWeight={900} color="#0f172a" sx={{ mb: 2 }}>
                Purpose-Built Pediatric Therapy Center
              </Typography>
              <Typography variant="body1" color="#475569" sx={{ lineHeight: 1.7, mb: 3 }}>
                Located at <strong>G-104, Fusion Homes, Amrapali Dream Valley, Greater Noida West</strong>, our center is ergonomically designed to provide maximum safety, stimulation, and sensory comfort for children of all ages:
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <VerifiedIcon sx={{ color: '#16a34a', mt: 0.3 }} />
                  <Typography variant="body2" color="#334155">
                    <strong>Sensory Integration Gym:</strong> Equipped with vestibular bolster swings, platform swings, climbing rock walls, and sensory crash mats.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <VerifiedIcon sx={{ color: '#0284c7', mt: 0.3 }} />
                  <Typography variant="body2" color="#334155">
                    <strong>Speech & OPT Suite:</strong> Acoustic sound-insulated room with specialized jaw grading tools, therapeutic straws, and speech mirrors.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <VerifiedIcon sx={{ color: '#ea580c', mt: 0.3 }} />
                  <Typography variant="body2" color="#334155">
                    <strong>Occupational Therapy Zone:</strong> Fine motor puzzles, tactile tables, handwriting stations, and self-care simulation corners.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <VerifiedIcon sx={{ color: '#db2777', mt: 0.3 }} />
                  <Typography variant="body2" color="#334155">
                    <strong>Quiet Counseling Room:</strong> Warm, relaxing space for confidential parent guidance, anxiety reduction, and family counseling.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: '#0f172a',
                  color: '#ffffff',
                  textAlign: 'center'
                }}
              >
                <Typography variant="h5" fontWeight={900} color="#38bdf8" gutterBottom>
                  Ready to Visit Us?
                </Typography>
                <Typography variant="body2" sx={{ color: '#cbd5e1', mb: 3 }}>
                  Take a walkthrough of our therapy rooms, meet our senior therapists, and observe a complimentary quick assessment.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => onOpenAppointment()}
                    startIcon={<CalendarMonthIcon />}
                    sx={{ fontWeight: 800 }}
                  >
                    Book An Assessment
                  </Button>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/contact#map"
                    startIcon={<DirectionsIcon />}
                    sx={{ color: '#38bdf8', borderColor: '#38bdf8', fontWeight: 700 }}
                  >
                    View Map Directions (Fusion Homes)
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutUs;
