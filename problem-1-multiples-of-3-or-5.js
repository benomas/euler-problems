let limit = 1000
let numerber1=3
let numerber2=5
let multiples = {}
let range1 = parseInt((limit -1) / numerber1)
let range2 = parseInt((limit -1) / numerber2)
let multipleNumber1
let multipleNumber2

for(let i = 1; i<=range1; i++){
  multipleNumber1 = i*numerber1
  multiples[multipleNumber1] = multipleNumber1
}

for(let j = 1; j<=range2; j++){
  multipleNumber2 = j*numerber2
  multiples[multipleNumber2] = multipleNumber2

  if(typeof multiples[multipleNumber2] === 'undefined')
    multiples[multipleNumber2] = multipleNumber2
}

let acumulator= Object.entries(multiples).reduce((a, b) => {
  return parseInt(a) + parseInt(b)
},0)

console.log(acumulator)
