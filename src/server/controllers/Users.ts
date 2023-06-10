import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient , ObjectId} from "mongodb";
const client: any = new MongoClient(process.env.NEXT_PUBLIC_MONGODB!);
const jwt = require("jsonwebtoken");

const secret = process.env.NEXT_PUBLIC_SECRET;

export const findAll = async (req: NextApiRequest, res: NextApiResponse) => {
  await client.connect();
  const users = await client
    .db("database")
    .collection("user")
    .find({})
    .toArray();
  await client.close();
  res.json(users);
};

export const findOne = async (req: NextApiRequest, res: NextApiResponse ,id:any) => {
  const objectId = new ObjectId(id);
  await client.connect();
  const users = await client
    .db("database")
    .collection("user")
    .findOne({_id:objectId});
    // .toArray();
    console.log(id)
  await client.close();
  res.json(users);
};

export const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password, age, school, email }: any = req.body;
  await client.connect();
  await client
    .db("database")
    .collection("user")
    .insertMany([
      {
        username: username,
        password: password,
        age: age,
        school: school,
        email: email,
        type: "Student",
        course: null,
      },
    ]);
  await client.close();
  res.status(200).json({ data: "ok"});
};

export const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password }: any = req.body;
  try {
    await client.connect();
    const user = await client
      .db("database")
      .collection("user")
      .findOne({ $and: [{ username: username, password: password }] });
    await client.close();
    const token = jwt.sign(
      {
        username: user.username,
        email: user.email,
        course: user.course,
        type: user.type,
      },
      secret
    );
    res.json({ status: "correct", token });
  } catch (error) {
    res.json({ status: "incorrect" });
  }
};

export const auth = async (req: any, res: NextApiResponse) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token.split(" ")[1], secret);
    res.json({ status: "success", decoded });
  } catch (error) {
    res.json({ status: "error" });
  }
};

export const update = async () => {
  await client.connect();
  await client
    .db("database")
    .collection("user")
    .updateOne(
      { username: "Jame" },
      { $set: { username: "Black", course: "pat1" } }
    );
  await client.close();
};
