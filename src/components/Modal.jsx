import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from './Rating';
import './Modal.css'; // Custom CSS for overlay

export default function Modal({ open, onClose, image, title, details }) {
  if (!open) return null;

  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="cardContainer"
      >
        <Card sx={{ maxWidth: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={image}
              alt={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="modalTitle">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Kcal: {details?.kcal || 'N/A'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Allergies: {details?.allergies || 'None'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {details?.description || 'No description available'}
              </Typography>
              <Rating name="size-small" size="small" />
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
