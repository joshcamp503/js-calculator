var num = [];
var num1;
var num2;
var func;
var total;

$(document).ready(function() {
  $('.num').click(function() {
    num.push(parseInt($(this).text()));
    $('#display').text(num.join(""));
  });

  $('.func').click(function() {
    func = $(this).data('operand');
    num1 = num.join("");
    num = [];
  });
  
  $('#equals').click(function() {
    num2 = num.join("");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (func == "plus") {
      total = add(num1, num2);
    } else if (func == "minus") {
        total = subtract(num1, num2);
    } else if (func == "multiply") {
        total = multiply(num1, num2);
    } else if (func == "divide") {
        total = divide(num1, num2);
    }  else {
        num1 = "";
        num2 = "";
        total = "";
    };
    $('#display').text(total);
    num1 = total;
    func = "";
    num = [];
  });
});

function add(a, b) {
  return a + b;
}

<!-- add(3, 2) -->

function subtract(a, b) {
  return a - b;
}

<!-- subtract(3, 2) -->

function multiply(a, b) {
  return a * b;
}

<!-- multiply(3, 2) -->

function divide(a, b) {
  return a / b;
}


<!-- divide(3, 2) -->


