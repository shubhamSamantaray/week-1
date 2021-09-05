var getInput = require('readline-sync')
var noOfLines = getInput.question('How many lines you want')

let stringToPRint = ""
for(i=0;i<noOfLines;i++){
  for(j=0;j<i;j++){
    stringToPRint+="*"
  }
  stringToPRint +="\n"
}
console.log(stringToPRint)