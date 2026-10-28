import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  Alert,
  IconButton,
  Chip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';

const AppointmentModal = ({ open, onClose, defaultService = '' }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    childAge: '',
    service: defaultService || SERVICES_DATA[0].title,
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    concerns: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Update default service when opened with a selection
  React.useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

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
    setBookingId(newId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleReset}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          p: 1,
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
        <Box>
          <Typography variant="h6" fontWeight={800} color="#0284c7">
            Book Child Developmental Assessment
          </Typography>
          <Typography variant="caption" color="#64748b" fontWeight={600}>
            Caring Hands Child Development Center • Greater Noida West
          </Typography>
        </Box>
        <IconButton onClick={handleReset} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ py: 2.5 }}>
        {submitted ? (
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <CheckCircleOutlineIcon sx={{ fontSize: 64, color: '#16a34a', mb: 1.5 }} />
            <Typography variant="h5" fontWeight={800} color="#0f172a" gutterBottom>
              Assessment Request Received!
            </Typography>
            <Chip
              label={`Booking Reference: ${bookingId}`}
              color="primary"
              sx={{ fontWeight: 800, px: 1, my: 1 }}
            />
            <Typography variant="body1" color="#334155" sx={{ mt: 1, mb: 2 }}>
              Dear <strong>{formData.parentName}</strong>, thank you for reaching out for{' '}
              <strong>{formData.childName}</strong>. Our clinical coordinator will call you shortly on{' '}
              <strong>{formData.phone}</strong> to confirm the exact consultation time slot.
            </Typography>

            <Alert severity="info" sx={{ textAlign: 'left', borderRadius: 3, mb: 3 }}>
              <strong>Location:</strong> G-104, Fusion Homes, Amrapali Dream Valley, Greater Noida West 201318.<br />
              <strong>Urgent Query?</strong> Call directly at <strong>{CLINIC_INFO.phone}</strong>.
            </Alert>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
                component="a"
                href={`https://wa.me/91${CLINIC_INFO.phone}?text=Hello%20Caring%20Hands,%20I%20have%20booked%20an%20assessment%20for%20my%20child%20${formData.childName}%20(Booking%20ID:%20${bookingId}).%20Please%20confirm.`}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsAppIcon />}
                sx={{ bgcolor: '#22c55e', '&:hover': { bgcolor: '#16a34a' }, fontWeight: 700 }}
              >
                Send WhatsApp Confirmation
              </Button>
              <Button variant="outlined" onClick={handleReset} sx={{ fontWeight: 700 }}>
                Close
              </Button>
            </Box>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="body2" color="#64748b" sx={{ mb: 2.5 }}>
              Please provide basic details below. Our senior pediatric therapy team will review your requirements and schedule a personalized one-on-one session.
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  size="small"
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
                  size="small"
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
                  size="small"
                  label="Child's Name"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Child's Age (e.g. 3.5 years)"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  label="Required Therapy Program"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  {SERVICES_DATA.map((srv) => (
                    <MenuItem key={srv.id} value={srv.title}>
                      {srv.title} ({srv.tagline})
                    </MenuItem>
                  ))}
                  <MenuItem value="Comprehensive Multi-Disciplinary Evaluation">
                    🌟 Comprehensive Multi-Disciplinary Evaluation (All-in-one)
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="date"
                  size="small"
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
                  size="small"
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
                  rows={2.5}
                  size="small"
                  label="Key Developmental Concerns (Speech delay, sensory, focus, tantrums, etc.)"
                  name="concerns"
                  value={formData.concerns}
                  onChange={handleChange}
                  placeholder="Share any doctor recommendations, speech milestones, or specific challenges..."
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button variant="text" onClick={handleReset} sx={{ color: '#64748b' }}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                startIcon={<CalendarMonthIcon />}
                sx={{ px: 3, fontWeight: 700 }}
              >
                Confirm Appointment Request
              </Button>
            </Box>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
