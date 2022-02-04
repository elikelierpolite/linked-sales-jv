import * as React from 'react';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import Stack from '@mui/material/Stack';

export default function Contact() {
  return (
    <a style={{color:'#fff', textDecoration:'none'}} href="https://www.facebook.com/moderntrends13" target="_blank">
      <Button size="large" variant="contained" startIcon={<FacebookIcon />}>
        Contact Me
      </Button>
      </a>
  );
}
