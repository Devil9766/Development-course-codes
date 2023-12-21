import express, { urlencoded } from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
import morgan from "morgan";


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = "";

app.use(morgan("combined"));

app.use(bodyParser.urlencoded({extended: true}));
// function bandnameGenerator(req , res  , next){
//   console.log(req.body);
//   bandName = req.body["street"] + req.body["pet"];
//   next();
// };
// app.use(bandnameGenerator);


app.get("/" , (req ,res) =>{
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit" , (req ,res) =>{
  res.send(`<h1> Your band name is: </h1> <h2>${req.body["street"] + req.body["pet"]}</h2>` );
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
