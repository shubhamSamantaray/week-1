
console.log("Hi This is Shubham Here, it's my first cli")

var readInput = require('readline-sync');
var userName = readInput.question('What is your name ?');
var userAge = readInput.question('What is your age ?')
var count = 0
console.log("Welcome !"+userName)

if(userAge==25){
  console.log('You are right!')
  count+=1
} else {
  console.log('Bring your birth certificate')
  count-=1
}
console.log('Count is :'+ count)