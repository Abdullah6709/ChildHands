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
    <Box sx={{ bgcolor: '#FDFBF7', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 820, mx: 'auto', mb: 6 }}>
          <Chip
            icon={<LocationOnIcon sx={{ color: '#E76100 !important' }} />}
            label="Get In Touch & Visit Our Centers"
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
            Contact Caring Hands
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Schoolbell", cursive',
              color: '#02476c',
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              fontWeight: 700,
              mb: 2
            }}
          >
            Give a helping hand for a child ☀️
          </Typography>
          <Typography variant="h6" sx={{ color: '#757277', fontWeight: 500, lineHeight: 1.6, fontSize: { xs: '1rem', sm: '1.15rem' } }}>
            Have questions about your child's speech milestones, sensory needs, or developmental therapy? Our compassionate team is here to listen, guide, and support you every step of the journey.
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
                borderRadius: 4,
                textAlign: 'center',
                border: '1px solid #EFECE7',
                bgcolor: '#ffffff',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 25px rgba(2, 71, 108, 0.08)' }
              }}
            >
              <Box sx={{ width: 52, height: 52, borderRadius: '50%', bgcolor: '#FFFAEA', color: '#02476c', border: '1px solid #F6D469', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                <PhoneIcon sx={{ fontSize: 26 }} />
              </Box>
              <Typography variant="subtitle1" fontWeight={800} color="#24102F" sx={{ fontFamily: '"Quicksand", sans-serif' }}>
                Direct Helpline
              </Typography>
              <Typography variant="body2" color="#757277" sx={{ mb: 2 }}>
                Speak with our coordinator
              </Typography>
              <Button
                variant="outlined"
                size="small"
                component="a"
                href={`tel:${CLINIC_INFO.phone}`}
                sx={{
                  fontWeight: 800,
                  color: '#02476c',
                  borderColor: '#02476c',
                  borderRadius: 50,
                  '&:hover': { borderColor: '#02476c', bgcolor: '#FFFAEA' }
                }}
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
                borderRadius: 4,
                textAlign: 'center',
                border: '1px solid #EFECE7',
                bgcolor: '#ffffff',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 25px rgba(2, 71, 108, 0.08)' }
              }}
            >
              <Box sx={{ width: 52, height: 52, borderRadius: '50%', bgcolor: '#e8f7ec', color: '#59C36A', border: '1px solid #c2ebcb', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                <WhatsAppIcon sx={{ fontSize: 26 }} />
              </Box>
              <Typography variant="subtitle1" fontWeight={800} color="#24102F" sx={{ fontFamily: '"Quicksand", sans-serif' }}>
                WhatsApp Chat
              </Typography>
              <Typography variant="body2" color="#757277" sx={{ mb: 2 }}>
                Instant replies & booking
              </Typography>
              <Button
                variant="contained"
                size="small"
                component="a"
                href={`https://wa.me/91${CLINIC_INFO.phone}?text=Hello%20Caring%20Hands`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontWeight: 800,
                  bgcolor: '#59C36A',
                  color: '#ffffff',
                  borderRadius: 50,
                  '&:hover': { bgcolor: '#46a354' }
                }}
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
                borderRadius: 4,
                textAlign: 'center',
                border: '1px solid #EFECE7',
                bgcolor: '#ffffff',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 25px rgba(2, 71, 108, 0.08)' }
              }}
            >
              <Box sx={{ width: 52, height: 52, borderRadius: '50%', bgcolor: '#FFFAEA', color: '#E76100', border: '1px solid #F6D469', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                <LocationOnIcon sx={{ fontSize: 26 }} />
              </Box>
              <Typography variant="subtitle1" fontWeight={800} color="#02476c" sx={{ fontFamily: '"Quicksand", sans-serif' }}>
                Child Development Hub
              </Typography>
              <Typography variant="body2" color="#757277" sx={{ fontSize: '0.82rem', mb: 1.5 }}>
                G-104, Fusion Homes, Tech Zone IV, Greater Noida West 201318
              </Typography>
              <Chip label="Mon-Sat: 9am - 7:30pm" size="small" sx={{ fontSize: '0.72rem', fontWeight: 700, borderRadius: 50, bgcolor: '#FFFAEA', color: '#02476c' }} />
            </Card>
          </Grid>

          {/* Card 4: Email & Inquiries */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 4,
                textAlign: 'center',
                border: '1px solid #EFECE7',
                bgcolor: '#ffffff',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 25px rgba(2, 71, 108, 0.08)' }
              }}
            >
              <Box sx={{ width: 52, height: 52, borderRadius: '50%', bgcolor: '#FFFAEA', color: '#02476c', border: '1px solid #F6D469', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                <EmailIcon sx={{ fontSize: 26 }} />
              </Box>
              <Typography variant="subtitle1" fontWeight={800} color="#24102F" sx={{ fontFamily: '"Quicksand", sans-serif' }}>
                Email Inquiries
              </Typography>
              <Typography variant="body2" color="#757277" sx={{ fontSize: '0.82rem', mb: 1 }}>
                info@caringhands.org.in
              </Typography>
              <Button
                variant="outlined"
                size="small"
                component="a"
                href="mailto:info@caringhands.org.in"
                sx={{
                  fontWeight: 800,
                  color: '#02476c',
                  borderColor: '#02476c',
                  borderRadius: 50,
                  fontSize: '0.75rem',
                  mb: 1,
                  '&:hover': { borderColor: '#02476c', bgcolor: '#FFFAEA' }
                }}
              >
                Send Email
              </Button>
              <Chip label="24/7 Response Desk" size="small" sx={{ fontSize: '0.72rem', fontWeight: 700, borderRadius: 50, bgcolor: '#FFFAEA', color: '#02476c', display: 'block' }} />
            </Card>
          </Grid>
        </Grid>

        {/* ================= INTERACTIVE MAP ROUTING COMPONENT ================= */}
        <Box sx={{ mb: 8 }} id="map">
          <MapRouting />
        </Box>

        {/* Inquiry Form & Visiting Details */}
        <Grid container spacing={4} alignItems="stretch" sx={{ mb: 8 }}>
          {/* Contact Inquiry Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4.5 },
                borderRadius: 4.5,
                bgcolor: '#ffffff',
                border: '1px solid #EFECE7',
                height: '100%',
                boxShadow: '0 4px 20px rgba(2, 71, 108, 0.03)'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                <SendIcon sx={{ color: '#02476c', fontSize: 24 }} />
                <Typography variant="h5" fontWeight={900} color="#24102F" sx={{ fontFamily: '"Quicksand", sans-serif' }}>
                  Send Us An Inquiry
                </Typography>
              </Box>
              <Typography variant="body2" color="#757277" sx={{ mb: 3 }}>
                Fill out the form below and our clinical coordinator will reach out to you within 2 business hours.
              </Typography>

              {submitted ? (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <CheckCircleIcon sx={{ fontSize: 56, color: '#59C36A', mb: 1.5 }} />
                  <Typography variant="h5" fontWeight={800} color="#24102F" gutterBottom sx={{ fontFamily: '"Quicksand", sans-serif' }}>
                    Thank You! Inquiry Submitted.
                  </Typography>
                  <Chip label={`Reference: ${inquiryRef}`} sx={{ fontWeight: 800, my: 1, bgcolor: '#FFFAEA', color: '#02476c', border: '1px solid #F6D469' }} />
                  <Typography variant="body1" color="#757277" sx={{ mt: 1, mb: 3 }}>
                    We have received your message, <strong>{formState.name}</strong>. Our specialist will call you at{' '}
                    <strong>{formState.phone}</strong>.
                  </Typography>
                  <Button variant="outlined" onClick={() => setSubmitted(false)} sx={{ borderRadius: 50, borderColor: '#02476c', color: '#02476c' }}>
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

                  <Box sx={{ mt: 3, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<SendIcon />}
                      sx={{
                        px: 4,
                        py: 1.2,
                        fontWeight: 900,
                        bgcolor: '#02476c',
                        color: '#ffffff',
                        borderRadius: 50,
                        '&:hover': { bgcolor: '#012d45' }
                      }}
                    >
                      Submit Inquiry
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => onOpenAppointment()}
                      sx={{
                        fontWeight: 900,
                        bgcolor: '#F6D469',
                        color: '#24102F',
                        borderRadius: 50,
                        px: 3,
                        py: 1.2,
                        '&:hover': { bgcolor: '#fcb720' }
                      }}
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
                borderRadius: 4.5,
                border: '1px solid #EFECE7',
                bgcolor: '#ffffff',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(2, 71, 108, 0.03)'
              }}
            >
              <Box>
                <Typography variant="h5" fontWeight={900} color="#24102F" sx={{ mb: 2, fontFamily: '"Quicksand", sans-serif' }}>
                  How to Reach Us
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                  <LocationOnIcon sx={{ color: '#E76100', mt: 0.3 }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={800} color="#24102F">
                      Center Address:
                    </Typography>
                    <Typography variant="body2" color="#757277" sx={{ lineHeight: 1.6 }}>
                      {CLINIC_INFO.primaryAddress.full}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle2" fontWeight={800} color="#02476c" sx={{ mb: 1.5, fontFamily: '"Quicksand", sans-serif' }}>
                  Public Transit & Driving Notes:
                </Typography>
                <Box component="ul" sx={{ pl: 2.5, m: 0, fontSize: '0.88rem', color: '#757277', lineHeight: 1.7 }}>
                  <li><strong>From Gaur City / Ek Murti:</strong> Take the road towards Tech Zone IV, Greater Noida West (approx 5-7 minutes drive).</li>
                  <li><strong>Nearest Metro Stations:</strong> Noida Sector 52 & Noida Sector 76. Regular shared autos, e-rickshaws, and cabs directly connect to Fusion Homes.</li>
                  <li><strong>From Ghaziabad / Indirapuram:</strong> Accessible via NH-24 / Crossings Republik exit.</li>
                  <li><strong>Parking:</strong> Secure designated visitor parking inside Fusion Homes complex.</li>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon sx={{ color: '#59C36A', fontSize: 20 }} />
                  <Typography variant="subtitle2" fontWeight={800} color="#24102F">
                    Center Timings:
                  </Typography>
                </Box>
                <Typography variant="body2" color="#757277" sx={{ pl: 3.5, mt: 0.5 }}>
                  {CLINIC_INFO.primaryAddress.hours}
                </Typography>
              </Box>

              <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #EFECE7' }}>
                <Button
                  fullWidth
                  variant="contained"
                  component="a"
                  href={`https://wa.me/91${CLINIC_INFO.phone}?text=Hello%20Caring%20Hands,%20I%20need%20location%20assistance`}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<WhatsAppIcon />}
                  sx={{ bgcolor: '#59C36A', '&:hover': { bgcolor: '#46a354' }, fontWeight: 800, py: 1.2, borderRadius: 50, color: '#ffffff' }}
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