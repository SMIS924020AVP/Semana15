var express = require("express");
var app = express();
var PORT = 8080;

app.get('/:operator/:num1/:num2', function(req,res){
	
	var operator = req.params.operator
	var num1 = parseInt(req.params.num1);
	var num2 = parseInt(req.params.num2);
	var result;

	switch(operator){
		case "Suma":
		result = add(num1, num2);
		break;

		case "Resta":
		result = subtract(num1, num2);
		break;

		case "Multiplicacion":
		result = multiply(num1, num2);
		break;

		case "division":
		result = divide(num1, num2);
		break;

		default:
		result = "Operacion invalida!"
	}

	function add(a, b){
		return a + b
	}

	function subtract(a, b){
		return a - b
	}

	function multiply(a, b){
		return a * b
	}

	function divide(a, b){
		return a / b
	}

	res.json(result);
});

app.get("/", function(req, res){
	res.send("Inserta tu problema matematico")
});


app.listen(PORT, function(){
	console.log("App enlistada en el puerto:" + PORT);
});

