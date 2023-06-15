import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log(req.query);
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .deleteOne({ _id: new ObjectId(req.query.delete) });

  return res.status(200).json();
}
