import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../assets/images/linked_nav_logo_light.svg';
import { Typography } from '@mui/material';

export default function Nav() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, backgroundColor: "#23134F" }}>
        <AppBar className="nav" sx={{ flexGrow: 1, backgroundColor: "#23134F" }} position="static">
          <Toolbar>
            <img src={logo} />
              <div style={{display:'flex', justifyContent:'flex-end', width:'100%', padding:0}}>
                <Button sx={{color:'black', float:'right'}} startIcon={<img src="https://muncheye.com/wp-content/themes/muncheye/images/affiliates/icon10.png" />} color="inherit" variant="contained">Get Link</Button>
              </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Typography component="h3" variant="p" align="center" className='alert'><span className='warning'>⚠️Attention:</span> Unlimited ♾️ <span className='warning'>is</span> the product!</Typography>
    </div>
  );
}
