
function multi(numOne,numtwo){
  return numOne*numtwo;
}

var getInput = require('readline-sync');
var firstNum = getInput.question('Enter 1st number')
var secondNum = getInput.question('Enter Second Number')

var result = multi(firstNum,secondNum)
console.log('Out Put is'+result)