import  React,{useState,useEffect} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PaymentIcon from '@mui/icons-material/Payment';
import FolderIcon from '@mui/icons-material/Folder';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import MapIcon from '@mui/icons-material/Map';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'






const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


type Props = {
  anchor:string,
  toggleDrawer:any
}


export default function Sidebar({anchor,toggleDrawer}:Props) {

  const router = useRouter()

  return (
      <Box sx={{ width: 220 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      >
        <DrawerHeader>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

            <ListItem onClick={()=>{router.push('/')}}>
              <ListItemButton>
                <ListItemIcon>
                   <HomeIcon /> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6" >
                      Home
                  </Typography>
              </ListItemButton>
            </ListItem>


            <ListItem onClick={()=>{router.push('/course')}}>
              <ListItemButton>
                <ListItemIcon>
                   <SchoolIcon /> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6">
                    Classroom
                  </Typography>
              </ListItemButton>
            </ListItem>

            <ListItem onClick={()=>{router.push('/map')}}>
              <ListItemButton>
                <ListItemIcon>
                   <MapIcon /> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6">
                    Map
                  </Typography>
              </ListItemButton>
            </ListItem>


            <ListItem onClick={()=>{router.push('/game')}}>
              <ListItemButton>
                <ListItemIcon>
                   <VideogameAssetIcon /> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6">
                    QuickGame
                  </Typography>
              </ListItemButton>
            </ListItem>


            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                   <FolderIcon /> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6">
                    About Us
                  </Typography>
              </ListItemButton>
            </ListItem>

{/* for admin           */}
            <ListItem onClick={()=>{router.push('/list')}}>
              <ListItemButton>
                <ListItemIcon>
                   <FolderIcon /> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6">
                    List User
                  </Typography>
              </ListItemButton>
            </ListItem>
          
        </List>
        <Divider />
      </Box>

  );
}