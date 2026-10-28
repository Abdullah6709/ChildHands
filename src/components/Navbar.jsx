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
  Menu,
  MenuItem,
  Container,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsIcon from '@mui/icons-material/Directions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';

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
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Map & Route', path: '/map-routing', icon: <DirectionsIcon fontSize="small" sx={{ mr: 0.5 }} /> },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <Box
        sx={{
          bgcolor: '#0f172a',
          color: '#e2e8f0',
          py: 0.8,
          fontSize: '0.85rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1
            }}
          >
            {/* Left Info: Contact & Address */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 3 }, flexWrap: 'wrap' }}>
              <Box
                component="a"
                href={`tel:${CLINIC_INFO.phone}`}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#38bdf8',
                  textDecoration: 'none',
                  fontWeight: 600,
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                <PhoneIcon sx={{ fontSize: 16, mr: 0.5, color: '#38bdf8' }} />
                Mob: {CLINIC_INFO.displayPhone}
              </Box>

              <Box
                component={Link}
                to="/map-routing"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  '&:hover': { color: '#ffffff' }
                }}
              >
                <LocationOnIcon sx={{ fontSize: 16, mr: 0.5, color: '#f43f5e' }} />
                G-104, Fusion Homes, Greater Noida West
              </Box>

              <Box
                component="a"
                href="mailto:info@caringhands.org.in"
                sx={{
                  display: { xs: 'none', lg: 'flex' },
                  alignItems: 'center',
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  '&:hover': { color: '#ffffff' }
                }}
              >
                <EmailIcon sx={{ fontSize: 16, mr: 0.5 }} />
                info@caringhands.org.in
              </Box>
            </Box>

            {/* Right Badges & WhatsApp */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Chip
                label="Every Child Matters ❤️"
                size="small"
                sx={{
                  bgcolor: 'rgba(244, 63, 94, 0.2)',
                  color: '#fb7185',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  display: { xs: 'none', sm: 'flex' }
                }}
              />
              <Button
                component="a"
                href={`https://wa.me/91${CLINIC_INFO.phone}?text=Hello%20Caring%20Hands,%20I%20would%20like%20to%20inquire%20about%20child%20therapy%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                startIcon={<WhatsAppIcon sx={{ fontSize: '1.1rem !important' }} />}
                sx={{
                  bgcolor: '#22c55e',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  py: 0.3,
                  px: 1.5,
                  borderRadius: 20,
                  '&:hover': { bgcolor: '#16a34a' }
                }}
              >
                WhatsApp Us
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
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e2e8f0',
          color: '#0f172a'
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
                mr: { md: 4 }
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(2, 132, 199, 0.35)'
                }}
              >
                <FavoriteIcon sx={{ color: '#f43f5e', fontSize: 26 }} />
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 900,
                    lineHeight: 1.1,
                    fontSize: { xs: '1.05rem', sm: '1.25rem' },
                    color: '#0284c7',
                    letterSpacing: '-0.02em'
                  }}
                >
                  CARING HANDS
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    fontWeight: 700,
                    color: '#64748b',
                    fontSize: { xs: '0.68rem', sm: '0.75rem' },
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}
                >
                  Child Development Center
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, flexGrow: 1 }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path === '/services' && location.pathname.startsWith('/services'));
                if (link.hasDropdown) {
                  return (
                    <Box key={link.name}>
                      <Button
                        onClick={handleServicesClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                          color: isActive ? '#0284c7' : '#334155',
                          fontWeight: isActive ? 700 : 600,
                          fontSize: '0.95rem',
                          px: 2,
                          bgcolor: isActive ? 'rgba(2, 132, 199, 0.08)' : 'transparent',
                          '&:hover': { bgcolor: 'rgba(2, 132, 199, 0.08)', color: '#0284c7' }
                        }}
                      >
                        {link.name}
                      </Button>
                      <Menu
                        anchorEl={servicesAnchor}
                        open={Boolean(servicesAnchor)}
                        onClose={handleServicesClose}
                        sx={{
                          mt: 1,
                          '& .MuiPaper-root': {
                            borderRadius: 3,
                            boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                            p: 1,
                            minWidth: 280
                          }
                        }}
                      >
                        <MenuItem
                          component={Link}
                          to="/services"
                          onClick={handleServicesClose}
                          sx={{
                            fontWeight: 700,
                            color: '#0284c7',
                            borderBottom: '1px solid #f1f5f9',
                            pb: 1,
                            mb: 0.5
                          }}
                        >
                          View All 9 Services Overview
                        </MenuItem>
                        {SERVICES_DATA.map((srv) => (
                          <MenuItem
                            key={srv.id}
                            component={Link}
                            to={`/services/${srv.id}`}
                            onClick={handleServicesClose}
                            sx={{
                              fontSize: '0.9rem',
                              borderRadius: 1.5,
                              py: 0.8,
                              '&:hover': { bgcolor: srv.bgLight, color: srv.color }
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
                    startIcon={link.icon}
                    sx={{
                      color: isActive ? '#0284c7' : '#334155',
                      fontWeight: isActive ? 700 : 600,
                      fontSize: '0.95rem',
                      px: 2,
                      bgcolor: isActive ? 'rgba(2, 132, 199, 0.08)' : 'transparent',
                      '&:hover': { bgcolor: 'rgba(2, 132, 199, 0.08)', color: '#0284c7' }
                    }}
                  >
                    {link.name}
                  </Button>
                );
              })}
            </Box>

            {/* Desktop Action Buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
              <Button
                variant="outlined"
                component="a"
                href={`tel:${CLINIC_INFO.phone}`}
                startIcon={<PhoneIcon />}
                sx={{
                  borderColor: '#0284c7',
                  color: '#0284c7',
                  fontWeight: 700,
                  '&:hover': { borderColor: '#0369a1', bgcolor: 'rgba(2, 132, 199, 0.05)' }
                }}
              >
                Call Clinic
              </Button>

              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/book-appointment"
                startIcon={<CalendarMonthIcon />}
                className="pulse-button"
                sx={{
                  fontWeight: 700,
                  px: 3,
                  py: 1.2
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
              sx={{ display: { md: 'none' }, color: '#0284c7' }}
            >
              <MenuIcon fontSize="large" />
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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300, p: 2 }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FavoriteIcon sx={{ color: '#f43f5e', fontSize: 24 }} />
            <Typography variant="subtitle1" fontWeight={800} color="#0284c7">
              CARING HANDS
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 2, fontWeight: 600 }}>
          "Small Steps... Big Futures... ☀️"
        </Typography>

        <List sx={{ mb: 2 }}>
          {navLinks.map((link) => (
            <ListItem key={link.name} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                to={link.path}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  bgcolor: location.pathname === link.path ? 'rgba(2, 132, 199, 0.1)' : 'transparent',
                  color: location.pathname === link.path ? '#0284c7' : '#334155'
                }}
              >
                <ListItemText primary={link.name} primaryTypographyProps={{ fontWeight: 600 }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={Link}
              to="/book-appointment"
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 2,
                bgcolor: location.pathname === '/book-appointment' ? 'rgba(244, 63, 94, 0.1)' : 'transparent',
                color: '#e11d48',
                fontWeight: 700
              }}
            >
              <ListItemText primary="📅 Book Assessment Page" primaryTypographyProps={{ fontWeight: 700 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 'auto' }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            component={Link}
            to="/book-appointment"
            onClick={handleDrawerToggle}
            startIcon={<CalendarMonthIcon />}
          >
            Book Assessment
          </Button>
          <Button
            variant="outlined"
            fullWidth
            component="a"
            href={`tel:${CLINIC_INFO.phone}`}
            startIcon={<PhoneIcon />}
            sx={{ borderColor: '#0284c7', color: '#0284c7' }}
          >
            Call: {CLINIC_INFO.phone}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
