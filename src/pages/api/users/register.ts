import { NextApiRequest, NextApiResponse } from 'next';
import { register } from '@/server/controllers/Users';

const handler = (req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        register(req,res)
    }
}

export default handler