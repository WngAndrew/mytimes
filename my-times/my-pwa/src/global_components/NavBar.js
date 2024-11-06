// /src/components/NavBar.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { Person, ArrowBack } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're not on the root page
  const isNotRoot = location.pathname !== '/';

  return (
    <AppBar
      position="static"
      color="default"
      style={{
        padding: '10px',
        boxShadow: 'none',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0', // Gray line for the bottom border
      }}
    >
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Conditionally render back button if not on the root page */}
        {isNotRoot ? (
          <IconButton edge="start" onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
        ) : (
          <Box style={{ flex: 1 }} /> // Empty Box to push content to the center if no back button
        )}

        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1px',
          }}
        >
          <img
            src="/images/ny_times_logo.png"
            alt="NY Times Logo"
            style={{ height: '40px' }}
          />
          <p>|</p>
          <Typography
            variant="h6"
            style={{
              fontFamily: 'Libre Franklin, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              marginLeft: '3px',
            }}
          >
            Games
          </Typography>
        </Box>

        <IconButton edge="end" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Person />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
