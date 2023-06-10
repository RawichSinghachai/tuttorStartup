import { NextApiRequest, NextApiResponse } from 'next';
import { findAll,update } from '@/server/controllers/Users';

const handler = (req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'GET'){
        findAll(req,res)
    }
    else if(req.method === 'PUT'){
        update()
    }
}

export default handler