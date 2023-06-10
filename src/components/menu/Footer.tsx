import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { deepOrange } from '@mui/material/colors';

export default function Footer() {
  return (
    <div>
        <Box sx={{ width: '100%', height: 200, backgroundColor: 'primary.dark', mt:4}}>
          <Stack  direction="column"  justifyContent="center"  alignItems="center" spacing={2} sx={{pt:2}}>

            
              <Typography variant="h4" gutterBottom>h5. Heading</Typography>
              <Typography variant="subtitle1" gutterBottom>. Quo blanditiis tenetur</Typography>
                <Stack  direction="row"  justifyContent="center"  alignItems="center"  spacing={2}>
                  <Avatar sx={{ bgcolor: deepOrange[500]}} ><FacebookIcon/></Avatar>
                  <Avatar sx={{ bgcolor: deepOrange[500]}} ><YouTubeIcon/></Avatar>
                  <Avatar sx={{ bgcolor: deepOrange[500]}} ><InstagramIcon/></Avatar>
                  <Avatar sx={{ bgcolor: deepOrange[500]}} ><TwitterIcon/></Avatar>
                </Stack>
            

          </Stack>
        </Box>
    </div>
  )
}
