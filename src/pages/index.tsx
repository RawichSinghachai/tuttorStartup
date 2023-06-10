import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ImageHome from '@/components/home/ImageHome';
import TopicCard from '@/components/home/TopicCard'
import SubjectCard from '@/components/home/SubjectCard';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';
import Checkdata from '@/components/Checkdata';
import Header from '@/components/menu/Header';
import Sidebar from '@/components/menu/Sidebar';
import Drawer from '@mui/material/Drawer';
import Footer from '@/components/menu/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import { blueGrey } from '@mui/material/colors';
import TutorCard from '@/components/home/TutorCard';

export default function Home() {

  const topicCard = useSelector((state: RootState) => state.TopicCardStore)
  const subjectCard = useSelector((state: RootState) => state.SubjectCardStore)

  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Checkdata />

      {/* Menu */}

      <Header toggleDrawer={toggleDrawer} />
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        <Sidebar anchor={'left'} toggleDrawer={toggleDrawer} />
      </Drawer>

      {/* layout */}

      <Grid container spacing={3} justifyContent='center' sx={{ pl: 2, pr: 2, pt: 10 }}>   

        <Grid item md={12} sm={12} xs={12}>
          <Typography variant='h3' sx={{fontWeight:'bold',pt:4,pl:2}}>Tutor</Typography>
        </Grid>


        <Grid item md={3} sm={6} xs={12}>
          <TutorCard name={'Jame Black'}  subject={'ฟิสิกส์,คณิตศาสตร์'} stars={1.5}/>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <TutorCard name={'Jame Black'} subject={'Programing'} stars={2}/>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <TutorCard name={'Jame Black'} subject={'ภาษาจีน'} stars={5}/>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <TutorCard name={'Jame Black'} subject={'บัญชีกลาง 1'} stars={4}/>
        </Grid>


        {/* {topicCard.map((data) => {
          return <Grid item md={3} sm={6} xs={6} key={data.id}>
            <TopicCard topic={data.topic} />
          </Grid>

        })} */}

        <Grid item md={12} xs={12}>
          <Typography variant="h4" sx={{ py: 4 }}>Course Online</Typography>
        </Grid>


        {subjectCard.map((data, index) => {
          return <Grid item key={index} md={4} sm={6} xs={12} >
            <SubjectCard topic={data.topic} duration={data.duration} price={data.price} />
          </Grid>
        })}
      </Grid>


      <Footer />
    </>
  )
}
