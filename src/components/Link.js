import * as React from 'react';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import Stack from '@mui/material/Stack';

export default function Link() {
  return (
    <Button size="large" sx={{color:'black'}} startIcon={<img src="https://muncheye.com/wp-content/themes/muncheye/images/affiliates/icon10.png" />} color="inherit" variant="contained">Get Link</Button>
  );
}
