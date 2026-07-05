import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY=process.env.OPENAI_API_KEY;

app.post("/chat",async(req,res)=>{
  try{
    const response=await fetch("https://api.openai.com/v1/chat/completions",{
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
    const data=await response.json();
    res.json(data);
  }catch(err){
    res.status(500).json({error:err.message});
  }
});

app.listen(3000,()=>console.log("Server running on http://localhost:3000"));
