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
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';
import logoImg from '../assets/logo.jpeg';

const Footer = ({ onOpenAppointment }) => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#02476c', // Caring Hands signature deep blue
        color: '#ffffff',
        pt: { xs: 7, md: 9 },
        pb: 4,
        borderTop: '5px solid #F6D469' // Caring Hands golden yellow
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Brand & About Column (Directly matching caringhands.org.in) */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
              <Box
                component="img"
                src={logoImg}
                alt="Caring Hands Logo"
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  objectFit: 'contain',
                  border: '2px solid #F6D469',
                  bgcolor: '#ffffff',
                  p: 0.3
                }}
              />
              <Box>
                <Typography variant="h6" fontWeight={800} color="#F6D469" sx={{ fontFamily: '"Quicksand", sans-serif', letterSpacing: '0.01em' }}>
                  CARING HANDS
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Child Development Center
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.75, mb: 2.5 }}>
              At <strong>Caring Hands</strong>, we are committed to creating a world where no one is left behind, and every child can access clinical resources and loving guidance to rewrite their destinies.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
              <Chip
                icon={<VolunteerActivismIcon sx={{ color: '#24102F !important', fontSize: 16 }} />}
                label="Give a helping hand for a child ☀️"
                size="small"
                sx={{ bgcolor: '#F6D469', color: '#24102F', fontWeight: 800 }}
              />
              <Chip
                icon={<FavoriteIcon sx={{ color: '#FF1C74 !important', fontSize: 14 }} />}
                label="Every Child Matters"
                size="small"
                sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: '#ffffff', fontWeight: 700 }}
              />
            </Box>

            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <Button
                variant="contained"
                size="small"
                component={Link}
                to="/book-appointment"
                sx={{
                  bgcolor: '#F6D469',
                  color: '#24102F',
                  fontWeight: 800,
                  borderRadius: 100,
                  px: 2.5,
                  '&:hover': { bgcolor: '#FCB720' }
                }}
              >
                Book Assessment
              </Button>
              <Button
                variant="outlined"
                size="small"
                component={Link}
                to="/map-routing"
                startIcon={<DirectionsIcon sx={{ fontSize: 16 }} />}
                sx={{ color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.4)', fontWeight: 700, borderRadius: 100, px: 2, '&:hover': { borderColor: '#ffffff', bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                Route Map
              </Button>
            </Box>
          </Grid>

          {/* Core Clinical Therapies */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" fontWeight={800} color="#F6D469" sx={{ mb: 2, fontFamily: '"Quicksand", sans-serif' }}>
              Specialized Child Therapies
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
                      color: 'rgba(255, 255, 255, 0.85)',
                      textDecoration: 'none',
                      fontSize: '0.86rem',
                      py: 0.5,
                      transition: 'all 0.2s',
                      '&:hover': { color: '#F6D469', pl: 0.5 }
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

          {/* Center Address & Contact Details */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" fontWeight={800} color="#F6D469" sx={{ mb: 2, fontFamily: '"Quicksand", sans-serif' }}>
              Center Address & Contact
            </Typography>

            {/* Primary Center */}
            <Box sx={{ mb: 2.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0.8 }}>
                <LocationOnIcon sx={{ color: '#F6D469', fontSize: 20, mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" fontWeight={800} color="#ffffff">
                    Caring Hands Child Development Center
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)', display: 'block', lineHeight: 1.6, mt: 0.5 }}>
                    G-104, Fusion Homes, Tech Zone IV,<br />
                    Greater Noida West – 201318<br />
                    ( Ek Murti Chowk)
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#F6D469', fontWeight: 700, display: 'block', mt: 1 }}>
                    🕒 Mon – Sat: 9:00 AM – 7:30 PM (Sunday by Appointment)
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#F6D469', fontWeight: 800, display: 'block', mt: 0.5 }}>
                    📞 Direct Helpline: +91 8650909777
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
                startIcon={<PhoneIcon sx={{ fontSize: 16 }} />}
                sx={{ bgcolor: '#01324d', color: '#ffffff', fontWeight: 700, borderRadius: 100, py: 0.9, '&:hover': { bgcolor: '#002236' } }}
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
                startIcon={<WhatsAppIcon sx={{ fontSize: 16 }} />}
                sx={{ bgcolor: '#59C36A', color: '#ffffff', '&:hover': { bgcolor: '#22c55e' }, fontWeight: 700, borderRadius: 100, py: 0.9 }}
              >
                WhatsApp
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.15)' }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.7)'
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} Caring Hands Child Development Center. Registered Trust • Official Domain: caringhands.org.in
          </Typography>

          <Box sx={{ display: 'flex', gap: 2.5 }}>
            <Box component={Link} to="/" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', '&:hover': { color: '#F6D469' } }}>
              Home
            </Box>
            <Box component={Link} to="/about" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', '&:hover': { color: '#F6D469' } }}>
              About Us
            </Box>
            <Box component={Link} to="/services" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', '&:hover': { color: '#F6D469' } }}>
              Therapies
            </Box>
            <Box component={Link} to="/map-routing" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', '&:hover': { color: '#F6D469' } }}>
              Map Routing
            </Box>
            <Box component={Link} to="/contact" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', '&:hover': { color: '#F6D469' } }}>
              Contact Us
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
