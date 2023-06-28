const express = require("express");
const ep = express();
ep.set('view engine', 'ejs');



ep.get("/", (req,res) =>{

	res.render("index");

});

ep.listen(4000,()=>{

	console.log("Server Aberto!");

});