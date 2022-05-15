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

let maxPalindrome = function (threeDigitNumber) {
  let maxPalindromeNumber = 0
  let testNewPalindrome   = null

  for (let i = threeDigitNumber; i > 0; i--) {
    for (let j = threeDigitNumber; j > 0; j--) {
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

const maxPalindromeNumber = maxPalindrome(999)

console.log(`Is ${maxPalindromeNumber} a palindrome? R=${isPalindrome(maxPalindromeNumber)}`)
