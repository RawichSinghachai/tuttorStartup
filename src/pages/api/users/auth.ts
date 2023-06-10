import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '@/server/controllers/Users';

const handler = (req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        auth(req,res)
    }
}

export default handler