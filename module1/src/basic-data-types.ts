// Basic data types of typescript

// string
let firstName = "Nahidul Islam" // if we don't declare the data types and typescript compiler assumes the data types internally, then it is called implicit data types.
let secondName: string = "Fahim" // if we explicitly declare the data types, then it is called explicit data types.

// number
let rollNumber: number = 122;

// boolean
let isSuperHero: boolean = false;

// undefined
let x: undefined = undefined;

// null
let y: null = null

let z: any

// we should not declare 'any' data type. By this, we are actually ignoring the power of typescript.


// Array [Non primitive data type]

let friend: string[] = ["Fahim", "Nahid", "Rasel", "Karib"] // As it is a sting type array, so we cannot put anything else here except string.



// tuple => it is also a type of array. But here it maintains 'order'
// A tuple is a data structure that allows us to store a fixed-size ordered collection of elements. Each element in a tuple can have a different data type.

let person: [string, number, boolean] = ["Fahim", 27, true] // here we have to maintain the order of data types. Means first string, then number, then boolean.

// person[1] = 'nahid'
// it is not possible as the second value is a number type. So, we cannot assign string there.

person [1] = 28 // now it is possible as it is a number type.