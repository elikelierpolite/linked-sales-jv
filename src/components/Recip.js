import * as React from "react";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from '@mui/material/Typography';

export default function Recip() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {matches ? (
    <Stack className="Editor" spacing={10}>
        <div>
            <img src="https://i.ibb.co/c3wTp5Q/reciprocation.png" width={700} height={370} />
        </div>
        <div>
                <Typography align="center" sx={{color:'#fff'}} variant="h2">🔄Reciprocation Guaranteed!</Typography><br /><br />
                <Typography align="center" component="p" sx={{color:'#fff'}} variant="h4">Scratch my back and I'll Scratch yours back... With a chainsaw!</Typography>
        </div>
    </Stack>
      ) : (
        <Stack className="Editor" spacing={10} direction="row">
            <div>
                <img src="https://i.ibb.co/c3wTp5Q/reciprocation.png" width={700} height={370} />
            </div>
            <div>
                    <Typography sx={{color:'#fff'}} variant="h2">🔄Reciprocation Guaranteed!</Typography><br /><br />
                    <Typography component="p" sx={{color:'#fff'}} variant="h4">Scratch my back and I'll Scratch yours back... With a chainsaw!</Typography>
            </div>
        </Stack>
      )}
    </>
  );
}
