// src/components/BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

function BackButton() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <IconButton onClick={handleBackClick} aria-label="back">
      <ArrowBack />
    </IconButton>
  );
}

export default BackButton;
