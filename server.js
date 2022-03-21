
const fs = require('fs');
const express = require('express');
const app =express();
const port = process.env.port;
const ipseDixit = 
[
 "...vile e scontata",
 ", ma ti svegli?",
 "? compare nu mongulu",
 "... compare il mio tempo vale 600 euro ora e tu mi parli di sto cesso?",
 "? Un sergio Placanica stupido e Sergio Placanica è stupido ",
 " deve uscire dalla zona di comfort",
 "? fratellino parliamo di soldi?",
 "? nono non è bestia",
 "? mi rissuru che futti",
 "...mi inchiu u cazzu a pirita",
 "..possiamo non parlare di evidenti mongoli?",
 "..compare è autistico",
 "...Front dev developer, what i said i told",


]
const value =  (Math.random() * (0+12) + 1);
app.use(express.json())
app.use(express.urlencoded())
//routes
app.post("/posta", (req,res)=> {
 

})

app.get("/", (req,res)=>{
  res.send({message: `${ipseDixit[value]}};
})



app.listen(process.env.PORT || 5000);