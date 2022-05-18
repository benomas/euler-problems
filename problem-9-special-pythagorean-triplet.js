'use strict'

let a = 1
let b = 1

while (a + b - ((a*b)/1000) !== 500){
  a++

  if (a >= b){
    a = 1
    b ++
  }
}

let c = 1000 - a - b

console.log(a*b*c)
