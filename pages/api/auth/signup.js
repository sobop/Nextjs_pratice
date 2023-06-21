import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.body.name || req.body.email || req.body.password !== "") {
    if (req.method == "POST") {
      let hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;
      let db = (await connectDB).db("forum");
      let user = await db
        .collection("user_cred")
        .findOne({ email: req.body.email });
      if (!user) {
        await db.collection("user_cred").insertOne(req.body);
        res.redirect(302, "/list");
      } else {
        return res.status(500).json("이메일중복");
      }
    }
  } else {
    return res.status(500).json("빈칸입력하세요");
  }
}
