import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function Imagehome() {
  return (
    <Card sx={{ width:'500px',height:'500px',borderRadius:2 }}>
      {/* <CardMedia
        sx={{ height:500 }}
        image="https://i.pinimg.com/564x/fa/c8/05/fac8059ac5373cffe16bcb032a3e9c57.jpg"
        title="green iguana"
      /> */}
      <img 
      src="https://i.pinimg.com/564x/77/9a/ef/779aefad2fa4ce24055e707041513101.jpg" alt="" />
    </Card>
  );
}