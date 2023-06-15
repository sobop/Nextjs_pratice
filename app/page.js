import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log();

  return <div className="list-bg">Home</div>;
}
