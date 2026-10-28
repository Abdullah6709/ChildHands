import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, Fab, Tooltip } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { theme } from './theme/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import RouteMapPage from './pages/RouteMapPage';
import ContactUs from './pages/ContactUs';
import BookAppointmentPage from './pages/BookAppointmentPage';
import { CLINIC_INFO } from './data/clinicData';

// Scroll to top on route change or hash navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  const handleOpenAppointment = (serviceTitle = '') => {
    setSelectedServiceForBooking(serviceTitle);
    setAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setAppointmentOpen(false);
    setSelectedServiceForBooking('');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#f8fafc' }}>
          {/* Header Navigation */}
          <Navbar onOpenAppointment={() => handleOpenAppointment()} />

          {/* Main Dedicated Browser Routes */}
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              {/* Home Page Route */}
              <Route path="/" element={<Home onOpenAppointment={handleOpenAppointment} />} />

              {/* About Us Page Route */}
              <Route path="/about" element={<AboutUs onOpenAppointment={handleOpenAppointment} />} />

              {/* All Services Overview Route */}
              <Route path="/services" element={<ServicesPage onOpenAppointment={handleOpenAppointment} />} />

              {/* Dedicated Individual Browser Route for Each Service */}
              <Route
                path="/services/:serviceId"
                element={<ServiceDetailPage onOpenAppointment={handleOpenAppointment} />}
              />

              {/* Dedicated Route for Live Map Routing & Directions */}
              <Route path="/map-routing" element={<RouteMapPage onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/directions" element={<RouteMapPage onOpenAppointment={handleOpenAppointment} />} />

              {/* Contact Us Page Route */}
              <Route path="/contact" element={<ContactUs onOpenAppointment={handleOpenAppointment} />} />

              {/* Dedicated Book Assessment Page Route */}
              <Route path="/book-appointment" element={<BookAppointmentPage />} />

              {/* Fallback Route */}
              <Route path="*" element={<Home onOpenAppointment={handleOpenAppointment} />} />
            </Routes>
          </Box>

          {/* Footer */}
          <Footer onOpenAppointment={() => handleOpenAppointment()} />

          {/* Global Appointment Booking Dialog */}
          <AppointmentModal
            open={appointmentOpen}
            onClose={handleCloseAppointment}
            defaultService={selectedServiceForBooking}
          />

          {/* Floating Action Buttons */}
          <Box
            sx={{
              position: 'fixed',
              bottom: { xs: 20, md: 30 },
              right: { xs: 20, md: 30 },
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              zIndex: 1000
            }}
          >
            {/* WhatsApp Floating Button */}
            <Tooltip title="Chat on WhatsApp" placement="left" arrow>
              <Fab
                component="a"
                href={`https://wa.me/91${CLINIC_INFO.phone}?text=Hello%20Caring%20Hands,%20I%20would%20like%20to%20inquire%20about%20child%20therapy.`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: '#22c55e',
                  color: '#ffffff',
                  boxShadow: '0 8px 24px rgba(34, 197, 94, 0.45)',
                  '&:hover': { bgcolor: '#16a34a' }
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 28 }} />
              </Fab>
            </Tooltip>

            {/* Direct Call Floating Button */}
            <Tooltip title="Call Clinic" placement="left" arrow>
              <Fab
                component="a"
                href={`tel:${CLINIC_INFO.phone}`}
                sx={{
                  bgcolor: '#0284c7',
                  color: '#ffffff',
                  boxShadow: '0 8px 24px rgba(2, 132, 199, 0.45)',
                  '&:hover': { bgcolor: '#0369a1' }
                }}
              >
                <PhoneIcon sx={{ fontSize: 26 }} />
              </Fab>
            </Tooltip>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
