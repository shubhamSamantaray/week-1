var getUserInput = require('readline-sync')
var count = 0

function appDemo(question, answer) {
  var getInput = getUserInput.question(question)

  console.log('Your response is ' + getInput)
  if (getInput == answer) {
    console.log('You are right')
    count += 1
  } else {
    console.log('Wrong anser how could you')
    count -= 1
  }
  return count
}

console.log(appDemo('What is my name','Shubham'))

console.log(appDemo('What is my city','bbsr'))
