// var days = ["monday" , "tuesday" , "wednesday", "thursday" , "friday" , "saturday" , "sunday"];

// function getDay(){
//     var randomNumber = Math.floor(Math.random()* 6) + 1;
//     console.log(randomNumber);
//     var randomDay = days[randomNumber];
//     console.log(randomDay); 
//     return randomDay;
// }
// getDay()

const newDay = new Date();
const day= newDay.getDay();
console.log(day)

import  express  from "express";
// import {dirname} from "path";
// import {fileURLToPath} from "url";

const app = express();
const port = 3000; 
// const _dirname = dirname(fileURLToPath(import.meta.url));
let type = "a weekday";
let adv = "it's time to work hard!";

if (day === 0 || day === 6){
    type = "the weekend";
    adv = "it's time to have some fun!";
}


app.get("/" , (req , res) =>{
    const rand = day;
    res.render("index.ejs" , 
    {
        dayType : type,
        advise : adv,
    });
});

app.listen(3000 , ()=>{
    console.log(`Server successfully started on port ${port}`);
});