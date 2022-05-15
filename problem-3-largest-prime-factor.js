'use strict'

const LargestPrimeFactorCalculator = function () {
  this.primeNumbers = {'2':2}
  this.limit = 2
  this.largestPrimeFactor = null

  this.isPrimeNumber = function(nextNumber) {
    if (this.getPrimeNumbers()[nextNumber] !== undefined)
      return true

    let divisiblePrimeNumber = this.primeNumbersArray().find(primeNumber=>nextNumber % primeNumber === 0)

    if( divisiblePrimeNumber !== undefined)
      return false

    for(let i = this.lastPrimeNumber() + 1; i < nextNumber; i++){
      divisiblePrimeNumber = this.primeNumbersArray().find(primeNumber=>i % primeNumber === 0)

      if(divisiblePrimeNumber !== undefined)
        continue

      this.primeNumberCollect(i)

      if (nextNumber % i === 0)
        return false
    }

    this.primeNumberCollect(nextNumber)

    return true
  }

  this.primeNumberCollect = function (primeNumner = 2) {
    this.getPrimeNumbers()[primeNumner] = primeNumner

    return this
  }

  this.solve = function () {
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
}

let largestPrimeFactorCalculator = new LargestPrimeFactorCalculator()

console.log(largestPrimeFactorCalculator.setLimit(600851475143).solve().getLargestPrimeFactor())

