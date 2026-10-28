import React, { useState } from 'react';
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
  Divider,
  IconButton
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DirectionsIcon from '@mui/icons-material/Directions';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';
import MapRouting from '../components/MapRouting';

const ContactUs = ({ onOpenAppointment }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    childAge: '',
    service: SERVICES_DATA[0].title,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      alert('Please provide your name and phone number');
      return;
    }
    setInquiryRef('INQ-' + Math.floor(100000 + Math.random() * 900000));
    setSubmitted(true);
  };

  return (
    <Box sx={{ bgcolor: '#f8fafc', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', mb: 6 }}>
          <Chip
            icon={<LocationOnIcon sx={{ color: '#f43f5e !important' }} />}
            label="Get In Touch & Visit Us"
            size="small"
            sx={{ bgcolor: '#ffffff', color: '#0284c7', fontWeight: 800, mb: 2, border: '1px solid #bae6fd' }}
          />
          <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', sm: '3.4rem' }, fontWeight: 900, color: '#0f172a', mb: 2 }}>
            Contact Caring Hands
          </Typography>
          <Typography variant="h6" sx={{ color: '#475569', fontWeight: 500, lineHeight: 1.6 }}>
            Have questions about your child's speech, sensory needs, or developmental milestones? We are here to listen, support, and guide you every step of the way.
          </Typography>
        </Box>

        {/* Quick Contact Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {/* Card 1: Phone */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 3.5,
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                bgcolor: '#ffffff',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-4px)' }
              }}
            >
              <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                <PhoneIcon sx={{ fontSize: 26 }} />
              </Box>
              <Typography variant="subtitle1" fontWeight={800} color="#0f172a">
                Direct Helpline
              </Typography>
              <Typography variant="body2" color="#64748b" sx={{ mb: 1.5 }}>
                Speak with our coordinator
              </Typography>
              <Button
                variant="outlined"
                size="small"
                component="a"
                href={`tel:${CLINIC_INFO.phone}`}
                sx={{ fontWeight: 800, color: '#0284c7', borderColor: '#0284c7' }}
              >
                Call: {CLINIC_INFO.phone}
              </Button>
            </Card>
          </Grid>

          {/* Card 2: WhatsApp */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 3.5,
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                bgcolor: '#ffffff',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-4px)' }
              }}
            >
              <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                <WhatsAppIcon sx={{ fontSize: 26 }} />
              </Box>
              <Typography variant="subtitle1" fontWeight={800} color="#0f172a">
                WhatsApp Chat
              </Typography>
              <Typography variant="body2" color="#64748b" sx={{ mb: 1.5 }}>
                Instant replies & booking
              </Typography>
              <Button
                variant="contained"
                size="small"
                component="a"
                href={`https://wa.me/91${CLINIC_INFO.phone}?text=Hello%20Caring%20Hands`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontWeight: 800, bgcolor: '#22c55e', '&:hover': { bgcolor: '#16a34a' } }}
              >
                Chat on WhatsApp
              </Button>
            </Card>
          </Grid>

          {/* Card 3: Greater Noida West Address */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 3.5,
                textAlign: 'center',
                border: '1px solid #bae6fd',
                bgcolor: '#f0f9ff',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-4px)' }
              }}
            >
              <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#ffffff', color: '#f43f5e', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                <LocationOnIcon sx={{ fontSize: 26 }} />
              </Box>
              <Typography variant="subtitle1" fontWeight={800} color="#0369a1">
                Main Therapy Hub
              </Typography>
              <Typography variant="body2" color="#0c4a6e" sx={{ fontSize: '0.82rem', mb: 1 }}>
                G-104, Fusion Homes, Amrapali Dream Valley, Gr. Noida West
              </Typography>
              <Chip label="Mon-Sat: 9am - 7:30pm" size="small" sx={{ fontSize: '0.7rem', fontWeight: 700 }} />
            </Card>
          </Grid>

          {/* Card 4: Pune Center */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 3.5,
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                bgcolor: '#ffffff',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-4px)' }
              }}
            >
              <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#f1f5f9', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                <LocationOnIcon sx={{ fontSize: 26 }} />
              </Box>
              <Typography variant="subtitle1" fontWeight={800} color="#0f172a">
                Pune Center (Trust)
              </Typography>
              <Typography variant="body2" color="#64748b" sx={{ fontSize: '0.82rem', mb: 1 }}>
                Ambi, Near Talegaon MIDC Rd, Dist Pune 410507
              </Typography>
              <Typography variant="caption" sx={{ color: '#0284c7', fontWeight: 700, display: 'block' }}>
                Mob: 9011262226
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* ================= INTERACTIVE MAP ROUTING COMPONENT ================= */}
        <Box sx={{ mb: 8 }} id="map">
          <MapRouting />
        </Box>

        {/* Inquiry Form & FAQs Section */}
        <Grid container spacing={4} alignItems="stretch">
          {/* Contact Inquiry Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4.5 },
                borderRadius: 4,
                bgcolor: '#ffffff',
                border: '2px solid #e2e8f0',
                height: '100%'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <SendIcon sx={{ color: '#0284c7', fontSize: 24 }} />
                <Typography variant="h5" fontWeight={900} color="#0f172a">
                  Send Us An Inquiry
                </Typography>
              </Box>
              <Typography variant="body2" color="#64748b" sx={{ mb: 3 }}>
                Fill out the form below and our clinical coordinator will reach out to you within 2 business hours.
              </Typography>

              {submitted ? (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <CheckCircleIcon sx={{ fontSize: 56, color: '#16a34a', mb: 1.5 }} />
                  <Typography variant="h5" fontWeight={800} color="#0f172a" gutterBottom>
                    Thank You! Inquiry Submitted.
                  </Typography>
                  <Chip label={`Reference: ${inquiryRef}`} color="primary" sx={{ fontWeight: 800, my: 1 }} />
                  <Typography variant="body1" color="#334155" sx={{ mt: 1, mb: 3 }}>
                    We have received your message, <strong>{formState.name}</strong>. Our specialist will call you at{' '}
                    <strong>{formState.phone}</strong>.
                  </Typography>
                  <Button variant="outlined" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Parent's Name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Phone Number"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Child's Age"
                        name="childAge"
                        placeholder="e.g. 3 years 4 months"
                        value={formState.childAge}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        select
                        fullWidth
                        label="Therapy Service Interested In"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                      >
                        {SERVICES_DATA.map((srv) => (
                          <MenuItem key={srv.id} value={srv.title}>
                            {srv.title} ({srv.tagline})
                          </MenuItem>
                        ))}
                        <MenuItem value="General Assessment & Multi-Disciplinary Consult">
                          🌟 General Assessment & Multi-Disciplinary Consult
                        </MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={3.5}
                        label="How can we help your child?"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Briefly describe what challenges your child is experiencing..."
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      startIcon={<SendIcon />}
                      sx={{ px: 4, py: 1.2, fontWeight: 800 }}
                    >
                      Submit Inquiry
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => onOpenAppointment()}
                      sx={{ fontWeight: 700 }}
                    >
                      Instant Assessment Booking
                    </Button>
                  </Box>
                </Box>
              )}
            </Paper>
          </Grid>

          {/* Visiting Information & Transit Directions */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                border: '1px solid #e2e8f0',
                bgcolor: '#ffffff',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                <Typography variant="h5" fontWeight={900} color="#0f172a" sx={{ mb: 2 }}>
                  How to Reach Us
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                  <LocationOnIcon sx={{ color: '#f43f5e', mt: 0.3 }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={800} color="#0f172a">
                      Center Address:
                    </Typography>
                    <Typography variant="body2" color="#475569" sx={{ lineHeight: 1.6 }}>
                      {CLINIC_INFO.primaryAddress.full}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle2" fontWeight={800} color="#0284c7" sx={{ mb: 1.5 }}>
                  Public Transit & Driving Notes:
                </Typography>
                <Box component="ul" sx={{ pl: 2.5, m: 0, fontSize: '0.88rem', color: '#475569', lineHeight: 1.7 }}>
                  <li><strong>From Gaur City / Char Murti:</strong> Take the road towards Amrapali Dream Valley (approx 5-7 minutes drive).</li>
                  <li><strong>Nearest Metro Stations:</strong> Noida Sector 52 & Noida Sector 76. Regular shared autos, e-rickshaws, and cabs directly connect to Fusion Homes.</li>
                  <li><strong>From Ghaziabad / Indirapuram:</strong> Accessible via NH-24 / Crossings Republik exit.</li>
                  <li><strong>Parking:</strong> Secure designated visitor parking inside Fusion Homes complex.</li>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon sx={{ color: '#16a34a', fontSize: 20 }} />
                  <Typography variant="subtitle2" fontWeight={800} color="#0f172a">
                    Center Timings:
                  </Typography>
                </Box>
                <Typography variant="body2" color="#475569" sx={{ pl: 3.5, mt: 0.5 }}>
                  {CLINIC_INFO.primaryAddress.hours}
                </Typography>
              </Box>

              <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #f1f5f9' }}>
                <Button
                  fullWidth
                  variant="contained"
                  component="a"
                  href={`https://wa.me/91${CLINIC_INFO.phone}?text=Hello%20Caring%20Hands,%20I%20need%20location%20assistance`}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<WhatsAppIcon />}
                  sx={{ bgcolor: '#22c55e', '&:hover': { bgcolor: '#16a34a' }, fontWeight: 800, py: 1.2 }}
                >
                  Share Location on WhatsApp
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
