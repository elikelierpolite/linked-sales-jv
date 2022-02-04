import * as React from "react";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from '@mui/material/Typography';

export default function Editor() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {matches ? (
    <Stack className="Editor" spacing={10}>
        <div>
            <img src="https://i.ibb.co/pQP5SdT/contest.png" width={700} height={370} />
        </div>
        <div>
                <Typography align="center" sx={{color:'#fff'}} variant="h2">🏆$1000 Prize Contest!</Typography><br /><br />
                <Typography align="center" component="p" sx={{color:'#fff'}} variant="h4">Make the most revenue and WIN! FIRST PRIZE: $750 ; SECOND PRIZE: $200 ; THIRD PRIZE: $50.<br /> It's a 5 Day Launch, Winners will be displayed below.</Typography>
        </div>
    </Stack>
      ) : (
        <Stack className="Editor" spacing={10} direction="row">
            <div>
                <img src="https://i.ibb.co/pQP5SdT/contest.png" width={700} height={370} />
            </div>
            <div>
                    <Typography sx={{color:'#fff'}} variant="h2">🏆$1000 Prize Contest!</Typography><br /><br />
                    <Typography component="p" sx={{color:'#fff'}} variant="h4">Make the most revenue and WIN! FIRST PRIZE: $750 ; SECOND PRIZE: $200 ; THIRD PRIZE: $50.<br /> It's a 5 Day Launch, Winners will be displayed below.</Typography>
            </div>
        </Stack>
      )}
    </>
  );
}
