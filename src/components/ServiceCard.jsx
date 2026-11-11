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
  RecordVoiceOver: <RecordVoiceOverIcon sx={{ fontSize: 28 }} />,
  SentimentSatisfiedAlt: <SentimentSatisfiedAltIcon sx={{ fontSize: 28 }} />,
  PanTool: <PanToolIcon sx={{ fontSize: 28 }} />,
  Work: <WorkIcon sx={{ fontSize: 28 }} />,
  Extension: <ExtensionIcon sx={{ fontSize: 28 }} />,
  Groups: <GroupsIcon sx={{ fontSize: 28 }} />,
  Psychology: <PsychologyIcon sx={{ fontSize: 28 }} />,
  FamilyRestroom: <FamilyRestroomIcon sx={{ fontSize: 28 }} />,
  MenuBook: <MenuBookIcon sx={{ fontSize: 28 }} />
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
        border: '1px solid #e2e8f0',
        bgcolor: '#ffffff',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 16px 32px rgba(15, 23, 42, 0.08)',
          borderColor: service.color,
          '& .service-icon-box': {
            transform: 'scale(1.05)',
          }
        }
      }}
    >
      {/* Top subtle color indicator line */}
      <Box sx={{ height: 4, width: '100%', bgcolor: service.color }} />

      <CardContent sx={{ p: { xs: 2.5, sm: 3 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header: Icon & Category Tag */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box
            className="service-icon-box"
            sx={{
              width: 52,
              height: 52,
              borderRadius: 3,
              bgcolor: service.bgLight,
              color: service.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s ease',
              flexShrink: 0
            }}
          >
            {iconComponents[service.iconName] || <ExtensionIcon sx={{ fontSize: 28 }} />}
          </Box>

          <Chip
            label={service.tagline}
            size="small"
            sx={{
              bgcolor: service.bgLight,
              color: service.color,
              fontWeight: 700,
              fontSize: '0.74rem',
              borderRadius: 6,
              border: `1px solid ${service.borderCol}`
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          component={Link}
          to={`/services/${service.id}`}
          variant="h6"
          sx={{
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: 700,
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
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              fontWeight: 700,
              color: '#AA96B4',
              mb: 1,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: '0.7rem'
            }}
          >
            Target Areas & Symptoms
          </Typography>
          <Stack spacing={0.8}>
            {service.indications.slice(0, 2).map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 16, color: service.color, mt: 0.2, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ fontSize: '0.84rem', color: '#24102F', lineHeight: 1.4 }}>
                  {item.length > 48 ? `${item.slice(0, 48)}...` : item}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 1.5, pt: 1, borderTop: '1px solid #EFECE7' }}>
          <Button
            component={Link}
            to={`/services/${service.id}`}
            variant="outlined"
            size="small"
            sx={{
              flex: 1,
              borderColor: '#EFECE7',
              color: '#24102F',
              fontWeight: 700,
              fontSize: '0.82rem',
              py: 0.8,
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
              fontWeight: 700,
              fontSize: '0.82rem',
              py: 0.8,
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
