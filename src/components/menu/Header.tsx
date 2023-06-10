import React from 'react'
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Profile from './Profile';
import { useRouter } from 'next/router'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey , teal , indigo} from '@mui/material/colors';

const AppBar = styled(MuiAppBar)
  (({ theme }: any) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }));


export default function Header({ toggleDrawer }: any) {

  const router = useRouter()


  return (
    <AppBar position="fixed" sx={{bgcolor:indigo[500]}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction="row" alignItems="center">
          <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer('left', true)} edge="start">
            <MenuIcon />
          </IconButton>


          <Typography sx={{ ":hover": { cursor: 'pointer' },ml:2 }} variant="h6" onClick={() => router.push('/')}>
            TutorWebApp
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{ mr: 2 }}>
            <IconButton >
              <ShoppingCartIcon sx={{ fontSize: 30 ,color: grey['A100']}}/>
            </IconButton>
            <Profile />
        </Stack>
        


      </Toolbar>
    </AppBar>
  );
}