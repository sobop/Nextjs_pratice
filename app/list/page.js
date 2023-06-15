import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log();

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}