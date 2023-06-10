import React, { useState } from 'react';
import Header from '@/components/menu/Header';
import Sidebar from '@/components/menu/Sidebar';
import Drawer from '@mui/material/Drawer';
import { useRouter } from 'next/router'
import Checkdata from '@/components/Checkdata'
import Grid from '@mui/material/Grid';
import Title from '@/components/classroom/Title';
import Topic from '@/components/classroom/Topic';
import ViewVideo from '@/components/classroom/ViewVideo';

type Props = {}

const Classroom = (props: Props) => {

  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


    const router = useRouter()
    const mycourse = router.query.mycourse

    
  return (
    <>
      <Checkdata/>
      <Header toggleDrawer={toggleDrawer} />
    <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        <Sidebar anchor={'left'} toggleDrawer={toggleDrawer} />
    </Drawer> 
      <Grid container spacing={3} justifyContent='center'>

        <Grid item md={12} sm={12} xs={12} >
          <Title mycourse={mycourse} />
        </Grid>

        <Grid item md={3} sm={4} xs={12}>
          <Topic />
        </Grid>

        <Grid item md={12} sm={12} xs={12}>
          <ViewVideo />
        </Grid>

      </Grid>
    </>
  )
}

export default Classroom