import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ImageListItem from '@mui/material/ImageListItem';
import Checkdata from '@/components/Checkdata';
import Image from 'next/image';
export default function FormRegister() {


  return (
    <div>
      <Checkdata />
      <Card sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        <Card sx={{ width: { md: 1000, sm: 700, }, mx: 'auto', p: 2, }} elevation={12}>
          <Stack direction="row" justifyContent="flex-start" alignItems="center" >
            <Paper elevation={0} sx={{ width: { md: 500, sm: 350, }, maxHeight: 500 }}>
              <Stack direction="column" justifyContent="center" alignItems="center" >
                <Typography variant="h4" gutterBottom>Register</Typography>
              </Stack>

              <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} />

              <TextField label="Password" variant="outlined" fullWidth sx={{ mb: 2 }} />

              <TextField label="Age" variant="outlined" fullWidth sx={{ mb: 2 }} />

              <TextField label="School" variant="outlined" fullWidth sx={{ mb: 2 }} />

              <TextField label="E-mail" variant="outlined" fullWidth sx={{ mb: 2 }} />

              <Button variant="contained" fullWidth >Submit</Button>
            </Paper>


            <ImageListItem sx={{ width: { md: 500, sm: 350, xs: 0 }, maxHeight: 500, pl: { md: 2, sm: 2, xs: 0 } }}>
              <img src='https://i.pinimg.com/564x/dd/ae/1c/ddae1c1588c7e7c490b13c05851812f5.jpg' />
            </ImageListItem>
          </Stack>
        </Card>
      </Card>
    </div>
  )
}
