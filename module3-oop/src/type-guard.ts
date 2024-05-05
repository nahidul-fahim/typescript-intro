{
    // Type guard
    /*
    In TypeScript, a type guard is a feature that allows us to narrow down the type of a variable within a certain block of code, based on a condition. This is particularly useful when working with union types or types that are more general.

Type guard is also known as "Type Narrowing"
*/

    // use of typeof operator as type guard
    type NumberString = string | number;

    const add = (param1: NumberString, param2: NumberString): NumberString => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString();
        }
    }

    const result1 = add("2", 5)

    // ================================

    // In guard
    









}