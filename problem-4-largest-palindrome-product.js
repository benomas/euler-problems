'use strict'

let isPalindrome = function (test) {
  test = test.toString()

  if (test.length === 0)
    return false

  let i=0
  let max = test.length - 1

  while(test.length){
    if (i > (max) / 2)
      return true

    if (test[i] !== test[max - i++])
      return false
  }
}

let maxPalindromeFor3DigitsProduct = function () {
  let maxPalindromeNumber = 0
  let testNewPalindrome   = null

  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      testNewPalindrome = i * j

      if(maxPalindromeNumber > testNewPalindrome)
        break

      if (isPalindrome(testNewPalindrome)){
        maxPalindromeNumber = testNewPalindrome

        break
      }
    }
  }

  return maxPalindromeNumber
}

const maxPalindromeNumber = maxPalindromeFor3DigitsProduct()

console.log(`Max palindrome ${maxPalindromeNumber}`)
