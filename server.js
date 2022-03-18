
const fs = require('fs');
const express = require('express');
const app =express();
const port=80;

app.use(express.json())
app.use(express.urlencoded())
//routes
app.post("/posta", (req,res)=> {
   const  nome  = req.body.logo
  console.log(nome)
   if (!nome){
     res.status(418).send({message: "Rammi stu nomi mongolo"})
   }
   res.send({ message: `io odio ${nome} e mi deve pure soldi` })
})

app.get("/", (req,res)=>{
  res.send("idle...")
})



app.listen(process.env.PORT || 8080);