import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Menu,
  MenuItem,
  Container,
  Chip,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsIcon from '@mui/icons-material/Directions';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';
import logoImg from '../assets/logo.jpeg';

const Navbar = ({ onOpenAppointment }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAnchor, setServicesAnchor] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleServicesClick = (event) => {
    setServicesAnchor(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchor(null);
  };

  const handleServiceSelect = (serviceId) => {
    handleServicesClose();
    navigate(`/services/${serviceId}`);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon fontSize="small" /> },
    { name: 'About Us', path: '/about', icon: <InfoIcon fontSize="small" /> },
    { name: 'Child Therapies', path: '/services', hasDropdown: true, icon: <MedicalServicesIcon fontSize="small" /> },
    { name: 'Route & Map', path: '/map-routing', icon: <DirectionsIcon fontSize="small" /> },
    { name: 'Contact Us', path: '/contact', icon: <ContactSupportIcon fontSize="small" /> },
  ];

  return (
    <>
      {/* Top Notification Bar - Aligned with Caring Hands (caringhands.org.in) */}
      <Box
        sx={{
          bgcolor: '#02476c', // Caring Hands deep blue
          color: '#ffffff',
          py: 0.8,
          fontSize: '0.82rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}
          >
            {/* Left: Quick phone and location */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 }, flexWrap: 'wrap' }}>
              <Box
                component="a"
                href={`tel:${CLINIC_INFO.phone}`}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: '#F6D469', // Caring Hands golden yellow
                  textDecoration: 'none',
                  fontWeight: 700,
                  transition: 'color 0.2s',
                  '&:hover': { color: '#ffffff' }
                }}
              >
                <PhoneIcon sx={{ fontSize: 15, mr: 0.6 }} />
                <span>Helpline: <strong>{CLINIC_INFO.displayPhone}</strong></span>
              </Box>

              <Box
                component="a"
                href="mailto:info@caringhands.org.in"
                sx={{
                  display: { xs: 'none', md: 'inline-flex' },
                  alignItems: 'center',
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  '&:hover': { color: '#F6D469' }
                }}
              >
                <span>info@caringhands.org.in</span>
              </Box>

              <Box
                component={Link}
                to="/map-routing"
                sx={{
                  display: { xs: 'none', lg: 'inline-flex' },
                  alignItems: 'center',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#ffffff' }
                }}
              >
                <LocationOnIcon sx={{ fontSize: 15, mr: 0.5, color: '#F6D469' }} />
                <span>G-104 Fusion Homes, Greater Noida West</span>
              </Box>
            </Box>

            {/* Right: Emotional motto & WhatsApp */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Typography
                variant="caption"
                sx={{
                  color: '#F6D469',
                  fontWeight: 700,
                  display: { xs: 'none', sm: 'block' },
                  fontSize: '0.8rem',
                  letterSpacing: '0.02em'
                }}
              >
                "Give a helping hand for a child" ☀️
              </Typography>
              <Button
                component="a"
                href={`https://wa.me/91${CLINIC_INFO.phone}?text=Hello%20Caring%20Hands,%20I%20would%20like%20to%20inquire%20about%20child%20therapy%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                startIcon={<WhatsAppIcon sx={{ fontSize: '1rem !important' }} />}
                sx={{
                  bgcolor: '#59C36A',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  py: 0.35,
                  px: 1.5,
                  borderRadius: 50,
                  boxShadow: 'none',
                  '&:hover': { bgcolor: '#22c55e', transform: 'none' }
                }}
              >
                WhatsApp
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main AppBar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #EFECE7',
          color: '#24102F',
          transition: 'all 0.3s ease'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 } }}>
            {/* Logo Brand */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                color: 'inherit',
                flexGrow: { xs: 1, md: 0 },
                mr: { md: 5 }
              }}
            >
              <Box
                component="img"
                src={logoImg}
                alt="Caring Hands Logo"
                sx={{
                  width: { xs: 44, sm: 50 },
                  height: { xs: 44, sm: 50 },
                  borderRadius: '50%',
                  objectFit: 'contain',
                  border: '2px solid #F6D469',
                  bgcolor: '#ffffff',
                  p: 0.3,
                  boxShadow: '0 4px 14px rgba(2, 71, 108, 0.12)'
                }}
              />

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    fontSize: { xs: '1.1rem', sm: '1.28rem' },
                    color: '#02476c',
                    letterSpacing: '-0.01em'
                  }}
                >
                  CARING HANDS
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    fontWeight: 700,
                    color: '#854d0e',
                    fontSize: { xs: '0.66rem', sm: '0.73rem' },
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}
                >
                  Child Development Center
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5, flexGrow: 1 }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path === '/services' && location.pathname.startsWith('/services'));
                if (link.hasDropdown) {
                  return (
                    <Box key={link.name}>
                      <Button
                        onClick={handleServicesClick}
                        endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
                        sx={{
                          color: isActive ? '#02476c' : '#24102F',
                          fontWeight: isActive ? 800 : 600,
                          fontSize: '0.92rem',
                          px: 1.8,
                          py: 0.8,
                          borderRadius: 50,
                          bgcolor: isActive ? 'rgba(2, 71, 108, 0.08)' : 'transparent',
                          '&:hover': { bgcolor: 'rgba(2, 71, 108, 0.06)', color: '#02476c' }
                        }}
                      >
                        {link.name}
                      </Button>
                      <Menu
                        anchorEl={servicesAnchor}
                        open={Boolean(servicesAnchor)}
                        onClose={handleServicesClose}
                        sx={{
                          mt: 1.2,
                          '& .MuiPaper-root': {
                            borderRadius: 3.5,
                            boxShadow: '0 16px 36px rgba(36, 16, 47, 0.12)',
                            p: 1,
                            minWidth: 300,
                            border: '1px solid #EFECE7'
                          }
                        }}
                      >
                        <MenuItem
                          component={Link}
                          to="/services"
                          onClick={handleServicesClose}
                          sx={{
                            fontWeight: 800,
                            color: '#02476c',
                            borderRadius: 2,
                            py: 1,
                            mb: 0.5,
                            bgcolor: 'rgba(2, 71, 108, 0.05)',
                            '&:hover': { bgcolor: 'rgba(2, 71, 108, 0.1)' }
                          }}
                        >
                          Explore All 9 Therapies Overview
                        </MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        {SERVICES_DATA.map((srv) => (
                          <MenuItem
                            key={srv.id}
                            component={Link}
                            to={`/services/${srv.id}`}
                            onClick={handleServicesClose}
                            sx={{
                              fontSize: '0.88rem',
                              borderRadius: 2,
                              py: 0.75,
                              color: '#24102F',
                              '&:hover': { bgcolor: srv.bgLight, color: srv.color, fontWeight: 700 }
                            }}
                          >
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                bgcolor: srv.color,
                                mr: 1.5
                              }}
                            />
                            {srv.title}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  );
                }

                return (
                  <Button
                    key={link.name}
                    component={Link}
                    to={link.path}
                    sx={{
                      color: isActive ? '#02476c' : '#24102F',
                      fontWeight: isActive ? 800 : 600,
                      fontSize: '0.92rem',
                      px: 1.8,
                      py: 0.8,
                      borderRadius: 50,
                      bgcolor: isActive ? 'rgba(2, 71, 108, 0.08)' : 'transparent',
                      '&:hover': { bgcolor: 'rgba(2, 71, 108, 0.06)', color: '#0284c7' }
                    }}
                  >
                    {link.name}
                  </Button>
                );
              })}
            </Box>

            {/* Desktop Action Buttons with Caring Hands Yellow CTA */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
              <Button
                variant="outlined"
                component="a"
                href={`tel:${CLINIC_INFO.phone}`}
                startIcon={<PhoneIcon sx={{ fontSize: 17 }} />}
                size="medium"
                sx={{
                  borderColor: '#02476c',
                  color: '#02476c',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  py: 0.8,
                  px: 2,
                  borderRadius: 50,
                  '&:hover': { borderColor: '#01324d', bgcolor: 'rgba(2, 71, 108, 0.05)' }
                }}
              >
                Call: {CLINIC_INFO.phone}
              </Button>

              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/book-appointment"
                startIcon={<CalendarMonthIcon sx={{ fontSize: 18 }} />}
                size="medium"
                sx={{
                  bgcolor: '#F6D469',
                  color: '#24102F',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  px: 2.8,
                  py: 1,
                  borderRadius: 50,
                  boxShadow: '0 4px 14px rgba(246, 212, 105, 0.4)',
                  '&:hover': { bgcolor: '#FCB720' }
                }}
              >
                Book Assessment
              </Button>
            </Box>

            {/* Mobile Hamburger Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: '#02476c' }}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 310, p: 2.5, bgcolor: '#ffffff' }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
            <Box
              component="img"
              src={logoImg}
              alt="Caring Hands Logo"
              sx={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                objectFit: 'contain',
                border: '1.5px solid #e0f2fe'
              }}
            />
            <Box>
              <Typography variant="subtitle1" fontWeight={800} color="#0284c7" lineHeight={1.1}>
                CARING HANDS
              </Typography>
              <Typography variant="caption" color="#64748b" fontWeight={600}>
                Child Development
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleDrawerToggle} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ my: 1.5 }} />

        <Typography variant="caption" sx={{ color: '#0284c7', display: 'block', mb: 2, fontWeight: 700 }}>
          "Small Steps... Big Futures... ❤️"
        </Typography>

        <List sx={{ mb: 2 }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <ListItem key={link.name} disablePadding sx={{ mb: 0.6 }}>
                <ListItemButton
                  component={Link}
                  to={link.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: 2.5,
                    bgcolor: isActive ? 'rgba(2, 132, 199, 0.08)' : 'transparent',
                    color: isActive ? '#0284c7' : '#334155',
                    py: 1
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36, color: isActive ? '#0284c7' : '#64748b' }}>
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={link.name}
                    primaryTypographyProps={{ fontWeight: isActive ? 700 : 600, fontSize: '0.95rem' }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 'auto', pt: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            component={Link}
            to="/book-appointment"
            onClick={handleDrawerToggle}
            startIcon={<CalendarMonthIcon />}
            sx={{ py: 1.2, fontWeight: 700 }}
          >
            Book Assessment
          </Button>
          <Button
            variant="outlined"
            fullWidth
            component="a"
            href={`tel:${CLINIC_INFO.phone}`}
            startIcon={<PhoneIcon />}
            sx={{ borderColor: '#cbd5e1', color: '#0284c7', py: 1, fontWeight: 600 }}
          >
            Call: {CLINIC_INFO.phone}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
