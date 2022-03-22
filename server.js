
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


app.use(express.json())
app.use(express.urlencoded())
//routes
app.post("/post", (req,res)=> {
const add = req.body.message;
console.log(add)
ipseDixit.push(add);
})

app.get("/", (req,res)=>{
  const value =  Math.round(Math.random() * (0+ipseDixit.length-1) * 1);
  console.log(value);
  var phrase = ipseDixit[value] 
  res.send({message: ` ${phrase}`})
})



app.listen(process.env.PORT || 5001)