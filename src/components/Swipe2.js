import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Swipe2() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="large" variant="contained" onClick={handleClickOpen}>
        Swipe #2
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Swipe #2
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom>
          <b>Sample Subject Lines:</b><br /><br />
          - A FREE 3-Day Summit starts this week! (Registration Link Inside!)<br />
          - Would you know what to do in this situation?<br /><br />

            <b>Body:</b><br /><br />
            A few months ago, legendary marketer and friend Russell Brunson sent a brief email to over 100 of his ‘Two Comma Club’ award winners…<br /><br />

            Inside that email was a single question...<br />
            Here’s what it read:<br /><br />

            “You suddenly lose EVERYTHING in your business (your money, your big name, your list, your affiliates and JV partners, all of it)...You have bills piled high, and people harassing you for money over the phone.<br /><br />

            All you have is a roof over your head, a phone line, an internet connection, and a ClickFunnels account for only ONE MONTH.<br /><br />

            Other than your vast marketing experience, you’re back to being a newbie...What EXACTLY would you do, from Day 1 to Day 30, to save yourself?”<br /><br />


            He started reading through the crazy detailed plans, mapping out what they’d do day-by-day…<br /><br /> 

            They sent him incredible, creative blueprints for how to get their business back up and rolling again, and generating income and leads in just ONE MONTH.<br /><br />  

            Every Two Comma Club expert had a different answer, and used a different strategy…(which is really, really cool!)<br /><br />

            Each of his 30 speakers are going to answer that question for you IN DETAIL during the summit.<br /><br /> 

            They will lay out their step-by-step detailed ACTION PLAN (Day 1 through Day 30) for how they’d get their business up and rolling…<br /><br />

            ...and each plan is DESIGNED to start out from ZERO.<br /><br />
            
            Meaning, even if you have:<br /><br /><br />

            NO LIST…<br />
            NO AUTHORITY…<br />
            NO INCOME…<br />
            NO AFFILIATES or PARTNERS…<br /><br />

            Even if you’re starting out truly from “Square One”...this summit is pre-engineered for YOU to succeed starting from SCRATCH!<br />  

            THIS IS THE SUMMIT YOU NEED TO ATTEND!<br />  

            Click here to reserve your spot for the free 30 Days Summit Event!<br /><br />
            [INSERT LINK]<br /><br />

            I'll see you there!

            Thanks,
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
