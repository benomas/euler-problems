'use strict'

let previusNumber = 1
let nextNumber    = 2
let temp
let acumulator = 0

do{
	if (nextNumber % 2 === 0)
    acumulator += nextNumber

	temp = nextNumber
	nextNumber = nextNumber + previusNumber
	previusNumber = temp
}while(nextNumber < 4000000)

console.log(acumulator)
