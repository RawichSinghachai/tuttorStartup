import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from 'react-redux';
import ImageListItem from '@mui/material/ImageListItem';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Checkdata from '@/components/Checkdata';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';

export default function Login() {
  const router = useRouter()

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')



  const onsubmit = async(e:any) =>{
    e.preventDefault()
    const datauser = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/users/login`,{
      username:name,
      password:password
    })
    sessionStorage.setItem('token', datauser.data.token)
    if(datauser.data.status === 'correct'){
      setName('')
      setPassword('')
      router.push('/')
    }
    if(datauser.data.status === 'incorrect'){
      console.log('login fail');
    }
  }

  return (
    <div>
      <Checkdata/>
      <Card sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        <Card sx={{width:{md:1000,sm:700,},p:2}} elevation={12}>
          <Stack direction="row" justifyContent="flex-start" alignItems="center" >

              <ImageListItem sx={{ width:{md:500,sm:350,xs:0}, maxHeight: 500 ,pr:{md:2,sm:2,xs:0}}}>
                <img src='https://i.pinimg.com/736x/f1/94/59/f19459f518dcedcf5da062dfd6db615d.jpg'/>
              </ImageListItem>


            <Paper elevation={0} sx={{width:{md:500,sm:350,}, maxHeight: 500 ,}}>

              <Stack  direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography variant="h4" gutterBottom>Login</Typography>
              </Stack>

              <form autoComplete='off' onSubmit={(e)=>onsubmit(e) }>
                <TextField  label="Name" variant="outlined" helperText="Incorrect entry." fullWidth sx={{mb:2}}
                  value={name}  onChange={(e)=>setName(e.target.value)} />

                <TextField  label="Password" variant="outlined" fullWidth sx={{mb:2}}
                  value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <Stack  direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{mb:1}}>
                  <Typography variant="body2" gutterBottom>Forget Password?</Typography>
                </Stack>

                  <Button variant="contained" fullWidth type='submit'>Submit</Button>

              </form>
              
              <Stack  direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{mt:2}}>
                <Typography variant="body2" gutterBottom><Link href='/register'>Create Account?</Link></Typography>
              </Stack>

            </Paper>

          </Stack>
        </Card>
      </Card>
    </div>
  )
}
