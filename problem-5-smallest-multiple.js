'use strict'

const PrimesTool = function () {
  this.primeNumbers = {'2':2}
  this.limit = 2
  this.largestPrimeFactor = null

  this.getLimit = function () {
    return this.limit
  }

  this.getPrimeNumbers = function () {
    return this.primeNumbers
  }

  this.getLargestPrimeFactor = function () {
    return this.largestPrimeFactor
  }

  this.setLimit = function (limit = 2){
    this.limit = limit

    return this
  }

  this.setPrimeNumbers = function (primeNumbers = 2){
    this.primeNumbers = primeNumbers

    return this
  }

  this.setLargestPrimeFactor = function (largestPrimeFactor = 2){
    this.largestPrimeFactor = largestPrimeFactor

    return this
  }

  this.primeFactors = function (testNumber) {
    let primeFactors = {}
    let unfactorized = testNumber
    let newFactor    = null

    do{
      if(this.isPrimeNumber(unfactorized)){
        if (primeFactors[unfactorized] === undefined)
          primeFactors[unfactorized] = 1
        else
          primeFactors[unfactorized]++

        return primeFactors
      }

      newFactor = this.primeNumbersArray().find(primeNumber=>unfactorized % primeNumber === 0)

      if (newFactor === undefined)
        throw new Error('this is a weird case where a number is no prime number but also is not dividible by other primes')

      if (primeFactors[newFactor] === undefined)
        primeFactors[newFactor] = 1
      else
        primeFactors[newFactor]++

      unfactorized = unfactorized / newFactor
    }while(true)
  }

  this.detectPrimeNumbers = function (testNumber) {
    let lastPrimeNumber = this.lastPrimeNumber()

    if (lastPrimeNumber >= testNumber)
      return this

    for (let i = lastPrimeNumber + 1; i <= testNumber; i++) {
      if(this.primeNumbersArray().find(primeNumber=>i % primeNumber === 0) === undefined)
        this.primeNumberCollect(i)
    }

    return this
  }

  this.primeSmarthLimit = function (testNumber) {
    let limit = parseInt(testNumber / this.lastPrimeNumber())

    if(testNumber % this.lastPrimeNumber() === 0)
      limit --

    return limit
  }

  //cant be reusable, because the primeNumbers array is not completed, it has the minumun requires for the current calculation
  this.isPrimeNumber = function(testNumber) {
    if (this.getPrimeNumbers()[testNumber] !== undefined)
      return true

    let divisiblePrimeNumber = this.primeNumbersArray().find(primeNumber=>testNumber % primeNumber === 0)

    if( divisiblePrimeNumber !== undefined)
      return false

    let path             = this.lastPrimeNumber() + 1
    let primeSmarthLimit = this.primeSmarthLimit(testNumber)

    while (path < primeSmarthLimit){
      divisiblePrimeNumber = this.primeNumbersArray().find(primeNumber=>path % primeNumber === 0)

      if(divisiblePrimeNumber !== undefined){
        path ++

        continue
      }

      this.primeNumberCollect(path)

      if (testNumber % path === 0)
        return false

      primeSmarthLimit = this.primeSmarthLimit(testNumber)
    }

    this.primeNumberCollect(testNumber)

    return true
  }

  this.primeNumberCollect = function (primeNumner = 2) {
    this.getPrimeNumbers()[primeNumner] = primeNumner

    return this
  }

  this.calculateLargestPrimeFactor = function () {
    let primeFactor = null

    for(let i = this.firstPrimeNumber(); i < this.getLimit(); i++){
      if (this.getLimit() % i !== 0)
        continue

      primeFactor = this.getLimit() / i

      if (this.isPrimeNumber(primeFactor))
        return this.setLargestPrimeFactor(primeFactor)
    }

    return this.setLargestPrimeFactor(primeFactor)
  }

  this.primeNumbersArray = function () {
    return Object.values(this.getPrimeNumbers())
  }

  this.firstPrimeNumber = function () {
    return parseInt(this.primeNumbersArray()[0])
  }

  this.lastPrimeNumber = function () {
    return parseInt(this.primeNumbersArray().slice(-1)[0])
  }
}

let primesTool    = new PrimesTool()
let globalFactors = {}
let currentPrimeFactors
let limit = 20

primesTool.detectPrimeNumbers(limit)

for (let i = limit; i > 0 ; i--){
  currentPrimeFactors = primesTool.primeFactors(i)

  Object.keys(currentPrimeFactors).forEach(primeNumber => {
    if (globalFactors[primeNumber] === undefined)
      globalFactors[primeNumber] = currentPrimeFactors[primeNumber]
    else{
      if (currentPrimeFactors[primeNumber] > globalFactors[primeNumber])
        globalFactors[primeNumber] = currentPrimeFactors[primeNumber]
    }
  })
}

let minimumMultiple = Object.keys(globalFactors).reduce((previousValue, currentValue)=>{
  return previousValue * Math.pow(currentValue,globalFactors[currentValue])
},1)

console.log(globalFactors)
console.log(minimumMultiple)

