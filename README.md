## Getting Started

```bash
npm run dev
```

## Client Side Rendering

```bash
"use client";
```

Client Side Rendering에 컴포넌트 추가 후, props로 전달 가능

## MongoDB를 통한 게시판

```bash
export default async function handler(req(요청), res(응답))
let db = (await connectDB).db("forum");


let result = db.collection("post")

// 전체 리스트 나열
.find().toArray();

// 등록
.insertOne(req.body);

// 수정
.updateOne({ _id: new ObjectId(req.body._id) }, { $set: edit });

//삭제
.deleteOne({ _id: new ObjectId(req.body._id) });

```

## fetch GET Data 전송방법

```bash
fetch('/api/delete?a=1&b=2')

// {a:1, b:2} 전달
```
