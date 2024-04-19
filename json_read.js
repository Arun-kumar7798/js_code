const { json } = require("body-parser");
const fs = require("fs");

const filePath = './json/data.json';


var d = fs.readFileSync(filePath,'utf-8');
var decode =JSON.parse(d);

console.log("json *** ",decode);
