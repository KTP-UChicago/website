// AlumniCard.tsx
import React from 'react';
import { CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
import * as S from './styled';

export interface AlumniCardProps {
    name: string;
    currentCompany: string;
    currentRole: string;
    linkedinUrl: string;
    email: string;
    gradYear: string;
    pledgeClass: string;
    major: string;
    location: string;

}

const AlumniCard: React.FC<AlumniCardProps> = ({ name, location, currentCompany, currentRole, linkedinUrl, email ,major, gradYear, pledgeClass }) => {
    return (
    <S.StyledCard>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {currentRole} @ {currentCompany} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
           Studied {major}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Class of {gradYear} | {pledgeClass}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <a href={`mailto:${email}`}>{email}</a>
          <IconButton onClick={() => window.open(linkedinUrl, '_blank', 'noopener,noreferrer')}>
            <LinkedIn/>
        </IconButton>
        </Typography>
       
      </CardContent>
    </S.StyledCard>
  );
};

export default AlumniCard;
