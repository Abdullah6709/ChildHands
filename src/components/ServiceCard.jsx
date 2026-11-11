import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Chip,
  Stack
} from '@mui/material';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PanToolIcon from '@mui/icons-material/PanTool';
import WorkIcon from '@mui/icons-material/Work';
import ExtensionIcon from '@mui/icons-material/Extension';
import GroupsIcon from '@mui/icons-material/Groups';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Icon Map
const iconComponents = {
  RecordVoiceOver: <RecordVoiceOverIcon sx={{ fontSize: 24 }} />,
  SentimentSatisfiedAlt: <SentimentSatisfiedAltIcon sx={{ fontSize: 24 }} />,
  PanTool: <PanToolIcon sx={{ fontSize: 24 }} />,
  Work: <WorkIcon sx={{ fontSize: 24 }} />,
  Extension: <ExtensionIcon sx={{ fontSize: 24 }} />,
  Groups: <GroupsIcon sx={{ fontSize: 24 }} />,
  Psychology: <PsychologyIcon sx={{ fontSize: 24 }} />,
  FamilyRestroom: <FamilyRestroomIcon sx={{ fontSize: 24 }} />,
  MenuBook: <MenuBookIcon sx={{ fontSize: 24 }} />
};

const ServiceCard = ({ service, onBook }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px solid #EFECE7',
        bgcolor: '#ffffff',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 16px 36px rgba(2, 71, 108, 0.12)',
          borderColor: service.color,
          '& .service-card-image': {
            transform: 'scale(1.06)'
          }
        }
      }}
    >
      {/* Featured Service Image */}
      {service.image && (
        <Box
          sx={{
            position: 'relative',
            height: 190,
            overflow: 'hidden',
            bgcolor: '#f1f5f9'
          }}
        >
          <Box
            component="img"
            src={service.image}
            alt={service.title}
            className="service-card-image"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease'
            }}
          />
          {/* Subtle gradient overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(36, 16, 47, 0.55) 0%, transparent 60%)'
            }}
          />

          {/* Floating Category Tag */}
          <Chip
            label={service.tagline}
            size="small"
            sx={{
              position: 'absolute',
              bottom: 12,
              left: 14,
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              color: '#02476c',
              fontWeight: 800,
              fontSize: '0.72rem',
              borderRadius: 50,
              backdropFilter: 'blur(4px)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              border: '1px solid rgba(246, 212, 105, 0.6)'
            }}
          />

          {/* Floating Icon Badge */}
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 14,
              width: 44,
              height: 44,
              borderRadius: '50%',
              bgcolor: '#ffffff',
              color: service.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
              border: `2px solid ${service.color}`
            }}
          >
            {iconComponents[service.iconName] || <ExtensionIcon sx={{ fontSize: 24 }} />}
          </Box>
        </Box>
      )}

      {/* Top subtle color indicator line */}
      <Box sx={{ height: 3, width: '100%', bgcolor: service.color }} />

      <CardContent sx={{ p: { xs: 2.5, sm: 3 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Title */}
        <Typography
          component={Link}
          to={`/services/${service.id}`}
          variant="h6"
          sx={{
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: 800,
            color: '#24102F',
            fontSize: '1.25rem',
            lineHeight: 1.3,
            mb: 1,
            textDecoration: 'none',
            display: 'block',
            transition: 'color 0.2s ease',
            '&:hover': { color: service.color }
          }}
        >
          {service.title}
        </Typography>

        {/* Short Description */}
        <Typography
          variant="body2"
          sx={{
            color: '#757277',
            lineHeight: 1.62,
            mb: 2.5,
            fontSize: '0.88rem',
            flexGrow: 1
          }}
        >
          {service.shortDesc}
        </Typography>

        {/* Key indications - clean 2 points */}
        <Box sx={{ mb: 2.5 }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              fontWeight: 800,
              color: '#02476c',
              mb: 1,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: '0.72rem'
            }}
          >
            Target Focus & Indicators:
          </Typography>
          <Stack spacing={0.8}>
            {service.indications.slice(0, 2).map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 16, color: service.color, mt: 0.2, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ fontSize: '0.84rem', color: '#24102F', lineHeight: 1.4 }}>
                  {item.length > 50 ? `${item.slice(0, 50)}...` : item}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 1.5, pt: 1.5, borderTop: '1px solid #EFECE7' }}>
          <Button
            component={Link}
            to={`/services/${service.id}`}
            variant="outlined"
            size="small"
            sx={{
              flex: 1,
              borderColor: '#EFECE7',
              color: '#24102F',
              fontWeight: 800,
              fontSize: '0.82rem',
              py: 0.9,
              borderRadius: 100,
              '&:hover': {
                borderColor: service.color,
                color: service.color,
                bgcolor: service.bgLight
              }
            }}
          >
            Details
          </Button>

          <Button
            variant="contained"
            size="small"
            onClick={() => onBook(service.title)}
            startIcon={<CalendarMonthIcon sx={{ fontSize: 16 }} />}
            sx={{
              flex: 1.2,
              bgcolor: '#02476c',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.82rem',
              py: 0.9,
              borderRadius: 100,
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#01324d',
                boxShadow: `0 4px 12px rgba(2, 71, 108, 0.3)`
              }
            }}
          >
            Book Slot
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;