import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  Grid,
  Button,
  TextField,
  MenuItem,
  Chip,
  Paper,
  Divider,
  Alert,
  IconButton,
  Tooltip
} from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigationIcon from '@mui/icons-material/Navigation';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CLINIC_INFO } from '../data/clinicData';

// Custom Pin Icon for Caring Hands Center
const clinicIcon = new L.DivIcon({
  className: 'custom-clinic-marker',
  html: `
    <div style="
      background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
      width: 44px;
      height: 44px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid #ffffff;
      box-shadow: 0 4px 15px rgba(2, 132, 199, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="
        transform: rotate(45deg);
        color: white;
        font-weight: 800;
        font-size: 18px;
        line-height: 1;
      ">❤️</div>
    </div>
  `,
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  popupAnchor: [0, -40]
});

// Custom Pin for Origin
const originIcon = new L.DivIcon({
  className: 'custom-origin-marker',
  html: `
    <div style="
      background: #10b981;
      width: 36px;
      height: 36px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid #ffffff;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="transform: rotate(45deg); color: white; font-size: 14px; font-weight: bold;">YOU</div>
    </div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -32]
});

// Helper component to auto-recenter map view
const ChangeMapView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

// Preset origin locations around Greater Noida West
const NEARBY_PRESETS = [
  { name: 'Gaur City 1 & 2', lat: 28.6085, lng: 77.4285, distance: '3.1 km', timeCar: '8 mins', timeBike: '6 mins' },
  { name: 'Crossings Republik', lat: 28.6335, lng: 77.4425, distance: '4.8 km', timeCar: '12 mins', timeBike: '9 mins' },
  { name: 'Noida Sector 52 / 62 Metro', lat: 28.5912, lng: 77.3789, distance: '8.4 km', timeCar: '18 mins', timeBike: '14 mins' },
  { name: 'Indirapuram (Ghaziabad)', lat: 28.6415, lng: 77.3725, distance: '9.6 km', timeCar: '22 mins', timeBike: '17 mins' },
  { name: 'Pari Chowk (Greater Noida)', lat: 28.4682, lng: 77.5121, distance: '16.5 km', timeCar: '28 mins', timeBike: '22 mins' },
  { name: 'Anand Vihar ISBT (Delhi)', lat: 28.6469, lng: 77.3160, distance: '18.2 km', timeCar: '35 mins', timeBike: '30 mins' },
];

const MapRouting = () => {
  const destination = CLINIC_INFO.primaryAddress;
  const destCoords = [destination.lat, destination.lng];

  const [selectedPreset, setSelectedPreset] = useState('Gaur City 1 & 2');
  const [originCoords, setOriginCoords] = useState([28.6085, 77.4285]);
  const [routeInfo, setRouteInfo] = useState({
    distance: '3.1 km',
    timeCar: '8 mins',
    timeBike: '6 mins',
    originName: 'Gaur City 1 & 2'
  });
  const [geoLoading, setGeoLoading] = useState(false);
  const [geoError, setGeoError] = useState('');

  // Handle Preset selection
  const handlePresetChange = (e) => {
    const name = e.target.value;
    setSelectedPreset(name);
    const found = NEARBY_PRESETS.find((p) => p.name === name);
    if (found) {
      setOriginCoords([found.lat, found.lng]);
      setRouteInfo({
        distance: found.distance,
        timeCar: found.timeCar,
        timeBike: found.timeBike,
        originName: found.name
      });
      setGeoError('');
    }
  };

  // Use browser GPS location
  const handleUseGPS = () => {
    if (!navigator.geolocation) {
      setGeoError('Geolocation is not supported by your browser.');
      return;
    }
    setGeoLoading(true);
    setGeoError('');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;
        setOriginCoords([userLat, userLng]);

        // Calculate rough Euclidean distance
        const R = 6371; // km
        const dLat = ((destination.lat - userLat) * Math.PI) / 180;
        const dLon = ((destination.lng - userLng) * Math.PI) / 180;
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos((userLat * Math.PI) / 180) *
            Math.cos((destination.lat * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distKm = (R * c).toFixed(1);
        const estMinCar = Math.max(5, Math.round(distKm * 2.5));
        const estMinBike = Math.max(4, Math.round(distKm * 1.8));

        setSelectedPreset('gps');
        setRouteInfo({
          distance: `${distKm} km`,
          timeCar: `${estMinCar} mins`,
          timeBike: `${estMinBike} mins`,
          originName: 'Your Current GPS Location'
        });
        setGeoLoading(false);
      },
      (err) => {
        setGeoLoading(false);
        setGeoError('Unable to retrieve location. Please choose a nearby hub preset.');
      },
      { timeout: 10000 }
    );
  };

  // Google Maps Direct Navigation Link
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${originCoords[0]},${originCoords[1]}&destination=${destination.lat},${destination.lng}&travelmode=driving`;

  // Midpoint for centering map
  const mapCenter = [
    (originCoords[0] + destCoords[0]) / 2,
    (originCoords[1] + destCoords[1]) / 2
  ];

  return (
    <Box sx={{ width: '100%', my: 3 }}>
      {/* Route Planner Header */}
      <Card
        sx={{
          p: { xs: 2.5, md: 3.5 },
          mb: 3,
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          border: '1px solid #bae6fd',
          borderRadius: 4
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
              <NavigationIcon sx={{ color: '#0284c7', fontSize: 28 }} />
              <Typography variant="h5" fontWeight={800} color="#0f172a">
                Live Map Route Planner to Caring Hands
              </Typography>
            </Box>
            <Typography variant="body2" color="#475569" sx={{ mb: 2 }}>
              Plan your travel route to <strong>G-104, Fusion Homes, Greater Noida West</strong>. Select your origin or use live GPS to see driving distance, travel duration, and open turn-by-turn navigation in Google Maps.
            </Typography>

            {/* Presets and GPS Button */}
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', alignItems: 'center' }}>
              <TextField
                select
                size="small"
                label="Choose Starting Point / Area"
                value={selectedPreset}
                onChange={handlePresetChange}
                sx={{
                  minWidth: { xs: '100%', sm: 260 },
                  bgcolor: '#ffffff',
                  borderRadius: 2
                }}
              >
                {selectedPreset === 'gps' && (
                  <MenuItem value="gps">📍 Your Current GPS Location</MenuItem>
                )}
                {NEARBY_PRESETS.map((preset) => (
                  <MenuItem key={preset.name} value={preset.name}>
                    {preset.name} (~{preset.distance})
                  </MenuItem>
                ))}
              </TextField>

              <Button
                variant="outlined"
                onClick={handleUseGPS}
                disabled={geoLoading}
                startIcon={<MyLocationIcon />}
                sx={{
                  bgcolor: '#ffffff',
                  borderColor: '#0284c7',
                  color: '#0284c7',
                  fontWeight: 600,
                  '&:hover': { bgcolor: '#f0f9ff' }
                }}
              >
                {geoLoading ? 'Detecting GPS...' : 'Use My GPS'}
              </Button>
            </Box>

            {geoError && (
              <Alert severity="warning" sx={{ mt: 1.5, py: 0.5 }}>
                {geoError}
              </Alert>
            )}
          </Grid>

          {/* Quick Metrics Badge */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                bgcolor: '#ffffff',
                borderRadius: 3,
                border: '1px solid #cbd5e1',
                boxShadow: '0 8px 24px rgba(2, 132, 199, 0.08)'
              }}
            >
              <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
                ROUTE FROM: {routeInfo.originName}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, my: 1 }}>
                <Typography variant="h4" fontWeight={900} color="#0284c7">
                  {routeInfo.distance}
                </Typography>
                <Typography variant="body2" color="#64748b" fontWeight={600}>
                  driving distance
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                <Chip
                  icon={<DirectionsCarIcon />}
                  label={`Car: ~${routeInfo.timeCar}`}
                  size="small"
                  sx={{ bgcolor: '#e0f2fe', color: '#0369a1', fontWeight: 700 }}
                />
                <Chip
                  icon={<TwoWheelerIcon />}
                  label={`Bike: ~${routeInfo.timeBike}`}
                  size="small"
                  sx={{ bgcolor: '#dcfce7', color: '#15803d', fontWeight: 700 }}
                />
                <Chip
                  icon={<DirectionsTransitIcon />}
                  label="Cab / Auto accessible"
                  size="small"
                  sx={{ bgcolor: '#fef3c7', color: '#b45309', fontWeight: 700 }}
                />
              </Box>

              <Button
                variant="contained"
                fullWidth
                component="a"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<OpenInNewIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  fontWeight: 700,
                  py: 1.1
                }}
              >
                Open Turn-by-Turn in Google Maps
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Card>

      {/* Interactive Leaflet Map Container */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Box
            sx={{
              height: { xs: 380, sm: 460, md: 520 },
              width: '100%',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '2px solid #e2e8f0',
              position: 'relative'
            }}
          >
            <MapContainer
              center={mapCenter}
              zoom={13}
              scrollWheelZoom={false}
              style={{ width: '100%', height: '100%' }}
            >
              <ChangeMapView center={mapCenter} zoom={13} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Destination Marker: Caring Hands */}
              <Marker position={destCoords} icon={clinicIcon}>
                <Popup>
                  <Box sx={{ p: 0.5, maxWidth: 220 }}>
                    <Typography variant="subtitle2" fontWeight={800} color="#0284c7">
                      CARING HANDS
                    </Typography>
                    <Typography variant="caption" sx={{ display: 'block', color: '#f43f5e', fontWeight: 700 }}>
                      Child Development Center
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.8rem', my: 0.5, color: '#334155' }}>
                      {destination.full}
                    </Typography>
                    <Typography variant="caption" sx={{ display: 'block', color: '#16a34a', fontWeight: 700, mb: 1 }}>
                      📞 Mob: {destination.phone || CLINIC_INFO.phone}
                    </Typography>
                    <Button
                      size="small"
                      variant="contained"
                      fullWidth
                      component="a"
                      href={`tel:${CLINIC_INFO.phone}`}
                      sx={{ fontSize: '0.75rem', py: 0.3 }}
                    >
                      Call Center
                    </Button>
                  </Box>
                </Popup>
              </Marker>

              {/* Origin Marker */}
              <Marker position={originCoords} icon={originIcon}>
                <Popup>
                  <Box sx={{ p: 0.5 }}>
                    <Typography variant="subtitle2" fontWeight={700} color="#10b981">
                      Starting Location
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                      {routeInfo.originName}
                    </Typography>
                  </Box>
                </Popup>
              </Marker>

              {/* Polyline Route */}
              <Polyline
                positions={[originCoords, destCoords]}
                color="#0284c7"
                weight={5}
                dashArray="8, 8"
                opacity={0.85}
              />
            </MapContainer>
          </Box>
        </Grid>

        {/* Location Info & Travel Guidelines */}
        <Grid item xs={12} lg={4}>
          <Card sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <LocationOnIcon sx={{ color: '#f43f5e', fontSize: 26 }} />
                <Typography variant="h6" fontWeight={800} color="#0f172a">
                  Center Address Details
                </Typography>
              </Box>

              <Typography variant="subtitle1" fontWeight={700} color="#0284c7">
                Caring Hands Child Development Center
              </Typography>
              <Typography variant="body2" color="#334155" sx={{ mt: 0.5, lineHeight: 1.6 }}>
                <strong>G-104, Fusion Homes</strong>,<br />
                Amrapali Dream Valley,<br />
                Greater Noida West (Noida Extension) – 201318
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle2" fontWeight={700} color="#0f172a" sx={{ mb: 1 }}>
                🚗 Landmark & Access Points:
              </Typography>
              <Box component="ul" sx={{ pl: 2.5, m: 0, fontSize: '0.85rem', color: '#475569', lineHeight: 1.7 }}>
                <li>Near <strong>Char Murti Chowk</strong> & Gaur City 2</li>
                <li>Opposite Fusion Homes Main Gate 1</li>
                <li>Closest Metro: <strong>Noida Sector 52 & Sector 76</strong> (Quick E-rickshaw / Auto available)</li>
                <li>Ample visitor parking available within the complex</li>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <AccessTimeIcon sx={{ color: '#0284c7', fontSize: 20 }} />
                <Typography variant="subtitle2" fontWeight={700}>
                  Therapy Timings:
                </Typography>
              </Box>
              <Typography variant="body2" color="#475569">
                {destination.hours}
              </Typography>
            </Box>

            <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #f1f5f9' }}>
              <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 1, fontWeight: 600 }}>
                Direct Assistance On Your Way:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  component="a"
                  href={`tel:${CLINIC_INFO.phone}`}
                  startIcon={<PhoneIcon />}
                  sx={{ borderColor: '#0284c7', color: '#0284c7', fontWeight: 700 }}
                >
                  Call Reception
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  component="a"
                  href={`https://wa.me/91${CLINIC_INFO.phone}?text=Hello,%20I%20am%20heading%20to%20Caring%20Hands%20Greater%20Noida%20West.%20Please%20guide%20me.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<WhatsAppIcon />}
                  sx={{ bgcolor: '#22c55e', '&:hover': { bgcolor: '#16a34a' }, fontWeight: 700 }}
                >
                  WhatsApp
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MapRouting;
