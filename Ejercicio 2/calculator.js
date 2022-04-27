//jshint esversion:6

// NPM Section
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

var errorMessage = "<h1>404</h1><p>A habido un error.</p>";

app.use(bodyParser.urlencoded({extended: true}));

// Home Section
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var operator = req.body.op;

  function calculate(n1, n2, op) {
    var result = 0;

    if (operator == "+") {
      result = n1+n2;
      res.send("La suma de " + n1 + " y " + n2 + " es " + result);
    } else if (operator == "-") {
      result = n1-n2;
      res.send("La resta de " + n1 + " y " + n2 + " es " + result);
    } else if (operator == "/") {
      result = n1/n2;
      res.send("La division de " + n1 + " y " + n2 + " es " + result);
    } else if (operator == "*") {
      result = n1*n2;
      res.send("La multiplicacion de " + n1 + " y " + n2 + " es " + result);
    } else {
      res.send(errorMessage);
    }
  }

  calculate(num1, num2, operator);

});


app.listen(port, function(){
  console.log("Busca el servidor: " + port + ".");
});
