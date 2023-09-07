// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function addOneToNumber(number) {
  return ++number
}

const oneAddedToFive = addOneToNumber(5)
//console.log(oneAddedToFive)

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function capitaliseString (str) {
  const str2 = str.charAt(0).toUpperCase() + str.slice(1)
  return str2
}

const capitalisedPotato = capitaliseString('potato')
console.log(capitalisedPotato);

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

function helloSmile (str) {
  const str2 = str.charAt(0).toUpperCase() + str.slice(1) 
  return 'Hi, ' + str2 + ' :)'
} 

const helloDan = helloSmile ('dan')
console.log(helloDan)

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

function arrayLength (array) {
  return array.length
}
console.log(arrayLength(['cat', 10, 'dog', true, { p: 0, k: 'potato'},'peanut juice']))

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below

function tellEd (object) {
  //check if edward:amazing is found in object
  if (object === { edward:'amazing' } ) {
    return
  }
  //add edward:amazing to the object
  const awesome = (object.edward = 'amazing')
  return awesome 
}

const edwardAmazing = tellEd({ dan: 'exhausted' })

console.log(edwardAmazing)


// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: undefined, // 1. change undefined to be the name of the function you defined for the first TODO
  b: undefined, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: undefined, // etc
  d: undefined,
  e: undefined
}
