import React,{useState} from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/menu/Header';
import Sidebar from '@/components/menu/Sidebar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

type Props = {}

function Map({}: Props) {
    const MainMap = dynamic(()=> import('@/components/map/MainMap'),{
        ssr:false
    })

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
    <div>
      <Box sx={{mt:8}}>
        <Header toggleDrawer={toggleDrawer} />
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          <Sidebar anchor={'left'} toggleDrawer={toggleDrawer} />
        </Drawer>
          <MainMap/>
      </Box>
    </div>
  )
}

export default Map