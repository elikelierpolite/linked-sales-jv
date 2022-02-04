import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {'Copyright © '}
      <Link color="inherit" href="/">
        LInked
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} | {' '}
      <Link color="inherit" href="/privacy-policy">
      Privacy Policy | 
      </Link>{' '}
      <Link color="inherit" href="/terms">
      Terms & Conditions
      </Link>{' '}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '10vh',
        color: '#fff'
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#23134F'
        }}
      >
        <Container maxWidth="sm">
        <center>
          <Copyright /> 
          <p>ALL THE TRADEMARKS AND THE LOGOS ARE THE PROPERTY OF THEIR RESPECTIVE OWNERS. THIS SITE AND THE PRODUCTS AND SERVICES OFFERED ON THIS SITE ARE NOT ASSOCIATED (BUT AFFILIATED TO), OR HEREBY ENDORSED, OR SPONSORED BY ANY BUSINESS OR BUSINESSES LISTED ON THIS PAGE NOR HAVE THEY BEEN REVIEWED OR TESTED OR CERTIFIED BY ANY OTHER COMPANY LISTED ON THIS PAGE.</p>
        </center>
        </Container>
      </Box>
    </Box>
  );
}