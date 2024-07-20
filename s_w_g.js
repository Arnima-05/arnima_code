function randomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr=['s','w','g']
let a=arr[randomNumber(0,2)]
var comp=0
var user=0
var i=0
while (i<5){
  n=prompt("Enter s for snake ,g for gun and w for water")
  //confirm("Are you sure of your move?")
  let a=arr[randomNumber(0,2)]
  
  if (a==n){
    console.log("Mine is also",n)
    console.log("It's a tie")
  }
  else{
    if (a=='s' && n=='w'){
      console.log("Mine is",a)
      console.log("You lose")
      comp++
    }
    else if (a=='s' && n=='g'){
      console.log("Mine is",a)
      console.log("You win")
      user++
    }
    else if (a=='w' && n=='g'){
      console.log("Mine is",a)
      console.log("You lose")
      comp++
    }
    else if (a=='w' && n=='s'){
      console.log("Mine is",a)
      console.log("You win")
      user++
    }
    else if (a=='g' && n=='s'){
      console.log("Mine is",a)
      console.log("You lose")
      comp++
    }
    else if (a=='g' && n=='w'){
      console.log("Mine is",a)
      console.log("You win")
      user++
    }
  }
  i++
}
console.log("Your score is",user)
console.log("My score is",comp)
if (user>comp){
  console.log("You win")
}
else{
  console.log("You lose")
}
