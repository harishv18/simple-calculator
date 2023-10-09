function result() {
  var num1 = document.getElementById('inputfield1').value;
  var num2 = document.getElementById('inputfield2').value;
  var op = document.getElementById('operator').value;

  if (op == '+') {
    var result = parseInt(num1) + parseInt(num2);
  }
  else if (op == '-') {
    var result = parseInt(num1) - parseInt(num2);
  }
  else if (op == '*') {
    var result = parseInt(num1) * parseInt(num2);
  }
  else if (op == '/') {
    var result = parseInt(num1) / parseInt(num2);
  }
  else if (op == '%') {
    var result = parseInt(num1) % parseInt(num2);
  }
  else if(op == '>') {
    var result = parseInt(num1) > parseInt(num2);
  }
  else if(op == '>=') {
    var result = parseInt(num1) >= parseInt(num2);
  }
  else if(op == '<') {
    var result = parseInt(num1) < parseInt(num2);
  }
  else if(op == '<=') {
    var result = parseInt(num1) <= parseInt(num2);
  }
  else if(op == '!=') {
    var result = parseInt(num1) != parseInt(num2);
  }
  else if(op == '==') {
    var result = parseInt(num1) == parseInt(num2);
  }
  else if(op == '|') {
    var result = parseInt(num1) | parseInt(num2);
  }
  else if(op == '&') {
    var result = parseInt(num1) & parseInt(num2);
  }
  // else if(op == '~') {
  //   var result = parseInt(num1) ~ parseInt(num2);
  // }
  else if(op == '^') {
    var result = parseInt(num1) ^ parseInt(num2);
  }
  else if(op == '>>') {
    var result = parseInt(num1) >> parseInt(num2);
  }
  else if(op == '>>>') {
    var result = parseInt(num1) >>> parseInt(num2);
  }
  else if(op == '<<') {
    var result = parseInt(num1) << parseInt(num2);
  }

  document.getElementById('demo').innerHTML = result;
}

function clearInputFields() {
  document.getElementById("inputfield1").value = "";
  document.getElementById("operator").value = "";
  document.getElementById("inputfield2").value = "";
  document.getElementById("demo").innerHTML = "";
}
