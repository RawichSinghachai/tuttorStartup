import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import IconButton from '@mui/material/IconButton';
import { red, lightBlue, grey, yellow, blueGrey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Props = {
    name:string
    subject:string
    stars:number
}

function TutorCard({name,subject,stars}: Props) {

    const [like, setLike] = useState<boolean>(false)
    const [unlike, setUnLike] = useState<boolean>(false)

    const clickLike = () => {
        setLike((pre) => !pre)
        setUnLike(false)
    }

    const clickUnLike = () => {
        setUnLike((pre) => !pre)
        setLike(false)
    }
    

    const numberFullStars:number[] = []

    for (let i = 0; i < Number(stars.toString().split('.')[0]); i++) {
        numberFullStars.push(i)   
    }

    return (
        <div>
            <Card sx={{ maxWidth:'350px',borderRadius:4 ,":hover": {boxShadow:'10px 10px 20px' } }} elevation={24}>
                <Stack direction="column" justifyContent="space-between" >

                    <Stack direction="row" justifyContent="space-between" alignItems="center" >
                        <Box sx={{ p:2,display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: "flex-start", width: '200px' }}>
                            <Typography sx={{fontWeight:'bold'}} variant="h5" gutterBottom>
                                {name}
                            </Typography>
                            <Typography sx={{fontWeight:'bold'}} variant="subtitle1" gutterBottom>
                                วิชาที่สอน : 
                            </Typography>
                            <Typography sx={{fontWeight:'bold'}} variant="subtitle1" gutterBottom>
                                - {subject}
                            </Typography>
                        </Box>

                        <Stack sx={{pr:2,}} direction="column" justifyContent="flex-start" alignItems="center" >
                            <PersonIcon sx={{ fontSize: 60, backgroundColor: blueGrey[400], borderRadius: '50%', p: 1 ,mb:2}} />
                            <Stack direction="row" justifyContent="space-around" alignItems="center" >
                                {numberFullStars.map((start,index)=>{
                                    return <StarIcon sx={{ color: yellow['A400'] }} key={index}/>
                                })}

                                {stars.toString().split('.')[1] === '5' ? <StarHalfIcon sx={{ color: yellow['A400'] }} />:<></>}
                                
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ px: 4 ,pt:1 ,mb:2}}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} >
                            {like ? <IconButton onClick={() => clickLike()}>
                                <ThumbUpAltIcon sx={{ fontSize: 30, color: lightBlue[700] }} />
                            </IconButton> :
                                <IconButton onClick={() => clickLike()}>
                                    <ThumbUpOffAltIcon sx={{ fontSize: 30, color: grey[900] }} />
                                </IconButton>}

                            {unlike ? <IconButton onClick={() => clickUnLike()}>
                                <ThumbDownAltIcon sx={{ fontSize: 30, color: grey[700] }} />
                            </IconButton> :
                                <IconButton onClick={() => clickUnLike()}>
                                    <ThumbDownOffAltIcon sx={{ fontSize: 30, color: grey[900] }} />
                                </IconButton>}
                        </Stack>

                        <Button variant="contained">Contact</Button>

                    </Stack>

                </Stack>
            </Card>
        </div>
    )
}

export default TutorCard

