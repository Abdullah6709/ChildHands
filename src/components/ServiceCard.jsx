import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Chip,
  Divider
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

// Icon Map
const iconComponents = {
  RecordVoiceOver: <RecordVoiceOverIcon sx={{ fontSize: 32 }} />,
  SentimentSatisfiedAlt: <SentimentSatisfiedAltIcon sx={{ fontSize: 32 }} />,
  PanTool: <PanToolIcon sx={{ fontSize: 32 }} />,
  Work: <WorkIcon sx={{ fontSize: 32 }} />,
  Extension: <ExtensionIcon sx={{ fontSize: 32 }} />,
  Groups: <GroupsIcon sx={{ fontSize: 32 }} />,
  Psychology: <PsychologyIcon sx={{ fontSize: 32 }} />,
  FamilyRestroom: <FamilyRestroomIcon sx={{ fontSize: 32 }} />,
  MenuBook: <MenuBookIcon sx={{ fontSize: 32 }} />
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
        border: `2px solid ${service.borderCol}`,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        bgcolor: '#ffffff',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: `0 16px 32px ${service.color}25`,
          borderColor: service.color
        }
      }}
    >
      {/* Top Banner Ribbon */}
      <Box
        sx={{
          bgcolor: service.bgLight,
          px: 2.5,
          py: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${service.borderCol}`
        }}
      >
        <Chip
          label="Therapy Program"
          size="small"
          sx={{
            bgcolor: '#ffffff',
            color: service.color,
            fontWeight: 800,
            fontSize: '0.72rem',
            border: `1px solid ${service.borderCol}`
          }}
        />
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            bgcolor: service.color
          }}
        />
      </Box>

      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Icon & Title Row */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
          <Box
            sx={{
              width: 58,
              height: 58,
              borderRadius: 3,
              bgcolor: service.color,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 6px 16px ${service.color}40`,
              flexShrink: 0
            }}
          >
            {iconComponents[service.iconName] || <ExtensionIcon sx={{ fontSize: 32 }} />}
          </Box>

          <Box>
            <Typography
              component={Link}
              to={`/services/${service.id}`}
              variant="h6"
              sx={{
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.25,
                fontSize: '1.2rem',
                mb: 0.5,
                textDecoration: 'none',
                display: 'block',
                '&:hover': { color: service.color }
              }}
            >
              {service.title}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                fontWeight: 700,
                color: service.color,
                fontSize: '0.82rem',
                lineHeight: 1.3
              }}
            >
              {service.tagline}
            </Typography>
          </Box>
        </Box>

        {/* Short Description */}
        <Typography
          variant="body2"
          sx={{
            color: '#475569',
            lineHeight: 1.6,
            mb: 2,
            fontSize: '0.9rem',
            flexGrow: 1
          }}
        >
          {service.shortDesc}
        </Typography>

        {/* Key indications tag */}
        <Box sx={{ mb: 2.5 }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              fontWeight: 700,
              color: '#64748b',
              mb: 0.8,
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}
          >
            Key Indications & Focus:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
            {service.indications.slice(0, 2).map((item, idx) => (
              <Chip
                key={idx}
                label={item.length > 34 ? `${item.slice(0, 34)}...` : item}
                size="small"
                sx={{
                  bgcolor: '#f1f5f9',
                  color: '#334155',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  borderRadius: 1.5
                }}
              />
            ))}
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Action Buttons with dedicated route links */}
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Button
            component={Link}
            to={`/services/${service.id}`}
            variant="outlined"
            size="small"
            endIcon={<ArrowForwardIcon />}
            sx={{
              flex: 1,
              borderColor: service.color,
              color: service.color,
              fontWeight: 700,
              fontSize: '0.82rem',
              py: 0.8,
              '&:hover': {
                borderColor: service.color,
                bgcolor: service.bgLight
              }
            }}
          >
            View Details
          </Button>

          <Button
            variant="contained"
            size="small"
            onClick={() => onBook(service.title)}
            startIcon={<CalendarMonthIcon />}
            sx={{
              flex: 1,
              bgcolor: service.color,
              fontWeight: 700,
              fontSize: '0.82rem',
              py: 0.8,
              boxShadow: `0 4px 12px ${service.color}40`,
              '&:hover': {
                bgcolor: service.color,
                filter: 'brightness(0.9)'
              }
            }}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
