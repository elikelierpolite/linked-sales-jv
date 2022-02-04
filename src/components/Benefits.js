import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CheckIcon from '@mui/icons-material/Check';

export default function Benefits() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {matches ? (
        <Stack className="dgroup">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
            <Button sx={{color:'#fff'}}  startIcon={<CheckIcon sx={{color: '#66bb6a', width:'100%'}} />} >Simple drag and drop webpage editor!</Button>
            <Button sx={{color:'#fff'}}  startIcon={<CheckIcon sx={{color: '#66bb6a', width:'100%'}} />} >Page analytics!</Button>
            <Button sx={{color:'#fff'}}  startIcon={<CheckIcon sx={{color: '#66bb6a', width:'100%'}} />} >Domain name!</Button>
            <Button sx={{color:'#fff'}}  startIcon={<CheckIcon sx={{color: '#66bb6a', width:'100%'}} />} >Unlimited hosting!</Button>
            <Button sx={{color:'#fff'}}  startIcon={<CheckIcon sx={{color: '#66bb6a', width:'100%'}} />} >Done for you templates!</Button>
        </Box>
        </Stack>
      ) : (
        <Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup className="dgroup" variant="outlined" aria-label="outlined button group">
            <Button sx={{color:'#fff'}} startIcon={<CheckIcon sx={{color: '#66bb6a'}} />} >Simple drag and drop webpage editor!</Button>
            <Button sx={{color:'#fff'}} startIcon={<CheckIcon sx={{color: '#66bb6a'}} />} >Page analytics!</Button>
            <Button sx={{color:'#fff'}} startIcon={<CheckIcon sx={{color: '#66bb6a'}} />} >Domain name!</Button>
            <Button sx={{color:'#fff'}} startIcon={<CheckIcon sx={{color: '#66bb6a'}} />} >Unlimited hosting!</Button>
            <Button sx={{color:'#fff'}} startIcon={<CheckIcon sx={{color: '#66bb6a'}} />} >Done for you templates!</Button>
          </ButtonGroup>
        </Box>
        </Stack>
      )}
    </>
  );
}
