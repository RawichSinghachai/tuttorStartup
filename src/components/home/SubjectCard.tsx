import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

type Props = {
  topic:string,
  duration:string,
  price:string,
}

export default function SubjectCard({topic,duration,price}:Props) {
  return (
    <Card sx={{minWidth: 250 ,borderRadius:2}}>
      <CardMedia
        sx={{ height: 150 }}
        image="https://i.pinimg.com/236x/c3/6c/d7/c36cd75d64109d8fc4fdc89743fb7877.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {topic}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {duration}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>

      </CardContent>

      <Stack spacing={2} direction={{md:'row' ,sm:'row', xs:'column'}} justifyContent={"flex-end"} sx={{p:2}} >
      <Button variant="contained">Buy Now</Button>
      <Button variant="contained">Read Detail</Button>
      </Stack>

    </Card>
  );
}