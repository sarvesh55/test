import express from "express";
import cors from "cors";

const app=express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY="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";

app.post("/chat",async(req,res)=>{
 try{
  const r=await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+OPENAI_API_KEY
    },
    body:JSON.stringify({
      model:"gpt-4.1",
      messages:[{role:"user",content:req.body.message}]
    })
  });
  const data=await r.json();
  res.json({reply:data.choices?.[0]?.message?.content||"No response",raw:data});
 }catch(e){
  res.status(500).json({error:e.message});
 }
});

app.listen(3000,()=>console.log("Server running on http://localhost:3000"));
