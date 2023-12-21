import express from "express";
const app = express();
const port = 3000;

app.get("/" , (req , res) =>{
    res.send("<h1 style = 'color: blue ; text-align : center'><em> Hello</em> </h1>");
});
app.get("/about" , (req , res) =>{
    res.send("<h2>About Me </h2>");
});

app.get("/contact" , (req , res) =>{
    res.send("<h2> Contact Me </h2>");
});

app.listen(port , () =>{
    console.log(`Server is running on port ${port}.` );
});