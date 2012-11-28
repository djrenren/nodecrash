var tools = require('./tools'),
  cal = tools.calendar,
  calc = tools.calculator;

console.log( "1 + 2 = " + calc.add(1,2) );
console.log( "Today is: " + cal.today() );