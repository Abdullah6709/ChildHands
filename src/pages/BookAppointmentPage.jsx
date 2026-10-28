import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Button,
  Chip,
  Alert,
  Paper,
  Breadcrumbs,
  Divider
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';

const BookAppointmentPage = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '',
    service: SERVICES_DATA[0].title,
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    concerns: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone || !formData.childName) {
      alert('Please fill in required fields: Parent Name, Phone, and Child Name');
      return;
    }
    const newId = 'CH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(newId);
    setSubmitted(true);
  };

  return (
    <Box sx={{ bgcolor: '#f8fafc', py: { xs: 5, md: 7 } }}>
      <Container maxWidth="xl">
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link to="/" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 600 }}>
            Home
          </Link>
          <Typography color="#0284c7" fontWeight={700}>
            Book Assessment
          </Typography>
        </Breadcrumbs>

        <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', mb: 6 }}>
          <Chip
            icon={<CalendarMonthIcon sx={{ color: '#f43f5e !important' }} />}
            label="Child Developmental Assessment Booking"
            size="small"
            sx={{ bgcolor: '#ffffff', color: '#0284c7', fontWeight: 800, mb: 1.5, border: '1px solid #bae6fd' }}
          />
          <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', sm: '3.2rem' }, fontWeight: 900, color: '#0f172a', mb: 2 }}>
            Schedule Your Child's Assessment
          </Typography>
          <Typography variant="h6" sx={{ color: '#475569', fontWeight: 500, lineHeight: 1.6 }}>
            Take the first step toward your child's brighter future. Meet our senior pediatric specialists at G-104 Fusion Homes, Greater Noida West.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 5 },
                borderRadius: 4,
                bgcolor: '#ffffff',
                border: '2px solid #e2e8f0',
                boxShadow: '0 12px 36px rgba(0,0,0,0.05)'
              }}
            >
              {submitted ? (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <CheckCircleIcon sx={{ fontSize: 72, color: '#16a34a', mb: 2 }} />
                  <Typography variant="h4" fontWeight={900} color="#0f172a" gutterBottom>
                    Appointment Confirmed!
                  </Typography>
                  <Chip
                    label={`Booking ID: ${bookingRef}`}
                    color="primary"
                    sx={{ fontWeight: 800, fontSize: '1rem', py: 1.2, px: 2, my: 1.5 }}
                  />
                  <Typography variant="body1" color="#334155" sx={{ mt: 2, mb: 3, maxWidth: 600, mx: 'auto' }}>
                    Dear <strong>{formData.parentName}</strong>, thank you for booking a developmental assessment for{' '}
                    <strong>{formData.childName}</strong>. Our clinical team has reserved your preliminary slot for{' '}
                    <strong>{formData.preferredDate || 'Upcoming Available Date'}</strong> ({formData.preferredTime}).
                  </Typography>

                  <Alert severity="success" sx={{ textAlign: 'left', borderRadius: 3, mb: 4, maxWidth: 600, mx: 'auto' }}>
                    <strong>Center Address:</strong> G-104, Fusion Homes, Amrapali Dream Valley, Greater Noida West 201318.<br />
                    <strong>Coordinator Phone:</strong> {CLINIC_INFO.phone}
                  </Alert>

                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      component="a"
                      href={`https://wa.me/91${CLINIC_INFO.phone}?text=Hello%20Caring%20Hands,%20I%20have%20booked%20an%20assessment%20for%20my%20child%20${formData.childName}%20(Booking%20ID:%20${bookingRef}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<WhatsAppIcon />}
                      sx={{ bgcolor: '#22c55e', '&:hover': { bgcolor: '#16a34a' }, fontWeight: 800, px: 3, py: 1.2 }}
                    >
                      Confirm on WhatsApp
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => setSubmitted(false)}
                      sx={{ fontWeight: 700 }}
                    >
                      Book Another Child
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  <Typography variant="h5" fontWeight={800} color="#0f172a" sx={{ mb: 1 }}>
                    Child & Parent Details
                  </Typography>
                  <Typography variant="body2" color="#64748b" sx={{ mb: 3 }}>
                    Please provide the details below so our specialists can prepare for the session.
                  </Typography>

                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Parent / Guardian Name"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Contact Phone / WhatsApp"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Child's Full Name"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Child's Age (e.g. 3 years 6 months)"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        select
                        fullWidth
                        label="Primary Service Required"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        {SERVICES_DATA.map((srv) => (
                          <MenuItem key={srv.id} value={srv.title}>
                            {srv.title} — {srv.tagline}
                          </MenuItem>
                        ))}
                        <MenuItem value="Comprehensive Multi-Disciplinary Evaluation">
                          🌟 Comprehensive Multi-Disciplinary Evaluation (Speech + Sensory + OT)
                        </MenuItem>
                      </TextField>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        type="date"
                        label="Preferred Date"
                        name="preferredDate"
                        InputLabelProps={{ shrink: true }}
                        value={formData.preferredDate}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        fullWidth
                        label="Preferred Time Slot"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                      >
                        <MenuItem value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</MenuItem>
                        <MenuItem value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</MenuItem>
                        <MenuItem value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Key Developmental Concerns & Goals"
                        name="concerns"
                        value={formData.concerns}
                        onChange={handleChange}
                        placeholder="Tell us about speech delay, sensory sensitivity, behavioral challenges, or doctor references..."
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button
                      component={Link}
                      to="/"
                      sx={{ color: '#64748b', fontWeight: 600 }}
                    >
                      Back to Home
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      size="large"
                      startIcon={<CalendarMonthIcon />}
                      sx={{ px: 4, py: 1.3, fontWeight: 800, borderRadius: 30 }}
                    >
                      Confirm Booking Request
                    </Button>
                  </Box>
                </Box>
              )}
            </Paper>
          </Grid>

          {/* Side Info */}
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3.5, borderRadius: 4, border: '1px solid #e2e8f0', bgcolor: '#ffffff', mb: 3 }}>
              <Typography variant="h6" fontWeight={800} color="#0284c7" gutterBottom>
                What Happens Next?
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <VerifiedIcon sx={{ color: '#16a34a', mt: 0.2 }} />
                  <Typography variant="body2" color="#334155">
                    <strong>1. Phone Briefing:</strong> Our clinical coordinator will call to confirm your appointment and time slot.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <VerifiedIcon sx={{ color: '#0284c7', mt: 0.2 }} />
                  <Typography variant="body2" color="#334155">
                    <strong>2. In-Person Assessment:</strong> Comprehensive 45-min observation with senior therapist at Fusion Homes.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <VerifiedIcon sx={{ color: '#ea580c', mt: 0.2 }} />
                  <Typography variant="body2" color="#334155">
                    <strong>3. Personalized Plan:</strong> Receive an Individualized Education Plan (IEP) tailored for your child.
                  </Typography>
                </Box>
              </Box>
            </Card>

            <Card sx={{ p: 3.5, borderRadius: 4, border: '1px solid #bae6fd', bgcolor: '#f0f9ff' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <PhoneIcon sx={{ color: '#0284c7' }} />
                <Typography variant="subtitle1" fontWeight={800} color="#0369a1">
                  Need Help Booking?
                </Typography>
              </Box>
              <Typography variant="body2" color="#0c4a6e" sx={{ mb: 2 }}>
                Call our direct reception hotline for immediate assistance or same-day scheduling.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                component="a"
                href={`tel:${CLINIC_INFO.phone}`}
                sx={{ bgcolor: '#0284c7', fontWeight: 800 }}
              >
                Call: {CLINIC_INFO.phone}
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BookAppointmentPage;
