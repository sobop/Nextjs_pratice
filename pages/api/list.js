import { connectDB } from "@/util/database";

export default async function handler(a, b) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return b.status(200).json(result);
}
