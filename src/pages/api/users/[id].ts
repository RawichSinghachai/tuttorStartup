import { NextApiRequest, NextApiResponse } from "next";
import { findOne } from "@/server/controllers/Users";


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const id:any = req.query.id;
  
  if(req.method === 'GET'){
    findOne(req,res,id)
}
  
};

export default handler;
