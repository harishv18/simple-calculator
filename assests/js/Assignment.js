function execute() {
  var num1 = document.getElementById('firstnum').value;
  var num2 = document.getElementById('secondnum').value;

  var operator = document.getElementById('operators').value;
  switch (operator) {
    case 'Addition':
      document.getElementById('result').innerHTML = operator + " of 2 numbers = " + (Number(num1) + Number(num2));
      break;
    case 'Subtraction':
      document.getElementById('result').innerHTML = operator + " of 2 numbers = " + (Number(num1) - Number(num2));
      break;
    case 'Multiplication':
      document.getElementById('result').innerHTML = operator + " of 2 numbers = " + (Number(num1) * Number(num2));
      break;
    case 'Divison':
      document.getElementById('result').innerHTML = operator + " of 2 numbers = " + (Number(num1) / Number(num2));
      break;
    case 'Modulus':
      document.getElementById('result').innerHTML = operator + " of 2 numbers = " + (Number(num1) % Number(num2));
      break;
  }

}