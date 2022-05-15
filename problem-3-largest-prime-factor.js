'use strict'

const LargestPrimeFactorCalculator = function () {
  let self = this
  this.primeNumbers = {'2':2}
  this.limit = 2
  this.largestPrimeFactor = null

  this.isPrimeNumber = function(nextNumber){
    if (self.getPrimeNumbers()[nextNumber] !== undefined)
      return true

    let divisiblePrimeNumber = self.primeNumbersArray().find(primeNumber=>nextNumber % primeNumber === 0)

    if( divisiblePrimeNumber !== undefined)
      return false

    for(let i = self.lastPrimeNumber() + 1; i < nextNumber; i++){
      divisiblePrimeNumber = self.primeNumbersArray().find(primeNumber=>i % primeNumber === 0)

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
    self.getPrimeNumbers()[primeNumner] = primeNumner

    return self
  }

  this.solve = function () {
    let primeFactor = null

    for(let i = self.firstPrimeNumber(); i < self.getLimit(); i++){
      if (self.getLimit() % i !== 0)
        continue

      primeFactor = self.getLimit() / i

      if (self.isPrimeNumber(primeFactor))
        return this.setLargestPrimeFactor(primeFactor)
    }

    return this.setLargestPrimeFactor(primeFactor)
  }

  this.primeNumbersArray = function () {
    return Object.values(self.getPrimeNumbers())
  }

  this.firstPrimeNumber = function () {
    return parseInt(self.primeNumbersArray()[0])
  }

  this.lastPrimeNumber = function () {
    return parseInt(self.primeNumbersArray().slice(-1)[0])
  }

  this.getLimit = function () {
    return self.limit
  }

  this.getPrimeNumbers = function () {
    return self.primeNumbers
  }

  this.getLargestPrimeFactor = function () {
    return self.largestPrimeFactor
  }

  this.setLimit = function (limit = 2){
    self.limit = limit

    return this
  }

  this.setPrimeNumbers = function (primeNumbers = 2){
    self.primeNumbers = primeNumbers

    return this
  }

  this.setLargestPrimeFactor = function (largestPrimeFactor = 2){
    self.largestPrimeFactor = largestPrimeFactor

    return this
  }
}

let largestPrimeFactorCalculator = new LargestPrimeFactorCalculator()

console.log(largestPrimeFactorCalculator.setLimit(600851475143).solve().getLargestPrimeFactor())

