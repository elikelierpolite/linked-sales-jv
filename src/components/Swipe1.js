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

export default function Swipe1() {
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
        Swipe #1
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Swipe #1
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          <b>Sample Subject Lines:</b><br /><br />
            - FREE ClickFunnels 3-Day Summit Event! (details inside)<br />
            - This ONE question changes everything<br /><br />

            <b>Body:</b><br /><br />
            I’m SO excited to announce that ClickFunnels is hosting a 3-Day Virtual Summit Event next week!<br />

            They've gathered 30 incredible marketing experts from different fields to talk about a really cool topic that will hit home with a LOT of entrepreneurs...<br />

            A few months ago, Russell sent an email to over 100 ‘Two Comma Club’ marketing experts…<br />

            Inside the email was just ONE burning question...<br />

            That question became the loaded topic for his 3-Day Summit Event, which is designed to rapidly build your business in the next 30 days!<br />

            You can get ALL the summit details (dates, the awesome topic, speakers, etc...), and register for the the FREE event here...<br /><br />

            <b>[INSERT LINK]</b><br /><br />

            The answer to this ONE question has the power to catapult brand new entrepreneurs (or entrepreneurs who find themselves back at ‘zero’) straight into the Two Comma Club in a matter of months (and for some, they did it in just weeks)!<br />

            I can’t wait for you to attend this 3-Day Summit, and see what’s in store for you during this incredible FREE event! I'll be there for sure!<br />

            Get your free 3-Day Summit ticket here<br /><br />
            <b>[INSERT LINK]</b><br /><br />

            Thanks, <br /><br />
            <b>[YOUR NAME]</b>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
