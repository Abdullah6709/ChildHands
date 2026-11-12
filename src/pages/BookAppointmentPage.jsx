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
  Divider,
  Stack
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
    <Box sx={{ bgcolor: '#FDFBF7', py: { xs: 5, md: 7 } }}>
      <Container maxWidth="xl">
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link to="/" style={{ color: '#757277', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            Home
          </Link>
          <Typography color="#02476c" fontWeight={700} fontSize="0.9rem">
            Book Child Assessment
          </Typography>
        </Breadcrumbs>

        {/* Page Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto', mb: 5 }}>
          <Chip
            icon={<FavoriteIcon sx={{ color: '#E76100 !important' }} />}
            label="Schedule an In-Person Consultation"
            size="small"
            sx={{
              bgcolor: '#FFFAEA',
              color: '#02476c',
              fontWeight: 800,
              mb: 2,
              px: 1.5,
              py: 0.5,
              border: '1px solid #F6D469',
              borderRadius: 50
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.8rem' },
              fontWeight: 900,
              color: '#24102F',
              fontFamily: '"Quicksand", sans-serif',
              mb: 1.5
            }}
          >
            Book Your Child's Assessment
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Schoolbell", cursive',
              color: '#02476c',
              fontSize: { xs: '1.2rem', sm: '1.45rem' },
              fontWeight: 700,
              mb: 1.5
            }}
          >
            Give a helping hand for a child ☀️
          </Typography>
          <Typography variant="body1" sx={{ color: '#757277', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Take the first step toward your child's milestone leap. Meet senior pediatric specialists at G-104, Fusion Homes, Tech Zone IV, Greater Noida West 201318.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {/* Main Form Column */}
          <Grid item xs={12} lg={8}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 5 },
                borderRadius: 4.5,
                bgcolor: '#ffffff',
                border: '1px solid #EFECE7',
                boxShadow: '0 4px 20px rgba(2, 71, 108, 0.04)'
              }}
            >
              {submitted ? (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      bgcolor: '#FFFAEA',
                      color: '#59C36A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      border: '2px solid #59C36A'
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 44 }} />
                  </Box>

                  <Typography variant="h4" fontWeight={900} color="#24102F" gutterBottom sx={{ fontFamily: '"Quicksand", sans-serif' }}>
                    Assessment Request Received!
                  </Typography>

                  <Chip
                    label={`Booking Reference: ${bookingRef}`}
                    sx={{
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      py: 1,
                      px: 2,
                      my: 1.5,
                      bgcolor: '#FFFAEA',
                      color: '#02476c',
                      border: '1px solid #F6D469',
                      borderRadius: 50
                    }}
                  />

                  <Typography variant="body1" color="#757277" sx={{ mt: 2, mb: 3, maxWidth: 580, mx: 'auto', lineHeight: 1.7 }}>
                    Dear <strong>{formData.parentName}</strong>, thank you for booking a developmental assessment for{' '}
                    <strong>{formData.childName}</strong>. Our clinical coordinator will reach out shortly to confirm your scheduled slot.
                  </Typography>

                  <Alert severity="success" sx={{ textAlign: 'left', borderRadius: 3, mb: 4, maxWidth: 600, mx: 'auto' }}>
                    <strong>Clinic Location:</strong> G-104, Fusion Homes, Tech Zone IV, Greater Noida West 201318.<br />
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
                      sx={{ bgcolor: '#59C36A', '&:hover': { bgcolor: '#46a354' }, fontWeight: 800, px: 3, py: 1.2, borderRadius: 50, color: '#ffffff' }}
                    >
                      Instant WhatsApp Confirmation
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => setSubmitted(false)}
                      sx={{ fontWeight: 700, borderRadius: 50, borderColor: '#02476c', color: '#02476c' }}
                    >
                      Book Another Child
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  {/* Step 1: Parent & Contact */}
                  <Typography variant="subtitle1" fontWeight={800} color="#24102F" sx={{ mb: 2, fontFamily: '"Quicksand", sans-serif' }}>
                    1. Parent & Contact Details
                  </Typography>

                  <Grid container spacing={2.5} sx={{ mb: 3.5 }}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Parent / Guardian Name"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Priya Sharma"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Mobile Phone / WhatsApp Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                      />
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  {/* Step 2: Child Details */}
                  <Typography variant="subtitle1" fontWeight={800} color="#24102F" sx={{ mb: 2, fontFamily: '"Quicksand", sans-serif' }}>
                    2. Child & Therapy Details
                  </Typography>

                  <Grid container spacing={2.5} sx={{ mb: 3.5 }}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Child's Full Name"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        placeholder="e.g. Aarav"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Child's Age (e.g. 3 yrs 6 mos)"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        placeholder="e.g. 3 years"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        select
                        fullWidth
                        label="Select Primary Therapy Service"
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
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  {/* Step 3: Preferred Date & Notes */}
                  <Typography variant="subtitle1" fontWeight={800} color="#24102F" sx={{ mb: 2, fontFamily: '"Quicksand", sans-serif' }}>
                    3. Preferred Schedule & Concerns
                  </Typography>

                  <Grid container spacing={2.5} sx={{ mb: 3.5 }}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        type="date"
                        label="Preferred Assessment Date"
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
                        label="Preferred Time Window"
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
                        label="Key Developmental Concerns (Optional)"
                        name="concerns"
                        value={formData.concerns}
                        onChange={handleChange}
                        placeholder="Describe any speech delays, sensory challenges, behavioral triggers, or previous doctor referrals..."
                      />
                    </Grid>
                  </Grid>

                  {/* Submission Footer */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'space-between',
                      alignItems: { xs: 'stretch', sm: 'center' },
                      gap: 2,
                      pt: 1
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LockIcon sx={{ fontSize: 16, color: '#59C36A' }} />
                      <Typography variant="caption" color="#757277" fontWeight={600}>
                        100% Confidential & Secure Pediatric Consultation
                      </Typography>
                    </Box>

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<CalendarMonthIcon />}
                      sx={{
                        px: 4,
                        py: 1.3,
                        fontWeight: 900,
                        borderRadius: 50,
                        bgcolor: '#F6D469',
                        color: '#24102F',
                        '&:hover': { bgcolor: '#fcb720' }
                      }}
                    >
                      Confirm Booking Request
                    </Button>
                  </Box>
                </Box>
              )}
            </Paper>
          </Grid>

          {/* Right Info Column */}
          <Grid item xs={12} lg={4}>
            <Stack spacing={3}>
              <Card sx={{ p: 3, borderRadius: 4.5, border: '1px solid #EFECE7', bgcolor: '#ffffff' }}>
                <Typography variant="subtitle1" fontWeight={800} color="#24102F" gutterBottom sx={{ fontFamily: '"Quicksand", sans-serif' }}>
                  What to Expect:
                </Typography>
                <Stack spacing={2} sx={{ mt: 1.5 }}>
                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <Box sx={{ width: 28, height: 28, borderRadius: '50%', bgcolor: '#FFFAEA', color: '#02476c', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 900, fontSize: '0.8rem', border: '1px solid #F6D469' }}>
                      1
                    </Box>
                    <Box>
                      <Typography variant="body2" fontWeight={800} color="#24102F">
                        Prompt Phone Confirmation
                      </Typography>
                      <Typography variant="caption" color="#757277">
                        Our coordinator will contact you to verify details and reserve your slot.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <Box sx={{ width: 28, height: 28, borderRadius: '50%', bgcolor: '#fff7ed', color: '#E76100', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 900, fontSize: '0.8rem', border: '1px solid #E76100' }}>
                      2
                    </Box>
                    <Box>
                      <Typography variant="body2" fontWeight={800} color="#24102F">
                        45-Min Play-Based Evaluation
                      </Typography>
                      <Typography variant="caption" color="#757277">
                        Gentle, stress-free clinical milestone observation in our sensory gym.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <Box sx={{ width: 28, height: 28, borderRadius: '50%', bgcolor: '#e8f7ec', color: '#59C36A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 900, fontSize: '0.8rem', border: '1px solid #59C36A' }}>
                      3
                    </Box>
                    <Box>
                      <Typography variant="body2" fontWeight={800} color="#24102F">
                        Tailored 8-Week IEP
                      </Typography>
                      <Typography variant="caption" color="#757277">
                        A clear developmental roadmap with measurable goals and parent activities.
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Card>

              {/* Direct Help Helpline */}
              <Card sx={{ p: 3, borderRadius: 4.5, border: '1px solid #EFECE7', bgcolor: '#02476c', color: '#ffffff' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <PhoneIcon sx={{ color: '#F6D469', fontSize: 22 }} />
                  <Typography variant="subtitle1" fontWeight={800} sx={{ color: '#F6D469', fontFamily: '"Quicksand", sans-serif' }}>
                    Need Immediate Help?
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#EFECE7', mb: 2, fontSize: '0.88rem' }}>
                  Have questions or need same-day scheduling? Call our reception desk directly.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  component="a"
                  href={`tel:${CLINIC_INFO.phone}`}
                  sx={{ bgcolor: '#F6D469', color: '#24102F', fontWeight: 900, borderRadius: 50, py: 1, '&:hover': { bgcolor: '#fcb720' } }}
                >
                  Call: {CLINIC_INFO.phone}
                </Button>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BookAppointmentPage;