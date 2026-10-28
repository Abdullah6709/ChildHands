import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  Chip
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsIcon from '@mui/icons-material/Directions';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';

const Footer = ({ onOpenAppointment }) => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0f172a',
        color: '#f8fafc',
        pt: { xs: 6, md: 8 },
        pb: 4,
        borderTop: '4px solid #0284c7'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Brand & About Column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  bgcolor: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FavoriteIcon sx={{ color: '#f43f5e', fontSize: 24 }} />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={900} color="#38bdf8">
                  CARING HANDS
                </Typography>
                <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 700, letterSpacing: '0.04em' }}>
                  Child Development Center
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ color: '#cbd5e1', lineHeight: 1.7, mb: 2 }}>
              Dedicated to nurturing young potential with evidence-based pediatric therapies. We believe that with the right compassionate guidance, every child can thrive and build a bright tomorrow.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
              <Chip
                label="Small Steps... Big Futures... ☀️"
                size="small"
                sx={{ bgcolor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 700 }}
              />
              <Chip
                label="Every Child Matters ❤️"
                size="small"
                sx={{ bgcolor: 'rgba(244, 63, 94, 0.15)', color: '#fb7185', fontWeight: 700 }}
              />
            </Box>

            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <Button
                variant="contained"
                size="small"
                component={Link}
                to="/book-appointment"
                color="secondary"
                sx={{ fontWeight: 700 }}
              >
                Book Assessment
              </Button>
              <Button
                variant="outlined"
                size="small"
                component={Link}
                to="/map-routing"
                startIcon={<DirectionsIcon />}
                sx={{ color: '#38bdf8', borderColor: '#38bdf8', fontWeight: 700 }}
              >
                Route Map
              </Button>
            </Box>
          </Grid>

          {/* Core Services Links with Dedicated Routes */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" fontWeight={800} color="#38bdf8" sx={{ mb: 2 }}>
              Our 9 Specialized Therapies
            </Typography>
            <Grid container spacing={1}>
              {SERVICES_DATA.map((srv) => (
                <Grid item xs={12} sm={6} key={srv.id}>
                  <Box
                    component={Link}
                    to={`/services/${srv.id}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#cbd5e1',
                      textDecoration: 'none',
                      fontSize: '0.86rem',
                      py: 0.5,
                      transition: 'color 0.2s',
                      '&:hover': { color: '#38bdf8', pl: 0.5 }
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: srv.color,
                        flexShrink: 0
                      }}
                    />
                    {srv.title}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Centers & Contact Details */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" fontWeight={800} color="#38bdf8" sx={{ mb: 2 }}>
              Visit Our Centers
            </Typography>

            {/* Primary Center */}
            <Box sx={{ mb: 2.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0.8 }}>
                <LocationOnIcon sx={{ color: '#f43f5e', fontSize: 20, mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" fontWeight={800} color="#ffffff">
                    Greater Noida West Center (Therapy Hub)
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', lineHeight: 1.5 }}>
                    G-104, Fusion Homes, Amrapali Dream Valley,<br />
                    Greater Noida West 201318 (Near Gaur City 2)
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#38bdf8', fontWeight: 700, display: 'block', mt: 0.5 }}>
                    📞 Helpline: +91 8650909777
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Pune Center */}
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOnIcon sx={{ color: '#38bdf8', fontSize: 20, mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" fontWeight={700} color="#ffffff">
                    Pune Branch (Trust Center)
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', lineHeight: 1.5 }}>
                    Ambi, Near Talegaon MIDC Rd, Dist Pune, Maharashtra 410507
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#38bdf8', fontWeight: 600, display: 'block', mt: 0.5 }}>
                    📞 Contact: +91 9011262226
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 1.5, mt: 2 }}>
              <Button
                variant="contained"
                fullWidth
                size="small"
                component="a"
                href={`tel:${CLINIC_INFO.phone}`}
                startIcon={<PhoneIcon />}
                sx={{ bgcolor: '#0284c7', fontWeight: 700 }}
              >
                Call: 8650909777
              </Button>
              <Button
                variant="contained"
                fullWidth
                size="small"
                component="a"
                href={`https://wa.me/91${CLINIC_INFO.phone}?text=Hello%20Caring%20Hands`}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsAppIcon />}
                sx={{ bgcolor: '#22c55e', '&:hover': { bgcolor: '#16a34a' }, fontWeight: 700 }}
              >
                WhatsApp
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            fontSize: '0.82rem',
            color: '#64748b'
          }}
        >
          <Typography variant="caption" sx={{ color: '#94a3b8' }}>
            © {new Date().getFullYear()} Caring Hands Child Development Center. All rights reserved. Ref: caringhands.org.in
          </Typography>

          <Box sx={{ display: 'flex', gap: 2.5 }}>
            <Box component={Link} to="/" sx={{ color: '#94a3b8', textDecoration: 'none', '&:hover': { color: '#ffffff' } }}>
              Home
            </Box>
            <Box component={Link} to="/about" sx={{ color: '#94a3b8', textDecoration: 'none', '&:hover': { color: '#ffffff' } }}>
              About Us
            </Box>
            <Box component={Link} to="/services" sx={{ color: '#94a3b8', textDecoration: 'none', '&:hover': { color: '#ffffff' } }}>
              Services
            </Box>
            <Box component={Link} to="/map-routing" sx={{ color: '#94a3b8', textDecoration: 'none', '&:hover': { color: '#ffffff' } }}>
              Map Routing
            </Box>
            <Box component={Link} to="/contact" sx={{ color: '#94a3b8', textDecoration: 'none', '&:hover': { color: '#ffffff' } }}>
              Contact Us
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
