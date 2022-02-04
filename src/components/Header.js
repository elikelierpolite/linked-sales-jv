import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from '@mui/material';

const Header = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className='Header' style={{paddingTop:'15px'}}>
            {matches ? 
            <Stack direction="column">
                <div>
                    <Typography className='heading' variant='h3' align="center">Truly Unlimited Software</Typography>
                    <Typography component="p" className='subtitle' variant='h4' align="center">alongside million dollar blueprints to success!</Typography>
                </div>
                <iframe src="https://fast.wistia.net/embed/iframe/1orna134rn" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><br /><br />
                <Typography className='subtitle' component="p" variant='h5' align="center" style={{backgroundColor: '#00000073'}}>📅 Launch Date: 17 Feb 2022 @9:00 AM EST</Typography><br />
                <Button size='large' sx={{color:'black'}} startIcon={<img src="https://muncheye.com/wp-content/themes/muncheye/images/affiliates/icon10.png" />} color="inherit" variant="contained">Get Link</Button>
            </Stack> : 
            <Stack spacing="auto" direction="row">
                <div>
                    <Typography className='heading' variant='h3' align="center">Truly Unlimited Software</Typography>
                    <Typography className='subtitle' component="p" variant='h4' align="center">alongside million dollar blueprints to success!</Typography><br />
                    <center>
                    <Stack spacing={2} display="flex" justifyContent="center" direction="row">
                        <Button sx={{color:'black', float:'right'}} color="inherit" variant="contained">Sales Page</Button>
                        <Button sx={{color:'black', float:'right'}} startIcon={<img src="https://muncheye.com/wp-content/themes/muncheye/images/affiliates/icon10.png" />} color="inherit" variant="contained">Get Link</Button>
                    </Stack><br />
                    <Typography className='subtitle' component="p" variant='h5' align="center" style={{backgroundColor: '#00000073'}}>📅 Launch Date: 17 Feb 2022 @9:00 AM EST</Typography><br />
                    </center>
                </div>
                <iframe src="https://fast.wistia.net/embed/iframe/1orna134rn" title="linked-vsl Video" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </Stack>}
        </div>
    )
}

export default Header