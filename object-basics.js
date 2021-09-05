var superMan = {
  flyingPower: 1000,
  strength: 1000,
  stealth: 0,
  intelligence: 100,
  fanFollowing: 1000
}

var batMan = {
  flyingPower: 100,
  strength: 200,
  stealth: 1000,
  intelligence: 1000,
  fanFollowing: 1000
}

function checkProp(superManProp, batmanProp) {
  if (superMan.superManProp > batMan.batmanProp) {
    return "SuperMan is the winner in " + superManProp
  } else {
    return "Batman is the winner!! in " + batmanProp
  }
}

console.log(superMan.stealth)
console.log(batMan.stealth)

console.log(checkProp("stealth","stealth"))